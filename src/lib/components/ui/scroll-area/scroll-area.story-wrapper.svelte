<script lang="ts">
	import { ScrollArea } from './index.js';
	import { Separator } from '../separator/index.js';

	let {
		variant = 'default'
	}: {
		variant?: 'default' | 'horizontal';
	} = $props();

	const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

	type Artwork = {
		artist: string;
		art: string;
	};

	const works: Artwork[] = [
		{
			artist: 'Ornella Binni',
			art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80'
		},
		{
			artist: 'Tom Byrom',
			art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80'
		},
		{
			artist: 'Vladimir Malyavko',
			art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80'
		}
	];
</script>

{#if variant === 'default'}
	<ScrollArea class="h-72 w-48 rounded-md border">
		<div class="p-4">
			<h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>
			{#each tags as tag (tag)}
				<div class="text-sm">
					{tag}
				</div>
				<Separator class="my-2" />
			{/each}
		</div>
	</ScrollArea>
{:else if variant === 'horizontal'}
	<ScrollArea class="w-96 rounded-md border whitespace-nowrap" orientation="horizontal">
		<div class="flex w-max space-x-4 p-4">
			{#each works as artwork (artwork.artist)}
				<figure class="shrink-0">
					<div class="overflow-hidden rounded-md">
						<img
							src={artwork.art}
							alt="Photo by {artwork.artist}"
							class="aspect-[3/4] h-fit w-fit object-cover"
							width={300}
							height={400}
						/>
					</div>
					<figcaption class="pt-2 text-xs text-muted-foreground">
						Photo by
						<span class="font-semibold text-foreground">
							{artwork.artist}
						</span>
					</figcaption>
				</figure>
			{/each}
		</div>
	</ScrollArea>
{/if}
