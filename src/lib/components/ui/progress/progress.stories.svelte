<script module>
	// @ts-nocheck - Storybook CSF typing issues with let:args
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Progress } from './index.js';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Progress',
		component: Progress,
		tags: ['autodocs'],
		argTypes: {
			value: {
				control: { type: 'range', min: 0, max: 100, step: 1 },
				description: 'Current progress value'
			},
			max: {
				control: { type: 'number', min: 1 },
				description: 'Maximum value (default: 100)'
			}
		},
		args: {
			value: 50,
			max: 100
		}
	});
</script>

<Story name="Playground" let:args>
	<div class="w-full max-w-md">
		<Progress {...args} />
	</div>
</Story>

<Story name="Default" args={{ value: 50 }} let:args>
	<div class="w-full max-w-md">
		<Progress {...args} />
	</div>
</Story>

<Story name="Empty" args={{ value: 0 }} let:args>
	<div class="w-full max-w-md">
		<Progress {...args} />
	</div>
</Story>

<Story name="Quarter" args={{ value: 25 }} let:args>
	<div class="w-full max-w-md">
		<Progress {...args} />
	</div>
</Story>

<Story name="Half" args={{ value: 50 }} let:args>
	<div class="w-full max-w-md">
		<Progress {...args} />
	</div>
</Story>

<Story name="ThreeQuarters" args={{ value: 75 }} let:args>
	<div class="w-full max-w-md">
		<Progress {...args} />
	</div>
</Story>

<Story name="Complete" args={{ value: 100 }} let:args>
	<div class="w-full max-w-md">
		<Progress {...args} />
	</div>
</Story>

<Story name="CustomMax" args={{ value: 3, max: 5 }} let:args>
	<div class="w-full max-w-md">
		<p class="mb-2 text-sm text-muted-foreground">3 of 5 steps completed</p>
		<Progress {...args} />
	</div>
</Story>

<Story name="WithLabel">
	<div class="w-full max-w-md space-y-2">
		<div class="flex justify-between text-sm">
			<span>Uploading...</span>
			<span>66%</span>
		</div>
		<Progress value={66} />
	</div>
</Story>

<Story name="AllValues">
	<div class="w-full max-w-md space-y-4">
		<div class="space-y-1">
			<span class="text-sm text-muted-foreground">0%</span>
			<Progress value={0} />
		</div>
		<div class="space-y-1">
			<span class="text-sm text-muted-foreground">25%</span>
			<Progress value={25} />
		</div>
		<div class="space-y-1">
			<span class="text-sm text-muted-foreground">50%</span>
			<Progress value={50} />
		</div>
		<div class="space-y-1">
			<span class="text-sm text-muted-foreground">75%</span>
			<Progress value={75} />
		</div>
		<div class="space-y-1">
			<span class="text-sm text-muted-foreground">100%</span>
			<Progress value={100} />
		</div>
	</div>
</Story>

<Story name="FileUpload">
	<div class="w-full max-w-md space-y-3 rounded-lg border p-4">
		<div class="flex items-center gap-3">
			<div class="flex size-10 items-center justify-center rounded bg-muted text-xs">PDF</div>
			<div class="min-w-0 flex-1">
				<p class="truncate text-sm font-medium">document.pdf</p>
				<p class="text-xs text-muted-foreground">2.4 MB</p>
			</div>
		</div>
		<Progress value={73} />
		<p class="text-right text-xs text-muted-foreground">73% uploaded</p>
	</div>
</Story>
