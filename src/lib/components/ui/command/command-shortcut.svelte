<script lang="ts">
	import { cn } from '../../../utils.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	let {
		class: className,
		children,
		...restProps
	}: HTMLAttributes<HTMLSpanElement> & {
		children?: Snippet;
	} = $props();
</script>

<span
	data-slot="command-shortcut"
	class={cn('text-muted-foreground ms-auto text-xs tracking-widest', className)}
	{...restProps}
>
	{@render children?.()}
</span>
