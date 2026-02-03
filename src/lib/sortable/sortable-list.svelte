<script lang="ts" generics="T extends SortableItemProps">
	import type { Options, SortableEvent, MoveEvent } from 'sortablejs';
	import { type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SortableItemProps, SortableMoveInfo } from './types.js';
	import Sortable from './sortable.svelte';
	import { sortByPosition, getNeighborPositions, calculatePosition } from './fractional.js';
	import { setDragging, clearDragging, getDraggingItem } from './store.svelte.js';

	// ========================================================================
	// Props Interface
	// ========================================================================

	// Omit 'draggable' from HTMLAttributes as it conflicts with SortableJS's draggable option
	interface Props extends Omit<HTMLAttributes<HTMLElement>, 'draggable'> {
		/** Lista de itens (deve ter position para fractional indexing) */
		list: T[];

		/** Tag HTML do container (default: 'div') */
		tag?: keyof HTMLElementTagNameMap;

		/** Classe CSS */
		class?: string;

		/** Children snippet */
		children: Snippet;

		// SortableJS Options
		group?: string | Options['group'];
		sort?: boolean;
		delay?: number;
		delayOnTouchOnly?: boolean;
		touchStartThreshold?: number;
		disabled?: boolean;
		animation?: number;
		easing?: string;
		handle?: string;
		filter?: string;
		preventOnFilter?: boolean;
		draggable?: string;
		dataIdAttr?: string;
		ghostClass?: string;
		chosenClass?: string;
		dragClass?: string;
		swapThreshold?: number;
		invertSwap?: boolean;
		invertedSwapThreshold?: number;
		direction?: 'vertical' | 'horizontal';
		forceFallback?: boolean;
		fallbackClass?: string;
		fallbackOnBody?: boolean;
		fallbackTolerance?: number;
		fallbackOffset?: { x: number; y: number };
		removeCloneOnHide?: boolean;
		emptyInsertThreshold?: number;

		// ====================================================================
		// Raw Event Handlers (SortableJS events)
		// ====================================================================
		onStart?: (evt: SortableEvent) => void;
		onEnd?: (evt: SortableEvent) => void;
		onAdd?: (evt: SortableEvent) => void;
		onRemove?: (evt: SortableEvent) => void;
		onUpdate?: (evt: SortableEvent) => void;
		onMove?: (evt: MoveEvent, originalEvent: Event) => boolean | -1 | 1 | void;
		onChoose?: (evt: SortableEvent) => void;
		onUnchoose?: (evt: SortableEvent) => void;
		onSort?: (evt: SortableEvent) => void;
		onChange?: (evt: SortableEvent) => void;
		onClone?: (evt: SortableEvent) => void;
		onFilter?: (evt: SortableEvent) => void;

		// ====================================================================
		// Simplified Callbacks (Recommended)
		// ====================================================================

		/**
		 * Chamado quando item é reordenado dentro da mesma lista.
		 * O SortableList reverte o DOM automaticamente - use este callback
		 * para atualizar o estado com a nova position.
		 */
		onReorder?: (info: SortableMoveInfo<T>) => void;

		/**
		 * Chamado quando item é recebido de outra lista.
		 * O SortableList remove o elemento DOM automaticamente - use este callback
		 * para adicionar o item ao estado com a nova position.
		 */
		onReceive?: (info: SortableMoveInfo<T>) => void;

		/**
		 * Chamado quando item é enviado para outra lista.
		 * Use este callback para remover o item do estado.
		 */
		onSend?: (info: SortableMoveInfo<T>) => void;

		// ====================================================================
		// Clone Handler
		// ====================================================================

		/**
		 * Função para clonar item quando usando pull: 'clone'.
		 * Se não fornecida, o item original é usado.
		 */
		clone?: (item: T, evt: SortableEvent) => T;
	}

	// ========================================================================
	// Props Destructuring
	// ========================================================================

	let {
		list,
		tag = 'div',
		class: className,
		children,

		// SortableJS options
		group,
		sort = true,
		delay = 0,
		delayOnTouchOnly = false,
		touchStartThreshold = 0,
		disabled = false,
		animation = 0,
		easing,
		handle,
		filter,
		preventOnFilter = true,
		draggable = '>*',
		dataIdAttr = 'data-id',
		ghostClass,
		chosenClass,
		dragClass,
		swapThreshold = 1,
		invertSwap = false,
		invertedSwapThreshold,
		direction,
		forceFallback = false,
		fallbackClass,
		fallbackOnBody = false,
		fallbackTolerance = 0,
		fallbackOffset,
		removeCloneOnHide = true,
		emptyInsertThreshold = 5,

		// Raw event handlers
		onStart,
		onEnd,
		onAdd,
		onRemove,
		onUpdate,
		onMove,
		onChoose,
		onUnchoose,
		onSort,
		onChange,
		onClone,
		onFilter,

		// Simplified callbacks
		onReorder,
		onReceive,
		onSend,

		// Clone handler
		clone: cloneFn,

		...restProps
	}: Props = $props();

	// ========================================================================
	// DOM Reversion Helper
	// ========================================================================

	/**
	 * Reverte a alteração do DOM feita pelo SortableJS.
	 * Como o Svelte controla o DOM através do estado, precisamos desfazer
	 * a manipulação direta feita pelo SortableJS.
	 */
	function revertDOMMove(evt: SortableEvent): void {
		const { item, from, to, oldIndex, newIndex } = evt;

		if (oldIndex === undefined || newIndex === undefined) return;

		// Se moveu para outra lista, remover do destino e devolver para origem
		if (from !== to) {
			to.removeChild(item);
			if (oldIndex < from.children.length) {
				from.insertBefore(item, from.children[oldIndex]);
			} else {
				from.appendChild(item);
			}
		} else {
			// Se moveu dentro da mesma lista, reverter a posição
			const parent = item.parentNode;
			if (!parent) return;

			// Remover do novo local
			parent.removeChild(item);

			// Inserir no local original
			if (oldIndex < parent.children.length) {
				parent.insertBefore(item, parent.children[oldIndex]);
			} else {
				parent.appendChild(item);
			}
		}
	}

	// ========================================================================
	// Position Calculation Helper
	// ========================================================================

	/**
	 * Calcula a nova position para um item baseado no newIndex.
	 */
	function calculateNewPosition(newIndex: number, movedItemId: string | number): number {
		const sortedList = sortByPosition(list);
		const [prevPos, nextPos] = getNeighborPositions(sortedList, newIndex, movedItemId);
		return calculatePosition(prevPos, nextPos);
	}

	// ========================================================================
	// Event Handlers
	// ========================================================================

	function handleStart(evt: SortableEvent): void {
		// Armazenar a lista atual no store global para coordenação entre listas
		const container = evt.from;
		setDragging(list, container);

		// Chamar callback do usuário
		onStart?.(evt);
	}

	function handleEnd(evt: SortableEvent): void {
		// Limpar store global
		clearDragging();

		// Chamar callback do usuário
		onEnd?.(evt);
	}

	function handleUpdateEvent(evt: SortableEvent): void {
		const { oldIndex, newIndex } = evt;

		if (oldIndex === undefined || newIndex === undefined) return;
		if (oldIndex === newIndex) return;

		// Reverter DOM - Svelte controla o estado
		revertDOMMove(evt);

		// Obter item e calcular nova position
		const sortedList = sortByPosition(list);
		const item = sortedList[oldIndex];

		if (!item) return;

		const newPosition = calculateNewPosition(newIndex, item.id);

		// Chamar callback simplificado
		onReorder?.({
			item: { ...item, position: newPosition } as T,
			oldIndex,
			newIndex
		});

		// Chamar callback raw
		onUpdate?.(evt);
	}

	function handleAddEvent(evt: SortableEvent): void {
		const { oldIndex, newIndex, item: draggedEl } = evt;

		if (oldIndex === undefined || newIndex === undefined) return;

		// Remover elemento do DOM - Svelte vai adicionar via estado
		draggedEl.parentNode?.removeChild(draggedEl);

		// Obter item da lista de origem através do store
		const draggedItem = getDraggingItem<T>(oldIndex);

		if (!draggedItem) return;

		// Calcular nova position baseada nos vizinhos nesta lista
		const newPosition = calculateNewPosition(newIndex, draggedItem.id);

		// Criar item com nova position (aplicar clone se fornecido)
		const newItem = cloneFn ? cloneFn(draggedItem, evt) : { ...draggedItem };
		const itemWithPosition = { ...newItem, position: newPosition } as T;

		// Chamar callback simplificado
		onReceive?.({
			item: itemWithPosition,
			oldIndex,
			newIndex
		});

		// Chamar callback raw
		onAdd?.(evt);
	}

	function handleRemoveEvent(evt: SortableEvent): void {
		const { oldIndex, newIndex } = evt;

		if (oldIndex === undefined || newIndex === undefined) return;

		// Obter item que foi removido
		const sortedList = sortByPosition(list);
		const item = sortedList[oldIndex];

		if (!item) return;

		// Chamar callback simplificado
		onSend?.({
			item,
			oldIndex,
			newIndex
		});

		// Chamar callback raw
		onRemove?.(evt);
	}
