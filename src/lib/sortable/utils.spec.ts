import { describe, it, expect } from 'vitest';
import {
	reorderArray,
	handleReorder,
	handleRemove,
	handleAdd,
	handleMultiRemove,
	handleMultiAdd,
	handleStateChanges
} from './utils.js';
import type { SortableItemProps, NormalizedItem } from './types.js';

// Helper to create test items
function createItem(id: number, position: number): SortableItemProps {
	return { id, position };
}

// Helper to create normalized items for multi-drag tests
// Uses mock objects instead of real DOM elements for Node.js environment
function createNormalizedItem<T extends SortableItemProps>(
	item: T,
	oldIndex: number,
	newIndex: number
): NormalizedItem<T> {
	return {
		item,
		element: {} as HTMLElement,
		parentElement: {} as HTMLElement,
		oldIndex,
		newIndex
	};
}

describe('reorderArray', () => {
	it('should move item forward', () => {
		const array = ['a', 'b', 'c', 'd'];
		const result = reorderArray(array, 0, 2);

		expect(result).toEqual(['b', 'c', 'a', 'd']);
	});

	it('should move item backward', () => {
		const array = ['a', 'b', 'c', 'd'];
		const result = reorderArray(array, 3, 1);

		expect(result).toEqual(['a', 'd', 'b', 'c']);
	});

	it('should return same array when indices are equal', () => {
		const array = ['a', 'b', 'c'];
		const result = reorderArray(array, 1, 1);

		expect(result).toBe(array);
	});

	it('should not mutate original array', () => {
		const array = ['a', 'b', 'c'];
		const result = reorderArray(array, 0, 2);

		expect(array).toEqual(['a', 'b', 'c']);
		expect(result).not.toBe(array);
	});

	it('should handle moving to first position', () => {
		const array = ['a', 'b', 'c'];
		const result = reorderArray(array, 2, 0);

		expect(result).toEqual(['c', 'a', 'b']);
	});

	it('should handle moving to last position', () => {
		const array = ['a', 'b', 'c'];
		const result = reorderArray(array, 0, 2);

		expect(result).toEqual(['b', 'c', 'a']);
	});
});

describe('handleReorder', () => {
	it('should reorder sortable items', () => {
		const list = [createItem(1, 1000), createItem(2, 2000), createItem(3, 3000)];

		const result = handleReorder(list, 0, 2);

		expect(result[0].id).toBe(2);
		expect(result[1].id).toBe(3);
		expect(result[2].id).toBe(1);
	});

	it('should work as alias for reorderArray', () => {
		const list = [createItem(1, 1000), createItem(2, 2000)];

		const result1 = handleReorder(list, 0, 1);
		const result2 = reorderArray(list, 0, 1);

		expect(result1).toEqual(result2);
	});
});

describe('handleRemove', () => {
	it('should remove item from beginning', () => {
		const list = [createItem(1, 1000), createItem(2, 2000), createItem(3, 3000)];

		const result = handleRemove(list, 0);

		expect(result).toHaveLength(2);
		expect(result[0].id).toBe(2);
		expect(result[1].id).toBe(3);
	});

	it('should remove item from middle', () => {
		const list = [createItem(1, 1000), createItem(2, 2000), createItem(3, 3000)];

		const result = handleRemove(list, 1);

		expect(result).toHaveLength(2);
		expect(result[0].id).toBe(1);
		expect(result[1].id).toBe(3);
	});

	it('should remove item from end', () => {
		const list = [createItem(1, 1000), createItem(2, 2000), createItem(3, 3000)];

		const result = handleRemove(list, 2);

		expect(result).toHaveLength(2);
		expect(result[0].id).toBe(1);
		expect(result[1].id).toBe(2);
	});

	it('should not mutate original array', () => {
		const list = [createItem(1, 1000), createItem(2, 2000)];

		const result = handleRemove(list, 0);

		expect(list).toHaveLength(2);
		expect(result).not.toBe(list);
	});
});

