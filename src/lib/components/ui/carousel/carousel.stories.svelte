<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Carousel from './index.js';
	import * as Card from '../card/index.js';
	import Root from './carousel.svelte';

	const { Story } = defineMeta({
		title: 'UI/Layout/Carousel',
		component: Root,
		tags: ['autodocs'],
		argTypes: {
			orientation: {
				control: { type: 'select' },
				options: ['horizontal', 'vertical'],
				description: 'Carousel orientation'
			}
		},
		args: {
			orientation: 'horizontal'
		}
	});
</script>

<Story name="Playground">
	<Carousel.Root class="w-full max-w-xs">
		<Carousel.Content>
			{#each Array(5) as _, i}
				<Carousel.Item>
					<div class="p-1">
						<Card.Root>
							<Card.Content class="flex aspect-square items-center justify-center p-6">
								<span class="text-4xl font-semibold">{i + 1}</span>
							</Card.Content>
						</Card.Root>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</Story>

<Story name="Default">
	<Carousel.Root class="w-full max-w-xs">
		<Carousel.Content>
			{#each Array(5) as _, i}
				<Carousel.Item>
					<div class="p-1">
						<Card.Root>
							<Card.Content class="flex aspect-square items-center justify-center p-6">
								<span class="text-4xl font-semibold">{i + 1}</span>
							</Card.Content>
						</Card.Root>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</Story>

<Story name="MultipleItems">
	<Carousel.Root class="w-full max-w-sm">
		<Carousel.Content class="-ml-1">
			{#each Array(5) as _, i}
				<Carousel.Item class="pl-1 md:basis-1/2 lg:basis-1/3">
					<div class="p-1">
						<Card.Root>
							<Card.Content class="flex aspect-square items-center justify-center p-6">
								<span class="text-2xl font-semibold">{i + 1}</span>
							</Card.Content>
						</Card.Root>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</Story>

<Story name="Vertical">
	<Carousel.Root orientation="vertical" class="w-full max-w-xs">
		<Carousel.Content class="-mt-1 h-[200px]">
			{#each Array(5) as _, i}
				<Carousel.Item class="pt-1 md:basis-1/2">
					<div class="p-1">
						<Card.Root>
							<Card.Content class="flex items-center justify-center p-6">
								<span class="text-3xl font-semibold">{i + 1}</span>
							</Card.Content>
						</Card.Root>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</Story>

<Story name="ImageGallery">
	<Carousel.Root class="w-full max-w-lg">
		<Carousel.Content>
			{#each Array(5) as _, i}
				<Carousel.Item>
					<div class="p-1">
						<div class="flex aspect-video items-center justify-center rounded-lg bg-muted">
							<span class="text-muted-foreground">Image {i + 1}</span>
						</div>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</Story>

<Story name="ProductShowcase">
	<div class="w-full max-w-md">
		<Carousel.Root>
			<Carousel.Content>
				{#each ['Front', 'Side', 'Back', 'Detail'] as view}
					<Carousel.Item>
						<div class="flex aspect-square items-center justify-center rounded-lg bg-muted">
							<span class="text-muted-foreground">{view} View</span>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
		<div class="mt-4 flex justify-center gap-2">
			{#each Array(4) as _, i}
				<div class="size-12 cursor-pointer rounded bg-muted ring-primary hover:ring-2"></div>
			{/each}
		</div>
	</div>
</Story>

<Story name="Testimonials">
	<Carousel.Root class="w-full max-w-xl">
		<Carousel.Content>
			{#each ['Alice', 'Bob', 'Charlie'] as name}
				<Carousel.Item>
					<Card.Root>
						<Card.Content class="p-6 text-center">
							<div class="mx-auto mb-4 size-16 rounded-full bg-muted"></div>
							<blockquote class="mb-4 text-lg italic">
								"This product has completely transformed how I work. Highly recommended!"
							</blockquote>
							<p class="font-semibold">{name}</p>
							<p class="text-sm text-muted-foreground">CEO at Company</p>
						</Card.Content>
					</Card.Root>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</Story>

<Story name="CardCarousel">
	<Carousel.Root class="w-full max-w-3xl">
		<Carousel.Content class="-ml-2">
			{#each Array(6) as _, i}
				<Carousel.Item class="pl-2 md:basis-1/2 lg:basis-1/3">
					<Card.Root>
						<Card.Content class="p-4">
							<div class="mb-3 aspect-video rounded bg-muted"></div>
							<h3 class="font-semibold">Card Title {i + 1}</h3>
							<p class="text-sm text-muted-foreground">A brief description of the card content.</p>
						</Card.Content>
					</Card.Root>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</Story>

<Story name="FullWidth">
	<Carousel.Root class="w-full">
		<Carousel.Content>
			{#each ['Slide 1', 'Slide 2', 'Slide 3'] as slide}
				<Carousel.Item>
					<div class="flex h-[300px] items-center justify-center rounded-lg bg-muted">
						<span class="text-2xl font-semibold text-muted-foreground">{slide}</span>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</Story>
