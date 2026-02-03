<script lang="ts">
	import { Skeleton } from './index.js';

	let {
		variant = 'default'
	}: {
		variant?: 'default' | 'card';
	} = $props();
</script>

{#if variant === 'default'}
	<div class="flex items-center space-x-4">
		<Skeleton class="size-12 rounded-full" />
		<div class="space-y-2">
			<Skeleton class="h-4 w-[250px]" />
			<Skeleton class="h-4 w-[200px]" />
		</div>
	</div>
{:else if variant === 'card'}
	<div class="flex flex-col space-y-3">
		<Skeleton class="h-[125px] w-[250px] rounded-xl" />
		<div class="space-y-2">
			<Skeleton class="h-4 w-[250px]" />
			<Skeleton class="h-4 w-[200px]" />
		</div>
	</div>
{/if}