describe('handleAdd', () => {
	it('should add item at beginning', () => {
		const list = [createItem(2, 2000), createItem(3, 3000)];
		const newItem = createItem(1, 1000);

		const result = handleAdd(list, newItem, 0);

		expect(result).toHaveLength(3);
		expect(result[0].id).toBe(1);
		expect(result[1].id).toBe(2);
	});

	it('should add item in middle', () => {
		const list = [createItem(1, 1000), createItem(3, 3000)];
		const newItem = createItem(2, 2000);

		const result = handleAdd(list, newItem, 1);

		expect(result).toHaveLength(3);
		expect(result[1].id).toBe(2);
	});

	it('should add item at end', () => {
		const list = [createItem(1, 1000), createItem(2, 2000)];
		const newItem = createItem(3, 3000);

		const result = handleAdd(list, newItem, 2);

		expect(result).toHaveLength(3);
		expect(result[2].id).toBe(3);
	});

	it('should not mutate original array', () => {
		const list = [createItem(1, 1000)];
		const newItem = createItem(2, 2000);

		const result = handleAdd(list, newItem, 1);

		expect(list).toHaveLength(1);
		expect(result).not.toBe(list);
	});

	it('should add to empty list', () => {
		const list: SortableItemProps[] = [];
		const newItem = createItem(1, 1000);

		const result = handleAdd(list, newItem, 0);

		expect(result).toHaveLength(1);
		expect(result[0].id).toBe(1);
	});
});

describe('handleMultiRemove', () => {
	it('should remove multiple items', () => {
		const list = [
			createItem(1, 1000),
			createItem(2, 2000),
			createItem(3, 3000),
			createItem(4, 4000)
		];

		const normalized = [createNormalizedItem(list[1], 1, 0), createNormalizedItem(list[3], 3, 1)];

		const result = handleMultiRemove(list, normalized);

		expect(result).toHaveLength(2);
		expect(result[0].id).toBe(1);
		expect(result[1].id).toBe(3);
	});

	it('should handle removal in correct order (descending)', () => {
		const list = [createItem(1, 1000), createItem(2, 2000), createItem(3, 3000)];

		const normalized = [createNormalizedItem(list[0], 0, 0), createNormalizedItem(list[2], 2, 1)];

		const result = handleMultiRemove(list, normalized);

		expect(result).toHaveLength(1);
		expect(result[0].id).toBe(2);
	});

	it('should not mutate original array', () => {
		const list = [createItem(1, 1000), createItem(2, 2000)];
		const normalized = [createNormalizedItem(list[0], 0, 0)];

		const result = handleMultiRemove(list, normalized);

		expect(list).toHaveLength(2);
		expect(result).not.toBe(list);
	});
});

describe('handleMultiAdd', () => {
	it('should add multiple items', () => {
		const list = [createItem(1, 1000), createItem(4, 4000)];
		const item2 = createItem(2, 2000);
		const item3 = createItem(3, 3000);

		const normalized = [createNormalizedItem(item2, 0, 1), createNormalizedItem(item3, 1, 2)];

		const result = handleMultiAdd(list, normalized);

		expect(result).toHaveLength(4);
		expect(result[1].id).toBe(2);
		expect(result[2].id).toBe(3);
	});

	it('should apply clone function when provided', () => {
		const list: SortableItemProps[] = [];
		const item = createItem(1, 1000);
		const normalized = [createNormalizedItem(item, 0, 0)];

		const cloneFn = (item: SortableItemProps) => ({ ...item, id: 999 });
		const mockEvt = {} as any;

		const result = handleMultiAdd(list, normalized, cloneFn, mockEvt);

		expect(result[0].id).toBe(999);
	});

	it('should not apply clone when no evt provided', () => {
		const list: SortableItemProps[] = [];
		const item = createItem(1, 1000);
		const normalized = [createNormalizedItem(item, 0, 0)];

		const cloneFn = (item: SortableItemProps) => ({ ...item, id: 999 });

		const result = handleMultiAdd(list, normalized, cloneFn);

		expect(result[0].id).toBe(1);
	});
});

describe('handleStateChanges', () => {
	it('should remove and add items for reordering', () => {
		const list = [createItem(1, 1000), createItem(2, 2000), createItem(3, 3000)];

		const normalized = [createNormalizedItem(list[0], 0, 2)];

		const result = handleStateChanges(normalized, list);

		expect(result).toHaveLength(3);
	});

	it('should not mutate original array', () => {
		const list = [createItem(1, 1000), createItem(2, 2000)];
		const normalized = [createNormalizedItem(list[0], 0, 1)];

		const result = handleStateChanges(normalized, list);

		expect(list).toHaveLength(2);
		expect(result).not.toBe(list);
	});
});
