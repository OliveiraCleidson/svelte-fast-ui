/**
 * Fractional Indexing utilities for SortableJS + Svelte 5
 *
 * Instead of reordering arrays, we update the `position` field of items.
 * New position = (prevPosition + nextPosition) / 2
 */

export const DEFAULT_GAP = 1000;
export const MIN_GAP = 0.001;

/**
 * Calculate the new position for an item being inserted between two neighbors.
 *
 * @param prevPosition - Position of the item before the insertion point (null if inserting at start)
 * @param nextPosition - Position of the item after the insertion point (null if inserting at end)
 * @param defaultGap - Default gap to use when there's no neighbor
 * @returns The calculated position
 */
export function calculatePosition(
	prevPosition: number | null,
	nextPosition: number | null,
	defaultGap = DEFAULT_GAP
): number {
	// Inserting at the start (before first item)
	if (prevPosition === null && nextPosition !== null) {
		return nextPosition / 2;
	}

	// Inserting at the end (after last item)
	if (nextPosition === null && prevPosition !== null) {
		return prevPosition + defaultGap;
	}

	// Inserting between two items
	if (prevPosition !== null && nextPosition !== null) {
		return (prevPosition + nextPosition) / 2;
	}

	// Empty list or no neighbors
	return defaultGap;
}

/**
 * Get the positions of neighboring items for a given insertion index.
 *
 * @param sortedItems - Items already sorted by position
 * @param newIndex - The index where the item will be inserted
 * @param movedItemId - The ID of the item being moved (to exclude from neighbors)
 * @returns Tuple of [prevPosition, nextPosition]
 */
export function getNeighborPositions<T extends { id: string | number; position: number }>(
	sortedItems: T[],
	newIndex: number,
	movedItemId: string | number
): [number | null, number | null] {
	// Filter out the moved item to get the "others"
	const others = sortedItems.filter((item) => item.id !== movedItemId);

	const prevItem = newIndex > 0 ? others[newIndex - 1] : null;
	const nextItem = newIndex < others.length ? others[newIndex] : null;

	return [prevItem?.position ?? null, nextItem?.position ?? null];
}

/**
 * Check if positions need rebalancing (gaps are too small).
 *
 * @param items - Items with position field
 * @param minGap - Minimum acceptable gap between positions
 * @returns True if rebalancing is needed
 */
export function needsRebalance<T extends { position: number }>(
	items: T[],
	minGap = MIN_GAP
): boolean {
	if (items.length < 2) return false;

	const sorted = [...items].sort((a, b) => a.position - b.position);

	for (let i = 1; i < sorted.length; i++) {
		if (sorted[i].position - sorted[i - 1].position < minGap) {
			return true;
		}
	}

	return false;
}

/**
 * Rebalance all positions with even spacing.
 *
 * @param items - Items to rebalance
 * @param gap - Gap between positions
 * @returns New array with rebalanced positions
 */
export function rebalancePositions<T extends { position: number }>(
	items: T[],
	gap = DEFAULT_GAP
): T[] {
	const sorted = [...items].sort((a, b) => a.position - b.position);
	return sorted.map((item, index) => ({
		...item,
		position: (index + 1) * gap
	}));
}

/**
 * Initialize positions for items that don't have them.
 *
 * @param items - Items to initialize
 * @param gap - Gap between positions
 * @returns Items with positions initialized
 */
export function initializePositions<T>(
	items: T[],
	gap = DEFAULT_GAP
): (T & { position: number })[] {
	return items.map((item, index) => ({
		...item,
		position: (item as T & { position?: number }).position ?? (index + 1) * gap
	}));
}

/**
 * Sort items by their position field.
 *
 * @param items - Items to sort
 * @returns New sorted array
 */
export function sortByPosition<T extends { position: number }>(items: T[]): T[] {
	return [...items].sort((a, b) => a.position - b.position);
}
