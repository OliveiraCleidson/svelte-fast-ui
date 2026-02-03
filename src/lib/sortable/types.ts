import type Sortable from 'sortablejs';
import type { Options, SortableEvent, MoveEvent } from 'sortablejs';

// ============================================================================
// Item Interfaces
// ============================================================================

/**
 * Interface base para itens sortáveis (wrapper puro).
 * Apenas requer um `id` único para identificação.
 */
export interface SortableItem {
	/** ID único do item (usado como key no #each) */
	id: string | number;
	/** Propriedades adicionais */
	[key: string]: unknown;
}

/**
 * Interface estendida para itens com fractional indexing.
 * Usada pelo SortableList para coordenação entre listas.
 */
export interface SortableItemProps extends SortableItem {
	/** Posição do item para ordenação (fractional indexing) */
	position: number;
	/** Quando true, o item está selecionado (MultiDrag) */
	selected?: boolean;
	/** Quando true, o item está "chosen" (mousedown) */
	chosen?: boolean;
	/** Quando true, o item não pode ser arrastado */
	filtered?: boolean;
}

// ============================================================================
// Move Info Interface
// ============================================================================

/**
 * Informações sobre um movimento de drag-and-drop.
 * Usado pelos novos callbacks onReorder, onReceive, onSend.
 */
export interface SortableMoveInfo<T extends SortableItemProps> {
	/** O item que foi movido */
	item: T;
	/** Índice original (posição visual antes do movimento) */
	oldIndex: number;
	/** Novo índice (posição visual depois do movimento) */
	newIndex: number;
}

// ============================================================================
// Store Interface
// ============================================================================

/**
 * Store global para coordenar drag entre listas diferentes.
 */
export interface SortableStore {
	dragging: {
		list: SortableItemProps[];
		el: HTMLElement;
	} | null;
}

// ============================================================================
// Normalized Item
// ============================================================================

/**
 * Estrutura normalizada para manipulação de DOM e estado.
 */
export interface NormalizedItem<T> {
	item: T;
	element: HTMLElement;
	parentElement: HTMLElement;
	oldIndex: number;
	newIndex: number;
}

// ============================================================================
// Event Handler Types
// ============================================================================

export type SortableEventHandler = (
	evt: SortableEvent,
	sortable: Sortable | null,
	store: SortableStore
) => void;

export type MoveEventHandler = (
	evt: MoveEvent,
	originalEvent: Event,
	sortable: Sortable | null,
	store: SortableStore
) => boolean | -1 | 1 | void;

// ============================================================================
// Component Props
// ============================================================================

/**
 * Nomes de todos os métodos on* do SortableJS
 */
export type AllMethodNames =
	| 'onAdd'
	| 'onChange'
	| 'onChoose'
	| 'onClone'
	| 'onEnd'
	| 'onFilter'
	| 'onMove'
	| 'onRemove'
	| 'onSort'
	| 'onSpill'
	| 'onStart'
	| 'onUnchoose'
	| 'onUpdate'
	| 'onSelect'
	| 'onDeselect';

/**
 * Props do componente Sortable para Svelte 5
 */
export interface SortableComponentProps<T extends SortableItemProps> extends Omit<
	Options,
	AllMethodNames
> {
	/** Lista de itens (bindable) */
	list: T[];

	/** Tag HTML do container (default: 'div') */
	tag?: string;

	/** Classe CSS */
	class?: string;

	// ========================================================================
	// Event Handlers
	// ========================================================================

	/** Chamado quando drag inicia */
	onStart?: (evt: SortableEvent, sortable: Sortable | null) => void;

	/** Chamado quando drag termina */
	onEnd?: (evt: SortableEvent, sortable: Sortable | null) => void;

	/** Chamado quando item é adicionado de outra lista */
	onAdd?: (evt: SortableEvent, sortable: Sortable | null) => void;

	/** Chamado quando item é removido para outra lista */
	onRemove?: (evt: SortableEvent, sortable: Sortable | null) => void;

	/** Chamado quando ordem muda dentro da mesma lista */
	onUpdate?: (evt: SortableEvent, sortable: Sortable | null) => void;

	/** Chamado durante movimento - pode retornar false para cancelar */
	onMove?: (evt: MoveEvent, originalEvent: Event) => boolean | -1 | 1 | void;

	/** Chamado quando item é selecionado (mousedown) */
	onChoose?: (evt: SortableEvent, sortable: Sortable | null) => void;

	/** Chamado quando item é desselecionado */
	onUnchoose?: (evt: SortableEvent, sortable: Sortable | null) => void;

	/** Chamado em qualquer mudança de ordem */
	onSort?: (evt: SortableEvent, sortable: Sortable | null) => void;

	/** Chamado quando posição visual muda durante drag */
	onChange?: (evt: SortableEvent, sortable: Sortable | null) => void;

	/** Chamado quando item é clonado */
	onClone?: (evt: SortableEvent, sortable: Sortable | null) => void;

	/** Chamado quando item é filtrado */
	onFilter?: (evt: SortableEvent, sortable: Sortable | null) => void;

	// ========================================================================
	// New Simplified Callbacks (Recommended)
	// ========================================================================

	/**
	 * Chamado quando item é reordenado dentro da mesma lista.
	 * O Sortable reverte o DOM automaticamente - use este callback
	 * para atualizar o estado com a nova position.
	 */
	onReorder?: (info: SortableMoveInfo<T>) => void;

	/**
	 * Chamado quando item é recebido de outra lista.
	 * O Sortable remove o elemento DOM automaticamente - use este callback
	 * para adicionar o item ao estado com a nova position.
	 */
	onReceive?: (info: SortableMoveInfo<T>) => void;

	/**
	 * Chamado quando item é enviado para outra lista.
	 * Use este callback para remover o item do estado.
	 */
	onSend?: (info: SortableMoveInfo<T>) => void;

	// ========================================================================
	// Clone Handler
	// ========================================================================

	/**
	 * Função para clonar item quando usando pull: 'clone'.
	 * Se não fornecida, o item original é usado.
	 */
	clone?: (item: T, evt: SortableEvent) => T;
}
