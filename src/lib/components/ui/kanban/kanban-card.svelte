<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../../../utils.js';
	import type { KanbanCard } from './context.svelte.js';

	interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
		card: KanbanCard;
		children?: Snippet<[{ card: KanbanCard }]>;
		class?: string;
	}

	let { card, children, class: className, ...restProps }: Props = $props();
</script>

<div
	data-kanban-card
	data-id={card.id}
	data-card-id={card.id}
	class={cn(
		'bg-background cursor-grab rounded-md border p-3 shadow-sm transition-shadow hover:shadow-md active:cursor-grabbing',
		className
	)}
	{...restProps}
>
	{#if children}
		{@render children({ card })}
	{:else}
		<p class="font-medium">{card.title}</p>
		{#if card.description}
			<p class="text-muted-foreground mt-1 text-sm">{card.description}</p>
		{/if}
	{/if}
</div>
