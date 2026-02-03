<script lang="ts">
	import * as Kanban from './index.js';
	import type { KanbanColumn, KanbanCard } from './context.svelte.js';

	let {
		variant = 'default'
	}: {
		variant?: 'default' | 'custom-card' | 'empty' | 'many-columns';
	} = $props();

	// Default columns data with position for fractional indexing
	let defaultColumns = $state<KanbanColumn[]>([
		{
			id: 'backlog',
			title: 'Backlog',
			position: 1000,
			cards: [
				{
					id: '1',
					title: 'Research competitors',
					description: 'Analyze top 5 competitors',
					position: 1000
				},
				{
					id: '2',
					title: 'User interviews',
					description: 'Schedule 10 user interviews',
					position: 2000
				}
			]
		},
		{
			id: 'todo',
			title: 'To Do',
			position: 2000,
			cards: [
				{
					id: '3',
					title: 'Design system update',
					description: 'Update color palette',
					position: 1000
				},
				{ id: '4', title: 'API documentation', description: 'Write OpenAPI specs', position: 2000 },
				{ id: '5', title: 'Performance audit', position: 3000 }
			]
		},
		{
			id: 'in-progress',
			title: 'In Progress',
			position: 3000,
			cards: [
				{
					id: '6',
					title: 'Dashboard redesign',
					description: 'New layout with metrics',
					position: 1000
				},
				{ id: '7', title: 'Auth flow refactor', position: 2000 }
			]
		},
		{
			id: 'done',
			title: 'Done',
			position: 4000,
			cards: [
				{ id: '8', title: 'Setup CI/CD', description: 'GitHub Actions configured', position: 1000 },
				{ id: '9', title: 'Database migration', position: 2000 }
			]
		}
	]);

	// Custom card columns
	let customCardColumns = $state<KanbanColumn[]>([
		{
			id: 'todo',
			title: 'To Do',
			position: 1000,
			cards: [
				{
					id: '1',
					title: 'Implement dark mode',
					description: 'Add theme toggle',
					priority: 'high',
					assignee: 'John Doe',
					position: 1000
				},
				{
					id: '2',
					title: 'Fix mobile layout',
					description: 'Responsive issues',
					priority: 'medium',
					assignee: 'Jane Smith',
					position: 2000
				}
			]
		},
		{
			id: 'doing',
			title: 'Doing',
			position: 2000,
			cards: [
				{
					id: '3',
					title: 'Write tests',
					description: 'Unit and integration',
					priority: 'low',
					assignee: 'Bob Wilson',
					position: 1000
				}
			]
		},
		{
			id: 'done',
			title: 'Done',
			position: 3000,
			cards: [
				{
					id: '4',
					title: 'Setup project',
					description: 'Initial configuration',
					priority: 'high',
					assignee: 'Alice Brown',
					position: 1000
				}
			]
		}
	]);

	// Empty columns
	let emptyColumns = $state<KanbanColumn[]>([
		{ id: 'todo', title: 'To Do', position: 1000, cards: [] },
		{ id: 'doing', title: 'In Progress', position: 2000, cards: [] },
		{ id: 'done', title: 'Done', position: 3000, cards: [] }
	]);

	// Many columns
	let manyColumns = $state<KanbanColumn[]>([
		{
			id: 'ideas',
			title: 'Ideas',
			position: 1000,
			cards: [{ id: '1', title: 'New feature idea', position: 1000 }]
		},
		{
			id: 'research',
			title: 'Research',
			position: 2000,
			cards: [{ id: '2', title: 'Market analysis', position: 1000 }]
		},
		{
			id: 'design',
			title: 'Design',
			position: 3000,
			cards: [{ id: '3', title: 'Wireframes', position: 1000 }]
		},
		{
			id: 'development',
			title: 'Development',
			position: 4000,
			cards: [
				{ id: '4', title: 'Frontend', position: 1000 },
				{ id: '5', title: 'Backend', position: 2000 }
			]
		},
		{
			id: 'testing',
			title: 'Testing',
			position: 5000,
			cards: [{ id: '6', title: 'QA review', position: 1000 }]
		},
		{
			id: 'staging',
			title: 'Staging',
			position: 6000,
			cards: []
		},
		{
			id: 'production',
			title: 'Production',
			position: 7000,
			cards: [{ id: '7', title: 'Release v1.0', position: 1000 }]
		}
	]);

	function handleCardMove(cardId: string, from: string, to: string, index: number) {
		console.log(`Card ${cardId} moved from ${from} to ${to} at index ${index}`);
	}

	function handleColumnReorder(columns: KanbanColumn[]) {
		console.log(
			'Columns reordered:',
			columns.map((c) => c.title)
		);
	}

	function getPriorityColor(priority: string) {
		switch (priority) {
			case 'high':
				return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
			case 'medium':
				return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
			case 'low':
				return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
			default:
				return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
		}
	}
</script>

{#if variant === 'default'}
	<div class="bg-muted/30 min-h-[500px] rounded-lg">
		<Kanban.Board
			bind:columns={defaultColumns}
			onCardMove={handleCardMove}
			onColumnReorder={handleColumnReorder}
		/>
	</div>
{:else if variant === 'custom-card'}
	<div class="bg-muted/30 min-h-[500px] rounded-lg">
		<Kanban.Board bind:columns={customCardColumns} onCardMove={handleCardMove}>
			{#snippet cardSnippet({ card })}
				<Kanban.Card {card}>
					{#snippet children({ card: c })}
						<div class="space-y-2">
							<div class="flex items-start justify-between gap-2">
								<p class="font-medium">{c.title}</p>
								{#if c.priority}
									<span
										class={`rounded-full px-2 py-0.5 text-xs font-medium ${getPriorityColor(c.priority as string)}`}
									>
										{c.priority}
									</span>
								{/if}
							</div>
							{#if c.description}
								<p class="text-muted-foreground text-sm">{c.description}</p>
							{/if}
							{#if c.assignee}
								<div class="flex items-center gap-2 pt-2">
									<div
										class="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-full text-xs"
									>
										{(c.assignee as string).charAt(0)}
									</div>
									<span class="text-muted-foreground text-xs">{c.assignee}</span>
								</div>
							{/if}
						</div>
					{/snippet}
				</Kanban.Card>
			{/snippet}
		</Kanban.Board>
	</div>
{:else if variant === 'empty'}
	<div class="bg-muted/30 min-h-[500px] rounded-lg">
		<Kanban.Board bind:columns={emptyColumns} />
	</div>
{:else if variant === 'many-columns'}
	<div class="bg-muted/30 min-h-[500px] overflow-x-auto rounded-lg">
		<Kanban.Board bind:columns={manyColumns} onColumnReorder={handleColumnReorder} />
	</div>
{/if}
