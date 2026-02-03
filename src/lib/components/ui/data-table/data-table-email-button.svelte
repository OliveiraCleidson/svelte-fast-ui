<script lang="ts">
	import { Button } from '../button/index.js';
	import ArrowUpDownIcon from '@lucide/svelte/icons/arrow-up-down';

	let { onclick }: { onclick?: (event?: unknown) => void } = $props();
</script>

<Button variant="ghost" {onclick}>
	Email
	<ArrowUpDownIcon class="ms-2 size-4" />
</Button>
