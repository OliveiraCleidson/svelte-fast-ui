<script lang="ts">
	import * as Pagination from './index.js';

	let { count = 30, page = 1, perPage = 10 } = $props();
</script>

<Pagination.Root {count} {perPage} bind:page>
	{#snippet children({ pages, currentPage })}
		<Pagination.Content>
			<Pagination.Item>
				<Pagination.Previous />
			</Pagination.Item>

			{#each pages as pageItem (pageItem.key)}
				{#if pageItem.type === 'ellipsis'}
					<Pagination.Item>
						<Pagination.Ellipsis />
					</Pagination.Item>
				{:else}
					<Pagination.Item>
						<Pagination.Link page={pageItem} isActive={currentPage === pageItem.value}>
							{pageItem.value}
						</Pagination.Link>
					</Pagination.Item>
				{/if}
			{/each}

			<Pagination.Item>
				<Pagination.Next />
			</Pagination.Item>
		</Pagination.Content>
	{/snippet}
</Pagination.Root>
