// ============================================================================
// Svelte SortableJS Wrapper
// ============================================================================
// A Svelte 5 wrapper for SortableJS based on the react-sortablejs pattern.
// Uses Runes for reactivity and follows the principle:
// "SortableJS detects gestures → Svelte controls DOM via state"
// ============================================================================

// Components
/** Pure SortableJS wrapper - only initializes SortableJS and passes through events */
export { default as Sortable } from './sortable.svelte';

/** Extended wrapper with store coordination, DOM reversion, and simplified callbacks */
export { default as SortableList } from './sortable-list.svelte';

// Types
export type {
	SortableItem,
	SortableItemProps,
	SortableMoveInfo,
	SortableStore,
	NormalizedItem,
	SortableEventHandler,
	MoveEventHandler,
	SortableComponentProps,
	AllMethodNames
} from './types.js';

// Store
export { sortableStore, setDragging, clearDragging, getDraggingItem } from './store.svelte.js';

// Utilities
export {
	// Normalized creation
	createNormalized,
	// State transformations
	reorderArray,
	handleReorder,
	handleRemove,
	handleAdd,
	handleMultiRemove,
	handleMultiAdd,
	handleStateChanges
} from './utils.js';

// Fractional Indexing
export {
	DEFAULT_GAP,
	MIN_GAP,
	calculatePosition,
	getNeighborPositions,
	needsRebalance,
	rebalancePositions,
	initializePositions,
	sortByPosition
} from './fractional.js';

// Re-export SortableJS types for convenience
export type {
	Options as SortableOptions,
	SortableEvent,
	MoveEvent,
	GroupOptions,
	PullResult,
	PutResult
} from 'sortablejs';
