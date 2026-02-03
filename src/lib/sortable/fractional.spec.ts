import { describe, it, expect } from 'vitest';
import {
	DEFAULT_GAP,
	MIN_GAP,
	calculatePosition,
	getNeighborPositions,
	needsRebalance,
	rebalancePositions,
	initializePositions,
	sortByPosition
} from './fractional.js';

describe('calculatePosition', () => {
	it('should return half of nextPosition when inserting at start', () => {
		const result = calculatePosition(null, 1000);
		expect(result).toBe(500);
	});

	it('should return prevPosition + defaultGap when inserting at end', () => {
		const result = calculatePosition(1000, null);
		expect(result).toBe(2000);
	});

	it('should return average when inserting between two items', () => {
		const result = calculatePosition(1000, 2000);
		expect(result).toBe(1500);
	});

	it('should return defaultGap for empty list', () => {
		const result = calculatePosition(null, null);
		expect(result).toBe(DEFAULT_GAP);
	});

	it('should use custom defaultGap when provided', () => {
		const result = calculatePosition(null, null, 500);
		expect(result).toBe(500);
	});

	it('should handle small gaps correctly', () => {
		const result = calculatePosition(1000, 1001);
		expect(result).toBe(1000.5);
	});
});

describe('getNeighborPositions', () => {
	const items = [
		{ id: 1, position: 1000 },
		{ id: 2, position: 2000 },
		{ id: 3, position: 3000 }
	];

	it('should return correct neighbors when inserting in middle', () => {
		// Moving item 2, inserting at index 1 (between items 1 and 3)
		// After filtering item 2, others = [item1, item3]
		// prev = others[0] = item1, next = others[1] = item3
		const [prev, next] = getNeighborPositions(items, 1, 2);
		expect(prev).toBe(1000);
		expect(next).toBe(3000);
	});

	it('should return null for prev when inserting at start', () => {
		// Moving item 1, inserting at index 0
		// After filtering item 1, others = [item2, item3]
		// prev = null (index 0), next = others[0] = item2
		const [prev, next] = getNeighborPositions(items, 0, 1);
		expect(prev).toBe(null);
		expect(next).toBe(2000);
	});

	it('should return null for next when inserting at end', () => {
		// Moving item 1, inserting at index 2 (after all others)
		// After filtering item 1, others = [item2, item3]
		// prev = others[1] = item3, next = null (index 2 >= others.length)
		const [prev, next] = getNeighborPositions(items, 2, 1);
		expect(prev).toBe(3000);
		expect(next).toBe(null);
	});

	it('should exclude moved item from neighbors', () => {
		// Moving item 2, inserting at index 1
		// After filtering item 2, others = [item1, item3]
		// prev = others[0] = item1, next = others[1] = item3
		const [prev, next] = getNeighborPositions(items, 1, 2);
		expect(prev).toBe(1000);
		expect(next).toBe(3000);
	});
});

describe('needsRebalance', () => {
	it('should return false for empty array', () => {
		expect(needsRebalance([])).toBe(false);
	});

	it('should return false for single item', () => {
		expect(needsRebalance([{ position: 1000 }])).toBe(false);
	});

	it('should return false when gaps are adequate', () => {
		const items = [{ position: 1000 }, { position: 2000 }, { position: 3000 }];
		expect(needsRebalance(items)).toBe(false);
	});

	it('should return true when gaps are too small', () => {
		const items = [{ position: 1000 }, { position: 1000.0005 }];
		expect(needsRebalance(items)).toBe(true);
	});

	it('should use custom minGap when provided', () => {
		const items = [{ position: 1000 }, { position: 1001 }];
		expect(needsRebalance(items, 10)).toBe(true);
		expect(needsRebalance(items, 0.5)).toBe(false);
	});
});

describe('rebalancePositions', () => {
	it('should rebalance positions with even spacing', () => {
		const items = [{ position: 1 }, { position: 2 }, { position: 3 }];
		const result = rebalancePositions(items);

		expect(result).toHaveLength(3);
		expect(result[0].position).toBe(DEFAULT_GAP);
		expect(result[1].position).toBe(DEFAULT_GAP * 2);
		expect(result[2].position).toBe(DEFAULT_GAP * 3);
	});

	it('should sort items before rebalancing', () => {
		const items = [{ position: 3000 }, { position: 1000 }, { position: 2000 }];
		const result = rebalancePositions(items);

		expect(result[0].position).toBe(DEFAULT_GAP);
		expect(result[1].position).toBe(DEFAULT_GAP * 2);
		expect(result[2].position).toBe(DEFAULT_GAP * 3);
	});

	it('should use custom gap when provided', () => {
		const items = [{ position: 1 }, { position: 2 }];
		const result = rebalancePositions(items, 500);

		expect(result[0].position).toBe(500);
		expect(result[1].position).toBe(1000);
	});

	it('should preserve other properties', () => {
		const items = [{ id: 'a', name: 'Item A', position: 1 }];
		const result = rebalancePositions(items);

		expect(result[0].id).toBe('a');
		expect(result[0].name).toBe('Item A');
	});
});

describe('initializePositions', () => {
	it('should add positions to items without them', () => {
		const items = [{ id: 1 }, { id: 2 }];
		const result = initializePositions(items);

		expect(result[0].position).toBe(DEFAULT_GAP);
		expect(result[1].position).toBe(DEFAULT_GAP * 2);
	});

	it('should preserve existing positions', () => {
		const items = [{ id: 1, position: 5000 }, { id: 2 }];
		const result = initializePositions(items);

		expect(result[0].position).toBe(5000);
		expect(result[1].position).toBe(DEFAULT_GAP * 2);
	});

	it('should use custom gap when provided', () => {
		const items = [{ id: 1 }];
		const result = initializePositions(items, 100);

		expect(result[0].position).toBe(100);
	});

	it('should preserve all original properties', () => {
		const items = [{ id: 1, name: 'Test', data: { nested: true } }];
		const result = initializePositions(items);

		expect(result[0].id).toBe(1);
		expect(result[0].name).toBe('Test');
		expect(result[0].data).toEqual({ nested: true });
	});
});

describe('sortByPosition', () => {
	it('should sort items by position ascending', () => {
		const items = [{ position: 3000 }, { position: 1000 }, { position: 2000 }];
		const result = sortByPosition(items);

		expect(result[0].position).toBe(1000);
		expect(result[1].position).toBe(2000);
		expect(result[2].position).toBe(3000);
	});

	it('should not mutate original array', () => {
		const items = [{ position: 3000 }, { position: 1000 }];
		const result = sortByPosition(items);

		expect(items[0].position).toBe(3000);
		expect(result[0].position).toBe(1000);
		expect(result).not.toBe(items);
	});

	it('should handle empty array', () => {
		const result = sortByPosition([]);
		expect(result).toEqual([]);
	});

	it('should handle single item', () => {
		const items = [{ position: 1000 }];
		const result = sortByPosition(items);
		expect(result).toHaveLength(1);
		expect(result[0].position).toBe(1000);
	});
});
