<script lang="ts">
	import { cn } from '../../../utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		value = $bindable(''),
		class: className,
		...restProps
	}: CommandPrimitive.RootProps = $props();
</script>

<CommandPrimitive.Root
	bind:ref
	bind:value
	data-slot="command"
	class={cn(
		'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md',
		className
	)}
	{...restProps}
/>