</script>

<!--
  Extended SortableJS wrapper with coordinated features.

  This component provides:
  - Store coordination for multi-list drag-and-drop
  - Automatic DOM reversion (Svelte controls DOM via state)
  - Simplified callbacks (onReorder, onReceive, onSend)
  - Fractional indexing support (items must have position)

  For a pure wrapper without these features, use Sortable instead.
-->
<Sortable
	{tag}
	class={className}
	{group}
	{sort}
	{delay}
	{delayOnTouchOnly}
	{touchStartThreshold}
	{disabled}
	{animation}
	{easing}
	{handle}
	{filter}
	{preventOnFilter}
	{draggable}
	{dataIdAttr}
	{ghostClass}
	{chosenClass}
	{dragClass}
	{swapThreshold}
	{invertSwap}
	{invertedSwapThreshold}
	{direction}
	{forceFallback}
	{fallbackClass}
	{fallbackOnBody}
	{fallbackTolerance}
	{fallbackOffset}
	{removeCloneOnHide}
	{emptyInsertThreshold}
	onStart={handleStart}
	onEnd={handleEnd}
	onUpdate={handleUpdateEvent}
	onAdd={handleAddEvent}
	onRemove={handleRemoveEvent}
	{onMove}
	{onChoose}
	{onUnchoose}
	{onSort}
	{onChange}
	{onClone}
	{onFilter}
	{...restProps}
>
	{@render children()}
</Sortable>
