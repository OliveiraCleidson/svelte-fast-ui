<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '../../../utils.js';
	import { setKanbanContext, type KanbanColumn, type KanbanCard } from './context.svelte.js';
	import {
		SortableList,
		type SortableMoveInfo,
		calculatePosition,
		getNeighborPositions,
		sortByPosition,
		needsRebalance,
		rebalancePositions
	} from '../../../sortable/index.js';
	import Column from './kanban-column.svelte';

	interface Props {
		columns: KanbanColumn[];
		onColumnsChange?: (columns: KanbanColumn[]) => void;
		onCardMove?: (
			cardId: string,
			fromColumnId: string,
			toColumnId: string,
			newIndex: number
		) => void;
		onColumnReorder?: (columns: KanbanColumn[]) => void;
		columnSnippet?: Snippet<[{ column: KanbanColumn }]>;
		cardSnippet?: Snippet<[{ card: KanbanCard }]>;
		class?: string;
	}

	let {
		columns = $bindable([]),
		onColumnsChange,
		onCardMove,
		onColumnReorder,
		columnSnippet,
		cardSnippet,
		class: className
	}: Props = $props();

	// ============================================================================
	// Context Setup
	// ============================================================================

	const _kanban = setKanbanContext({
		columns: () => columns,
		onColumnsChange: (newColumns) => {
			columns = newColumns;
			onColumnsChange?.(newColumns);
		},
		onCardMove: (cardId, fromColumnId, toColumnId, newIndex) => {
			onCardMove?.(cardId, fromColumnId, toColumnId, newIndex);
		},
		onColumnReorder: (cols) => {
			onColumnReorder?.(cols);
		}
	});

	// ============================================================================
	// Column Reorder Handlers
	// ============================================================================

	/**
	 * Deep clone helper that works with Svelte proxies
	 */
	function deepClone<T>(obj: T): T {
		return JSON.parse(JSON.stringify(obj));
	}

	/**
	 * Handle column reorder.
	 * Calculates the new position and updates via context.
	 */
	function handleColumnReorder(info: SortableMoveInfo<KanbanColumn>) {
		const sortedColumns = sortByPosition(columns);
		const [prevPos, nextPos] = getNeighborPositions(sortedColumns, info.newIndex, info.item.id);
		const newPosition = calculatePosition(prevPos, nextPos);

		const newColumns = deepClone(columns);
		const column = newColumns.find((c) => c.id === info.item.id);
		if (column) {
			column.position = newPosition;

			if (needsRebalance(newColumns)) {
				const rebalanced = rebalancePositions(newColumns) as KanbanColumn[];
				rebalanced.forEach((col) => {
					const originalCol = newColumns.find((c) => c.id === col.id);
					if (originalCol) {
						col.cards = originalCol.cards;
					}
				});
				columns = rebalanced;
			} else {
				columns = newColumns;
			}
		}

		onColumnsChange?.(columns);
		onColumnReorder?.(columns);
	}
</script>

<!--
	IMPORTANT: Uses columns directly (no local boardColumns state).
	The Sortable component is read-only and uses callbacks.
	The context is the single source of truth.
-->
<SortableList
	list={columns}
	group="kanban-columns"
	animation={150}
	handle="[data-kanban-column-handle]"
	draggable="[data-kanban-column]"
	ghostClass="opacity-50"
	class={cn('flex gap-4 overflow-x-auto p-4', className)}
	data-kanban-board
	onReorder={handleColumnReorder}
>
	{#each columns.toSorted((a, b) => a.position - b.position) as column (column.id)}
		{#if columnSnippet}
			{@render columnSnippet({ column })}
		{:else}
			<Column {column} {cardSnippet} />
		{/if}
	{/each}
</SortableList>
