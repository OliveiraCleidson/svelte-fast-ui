<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn, type WithoutChild } from '../../../utils.js';

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		children,
		...restProps
	}: WithoutChild<AccordionPrimitive.RootProps> = $props();
</script>

<AccordionPrimitive.Root
	bind:ref
	bind:value={value as never}
	data-slot="accordion"
	class={cn('w-full', className)}
	{...restProps}
>
	{@render children?.()}
</AccordionPrimitive.Root>
