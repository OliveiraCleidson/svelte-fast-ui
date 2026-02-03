<script lang="ts">
	import { Button } from '@olivdev/svelte-fast-ui/components/ui/button';
	import { Badge } from '@olivdev/svelte-fast-ui/components/ui/badge';
	import * as Card from '@olivdev/svelte-fast-ui/components/ui/card';
	import * as Alert from '@olivdev/svelte-fast-ui/components/ui/alert';
	import { Separator } from '@olivdev/svelte-fast-ui/components/ui/separator';
	import { Input } from '@olivdev/svelte-fast-ui/components/ui/input';
	import { Label } from '@olivdev/svelte-fast-ui/components/ui/label';
	import { Spinner } from '@olivdev/svelte-fast-ui/components/ui/spinner';
	import CircleAlertIcon from '@lucide/svelte/icons/circle-alert';

	let inputValue = $state('');
	let loading = $state(false);

	function handleClick() {
		loading = true;
		setTimeout(() => (loading = false), 2000);
	}
</script>

<main class="bg-background text-foreground min-h-screen p-8">
	<div class="mx-auto max-w-2xl space-y-8">
		<div class="space-y-2 text-center">
			<h1 class="text-4xl font-bold">svelte-fast-ui Example</h1>
			<p class="text-muted-foreground">
				Testing <Badge variant="secondary">@olivdev/svelte-fast-ui</Badge> from npm
			</p>
		</div>

		<Separator />

		<!-- Buttons -->
		<section class="space-y-4">
			<h2 class="text-2xl font-semibold">Buttons</h2>
			<div class="flex flex-wrap gap-3">
				<Button onclick={handleClick}>
					{#if loading}<Spinner />{/if}
					{loading ? 'Loading...' : 'Default'}
				</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="destructive">Destructive</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="ghost">Ghost</Button>
				<Button variant="link">Link</Button>
			</div>
		</section>

		<Separator />

		<!-- Badges -->
		<section class="space-y-4">
			<h2 class="text-2xl font-semibold">Badges</h2>
			<div class="flex flex-wrap gap-3">
				<Badge>Default</Badge>
				<Badge variant="secondary">Secondary</Badge>
				<Badge variant="destructive">Destructive</Badge>
				<Badge variant="outline">Outline</Badge>
			</div>
		</section>

		<Separator />

		<!-- Input -->
		<section class="space-y-4">
			<h2 class="text-2xl font-semibold">Input</h2>
			<div class="grid w-full max-w-sm gap-1.5">
				<Label for="email">Email</Label>
				<Input type="email" id="email" placeholder="you@example.com" bind:value={inputValue} />
				{#if inputValue}
					<p class="text-muted-foreground text-sm">You typed: {inputValue}</p>
				{/if}
			</div>
		</section>

		<Separator />

		<!-- Card -->
		<section class="space-y-4">
			<h2 class="text-2xl font-semibold">Card</h2>
			<Card.Root>
				<Card.Header>
					<Card.Title>Card Title</Card.Title>
					<Card.Description>This card is rendered using the npm package.</Card.Description>
				</Card.Header>
				<Card.Content>
					<p>If you can see this styled correctly, the package is working!</p>
				</Card.Content>
				<Card.Footer>
					<Button variant="outline">Cancel</Button>
					<Button>Confirm</Button>
				</Card.Footer>
			</Card.Root>
		</section>

		<Separator />

		<!-- Alert -->
		<section class="space-y-4">
			<h2 class="text-2xl font-semibold">Alert</h2>
			<Alert.Root>
				<CircleAlertIcon class="size-4" />
				<Alert.Title>Heads up!</Alert.Title>
				<Alert.Description>
					This alert component was imported from @olivdev/svelte-fast-ui.
				</Alert.Description>
			</Alert.Root>
			<Alert.Root variant="destructive">
				<CircleAlertIcon class="size-4" />
				<Alert.Title>Error</Alert.Title>
				<Alert.Description>Something went wrong. This is a destructive alert.</Alert.Description>
			</Alert.Root>
		</section>
	</div>
</main>
