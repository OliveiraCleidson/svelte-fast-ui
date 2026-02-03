<script lang="ts">
	import { Checkbox } from '../checkbox/index.js';

	let {
		checked = false,
		indeterminate = false,
		onCheckedChange,
		...restProps
	}: {
		checked?: boolean;
		indeterminate?: boolean;
		onCheckedChange?: (value: boolean) => void;
	} & Record<string, unknown> = $props();
</script>

<Checkbox {checked} {indeterminate} {onCheckedChange} {...restProps} />
