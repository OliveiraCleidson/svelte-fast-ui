import { describe, it, expect, beforeEach } from 'vitest';
import { sortableStore, setDragging, clearDragging, getDraggingItem } from './store.svelte.js';
import type { SortableItemProps } from './types.js';

// Helper to create test items
function createItem(id: number, position: number): SortableItemProps {
	return { id, position };
}

// Create real DOM element for browser environment
function createMockElement(): HTMLElement {
	return document.createElement('div');
}

describe('sortableStore', () => {
	beforeEach(() => {
		// Clear state before each test
		clearDragging();
	});

	describe('setDragging', () => {
		it('should set dragging state with sorted list', () => {
			const list = [createItem(3, 3000), createItem(1, 1000), createItem(2, 2000)];
			const el = createMockElement();

			setDragging(list, el);

			expect(sortableStore.dragging).not.toBeNull();
			expect(sortableStore.dragging?.el).toBe(el);
			// List should be sorted by position
			expect(sortableStore.dragging?.list[0].id).toBe(1);
			expect(sortableStore.dragging?.list[1].id).toBe(2);
			expect(sortableStore.dragging?.list[2].id).toBe(3);
		});

		it('should not mutate original list', () => {
			const list = [createItem(2, 2000), createItem(1, 1000)];
			const el = createMockElement();

			setDragging(list, el);

			expect(list[0].id).toBe(2);
			expect(list[1].id).toBe(1);
		});
	});

	describe('clearDragging', () => {
		it('should clear dragging state', () => {
			const list = [createItem(1, 1000)];
			const el = createMockElement();

			setDragging(list, el);
			expect(sortableStore.dragging).not.toBeNull();

			clearDragging();
			expect(sortableStore.dragging).toBeNull();
		});

		it('should be safe to call when already null', () => {
			clearDragging();
			expect(sortableStore.dragging).toBeNull();

			clearDragging();
			expect(sortableStore.dragging).toBeNull();
		});
	});

	describe('getDraggingItem', () => {
		it('should return null when not dragging', () => {
			const result = getDraggingItem(0);
			expect(result).toBeNull();
		});

		it('should return correct item by index', () => {
			const list = [createItem(1, 1000), createItem(2, 2000), createItem(3, 3000)];
			const el = createMockElement();

			setDragging(list, el);

			const item = getDraggingItem<SortableItemProps>(1);
			expect(item?.id).toBe(2);
		});

		it('should return item from sorted list', () => {
			// List is unsorted
			const list = [createItem(3, 3000), createItem(1, 1000), createItem(2, 2000)];
			const el = createMockElement();

			setDragging(list, el);

			// Index 0 should be item with id=1 (lowest position)
			const item = getDraggingItem<SortableItemProps>(0);
			expect(item?.id).toBe(1);
		});

		it('should return undefined for out of bounds index', () => {
			const list = [createItem(1, 1000)];
			const el = createMockElement();

			setDragging(list, el);

			const item = getDraggingItem<SortableItemProps>(10);
			expect(item).toBeUndefined();
		});
	});

	describe('sortableStore object', () => {
		it('should expose dragging getter', () => {
			expect(sortableStore.dragging).toBeNull();

			const list = [createItem(1, 1000)];
			const el = createMockElement();
			setDragging(list, el);

			expect(sortableStore.dragging).not.toBeNull();
		});

		it('should expose dragging setter', () => {
			const el = createMockElement();
			sortableStore.dragging = { list: [createItem(1, 1000)], el };

			expect(sortableStore.dragging).not.toBeNull();
			expect(sortableStore.dragging?.list[0].id).toBe(1);
		});
	});
});
