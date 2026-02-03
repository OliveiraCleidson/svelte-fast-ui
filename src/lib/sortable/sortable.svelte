<script lang="ts">
	import SortableJS from 'sortablejs';
	import type { Options, SortableEvent, MoveEvent } from 'sortablejs';
	import { untrack, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	// ========================================================================
	// Props Interface
	// ========================================================================

	// Omit 'draggable' from HTMLAttributes as it conflicts with SortableJS's draggable option
	interface Props extends Omit<HTMLAttributes<HTMLElement>, 'draggable'> {
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
	}

	// ========================================================================
	// Props Destructuring
	// ========================================================================

	let {
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

		...restProps
	}: Props = $props();

	// ========================================================================
	// State
	// ========================================================================

	let containerEl = $state<HTMLElement | null>(null);
	let sortableInstance: SortableJS | null = null;

	// ========================================================================
	// SortableJS Initialization
	// ========================================================================

	$effect(() => {
		if (!containerEl) return;

		// Use untrack to prevent re-creating SortableJS when callbacks change
		const callbacks = untrack(() => ({
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
			onFilter
		}));

		const options: Options = {
			// Core options
			group,
			sort,
			delay,
			delayOnTouchOnly,
			touchStartThreshold,
			disabled,
			animation,
			easing,
			handle,
			filter,
			preventOnFilter,
			draggable,
			dataIdAttr,
			ghostClass,
			chosenClass,
			dragClass,
			swapThreshold,
			invertSwap,
			invertedSwapThreshold,
			direction,
			forceFallback,
			fallbackClass,
			fallbackOnBody,
			fallbackTolerance,
			fallbackOffset,
			removeCloneOnHide,
			emptyInsertThreshold,

			// Raw event handlers - pass through directly
			onStart: callbacks.onStart,
			onEnd: callbacks.onEnd,
			onAdd: callbacks.onAdd,
			onRemove: callbacks.onRemove,
			onUpdate: callbacks.onUpdate,
			onChoose: callbacks.onChoose,
			onUnchoose: callbacks.onUnchoose,
			onSort: callbacks.onSort,
			onChange: callbacks.onChange,
			onClone: callbacks.onClone,
			onFilter: callbacks.onFilter,

			onMove: callbacks.onMove
				? (evt: MoveEvent, originalEvent: Event) => {
						const result = callbacks.onMove?.(evt, originalEvent);
						if (result === undefined) return true;
						return result;
					}
				: undefined
		};

		// Create SortableJS instance
		sortableInstance = SortableJS.create(containerEl, options);

		// Cleanup
		return () => {
			sortableInstance?.destroy();
			sortableInstance = null;
		};
	});

	// ========================================================================
	// Reactive Option Updates
	// ========================================================================

	$effect(() => {
		if (!sortableInstance) return;
		sortableInstance.option('disabled', disabled);
		sortableInstance.option('sort', sort);
		if (group !== undefined) {
			sortableInstance.option('group', group);
		}
	});
</script>

<!--
  Pure SortableJS wrapper.

  This component only:
  - Initializes SortableJS on the container
  - Passes through SortableJS options
  - Passes through raw SortableJS events
  - Cleans up on destroy

  For additional features (DOM reversion, multi-list coordination,
  fractional indexing), use SortableList instead.
-->
<svelte:element this={tag} bind:this={containerEl} class={className} {...restProps}>
	{@render children()}
</svelte:element>
