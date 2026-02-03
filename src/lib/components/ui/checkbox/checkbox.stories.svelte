<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Checkbox } from './index.js';
	import { Label } from '../label/index.js';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Checkbox',
		component: Checkbox,
		tags: ['autodocs'],
		argTypes: {
			checked: {
				control: 'boolean',
				description: 'Checked state'
			},
			indeterminate: {
				control: 'boolean',
				description: 'Indeterminate state'
			},
			disabled: {
				control: 'boolean',
				description: 'Disabled state'
			}
		},
		args: {
			checked: false,
			indeterminate: false,
			disabled: false
		}
	});
</script>

<Story name="Playground">
	<div class="flex items-center gap-3">
		<Checkbox id="playground" />
		<Label for="playground">Accept terms and conditions</Label>
	</div>
</Story>

<Story name="Default">
	<div class="flex items-center gap-3">
		<Checkbox id="terms" />
		<Label for="terms">Accept terms and conditions</Label>
	</div>
</Story>

<Story name="Checked">
	<div class="flex items-center gap-3">
		<Checkbox id="terms-checked" checked />
		<Label for="terms-checked">Accept terms and conditions</Label>
	</div>
</Story>

<Story name="WithDescription">
	<div class="flex items-start gap-3">
		<Checkbox id="terms-desc" checked />
		<div class="grid gap-2">
			<Label for="terms-desc">Accept terms and conditions</Label>
			<p class="text-sm text-muted-foreground">
				By clicking this checkbox, you agree to the terms and conditions.
			</p>
		</div>
	</div>
</Story>

<Story name="Disabled">
	<div class="flex items-start gap-3">
		<Checkbox id="toggle-disabled" disabled />
		<Label for="toggle-disabled">Enable notifications</Label>
	</div>
</Story>

<Story name="Indeterminate">
	<div class="flex items-center gap-3">
		<Checkbox id="indeterminate" indeterminate />
		<Label for="indeterminate">Select all items</Label>
	</div>
</Story>

<Story name="CardStyle">
	<Label
		class="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[data-state=checked]]:border-blue-600 has-[[data-state=checked]]:bg-blue-50 dark:has-[[data-state=checked]]:border-blue-900 dark:has-[[data-state=checked]]:bg-blue-950"
	>
		<Checkbox
			id="card-checkbox"
			checked
			class="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
		/>
		<div class="grid gap-1.5 font-normal">
			<p class="text-sm leading-none font-medium">Enable notifications</p>
			<p class="text-sm text-muted-foreground">
				You can enable or disable notifications at any time.
			</p>
		</div>
	</Label>
</Story>
