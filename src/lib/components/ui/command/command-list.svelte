<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';
	import { cn } from '../../../utils.js';

	let { class: className, ...restProps }: CommandPrimitive.ListProps = $props();
</script>

<CommandPrimitive.List
	data-slot="command-list"
	class={cn('max-h-75 scroll-py-1 overflow-x-hidden overflow-y-auto', className)}
	{...restProps}
/>
