<script lang="ts">
	import { Command as CommandPrimitive } from 'bits-ui';

	let { ...restProps }: CommandPrimitive.LoadingProps = $props();
</script>

<CommandPrimitive.Loading {...restProps} />
