<script module>
	// @ts-nocheck - Storybook CSF typing issues with let:args
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Textarea } from './index.js';
	import { Label } from '../label/index.js';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Textarea',
		component: Textarea,
		tags: ['autodocs'],
		argTypes: {
			placeholder: {
				control: 'text',
				description: 'Placeholder text'
			},
			value: {
				control: 'text',
				description: 'Textarea value'
			},
			disabled: {
				control: 'boolean',
				description: 'Disabled state'
			},
			rows: {
				control: 'number',
				description: 'Number of visible rows'
			}
		},
		args: {
			placeholder: 'Type your message here...'
		}
	});
</script>

<Story name="Playground" let:args>
	<div class="w-full max-w-sm">
		<Textarea {...args} />
	</div>
</Story>

<Story name="Default" args={{ placeholder: 'Type your message here...' }} let:args>
	<div class="w-full max-w-sm">
		<Textarea {...args} />
	</div>
</Story>

<Story
	name="WithValue"
	args={{
		value:
			'This is some pre-filled content in the textarea. It can span multiple lines and will expand as needed.'
	}}
	let:args
>
	<div class="w-full max-w-sm">
		<Textarea {...args} />
	</div>
</Story>

<Story name="WithRows" args={{ placeholder: 'Fixed height textarea', rows: 6 }} let:args>
	<div class="w-full max-w-sm">
		<Textarea {...args} class="field-sizing-fixed" />
	</div>
</Story>

<Story name="Disabled" args={{ placeholder: 'Disabled textarea', disabled: true }} let:args>
	<div class="w-full max-w-sm">
		<Textarea {...args} />
	</div>
</Story>

<Story name="Error">
	<div class="w-full max-w-sm space-y-1">
		<Textarea
			placeholder="Invalid input"
			class="border-destructive focus-visible:ring-destructive/50"
		/>
		<p class="text-destructive text-sm">This field is required.</p>
	</div>
</Story>

<Story name="WithLabel">
	<div class="grid w-full max-w-sm gap-1.5">
		<Label for="message">Your message</Label>
		<Textarea id="message" placeholder="Type your message here..." />
		<p class="text-muted-foreground text-sm">Your message will be sent to our support team.</p>
	</div>
</Story>

<Story name="AutoResize">
	<div class="w-full max-w-sm">
		<p class="text-muted-foreground mb-2 text-sm">This textarea auto-resizes as you type:</p>
		<Textarea placeholder="Start typing to see auto-resize..." />
	</div>
</Story>
