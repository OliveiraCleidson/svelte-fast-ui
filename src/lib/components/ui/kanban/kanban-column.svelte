<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../../../utils.js';
	import { useKanban, type KanbanColumn, type KanbanCard } from './context.svelte.js';
	import { SortableList, type SortableMoveInfo } from '../../../sortable/index.js';
	import Card from './kanban-card.svelte';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		column: KanbanColumn;
		header?: Snippet<[{ column: KanbanColumn; cardCount: number }]>;
		cardSnippet?: Snippet<[{ card: KanbanCard }]>;
		class?: string;
	}

	let { column, header, cardSnippet, class: className, ...restProps }: Props = $props();

	const kanban = useKanban();

	// Derived card count - uses column.cards directly (no local state)
	const cardCount = $derived(column.cards.length);

	// ============================================================================
	// Sortable Event Handlers
	// ============================================================================

	/**
	 * Handle reorder within the same column.
	 * Calculates the new position and updates via context.
	 */
	function handleReorder(info: SortableMoveInfo<KanbanCard>) {
		const newPosition = kanban.calculateCardPosition(column.id, info.newIndex, info.item.id);
		kanban.updateCardPosition(column.id, info.item.id, newPosition);
	}

	/**
	 * Handle receiving a card from another column.
	 * Calculates the new position and adds the card via context.
	 */
	function handleReceive(info: SortableMoveInfo<KanbanCard>) {
		const newPosition = kanban.calculateCardPosition(column.id, info.newIndex, info.item.id);
		const newCard: KanbanCard = {
			...info.item,
			position: newPosition
		};
		kanban.addCardToColumn(column.id, newCard);
	}

	/**
	 * Handle sending a card to another column.
	 * Removes the card via context.
	 */
	function handleSend(info: SortableMoveInfo<KanbanCard>) {
		kanban.removeCardFromColumn(column.id, info.item.id);
	}
</script>

<div
	data-kanban-column
	data-column-id={column.id}
	class={cn('bg-muted/50 flex w-72 shrink-0 flex-col rounded-lg', className)}
	{...restProps}
>
	<!-- Header -->
	{#if header}
		{@render header({ column, cardCount })}
	{:else}
		<div
			data-kanban-column-handle
			class="flex cursor-grab items-center justify-between p-3 active:cursor-grabbing"
		>
			<h3 class="font-semibold">{column.title}</h3>
			<span class="text-muted-foreground text-sm">{cardCount}</span>
		</div>
	{/if}

	<!-- Cards Container with Sortable -->
	<!--
		IMPORTANT: Uses column.cards directly (no local state).
		The Sortable component is now read-only and uses callbacks
		to notify about changes. The context is the single source of truth.
	-->
	<SortableList
		list={column.cards}
		group="kanban-cards"
		animation={150}
		draggable="[data-kanban-card]"
		ghostClass="opacity-50"
		class="flex min-h-[100px] flex-1 flex-col gap-2 p-2"
		data-kanban-cards
		onReorder={handleReorder}
		onReceive={handleReceive}
		onSend={handleSend}
	>
		{#each column.cards.toSorted((a, b) => a.position - b.position) as card (card.id)}
			{#if cardSnippet}
				{@render cardSnippet({ card })}
			{:else}
				<Card {card} />
			{/if}
		{/each}
	</SortableList>
</div>
