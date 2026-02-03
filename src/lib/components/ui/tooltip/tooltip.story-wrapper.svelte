<script lang="ts">
	import * as Tooltip from './index.js';
	import { buttonVariants } from '../button/index.js';

	let {
		delayDuration = 200,
		side = 'top',
		sideOffset = 0,
		content = 'Add to library',
		triggerText = 'Hover'
	}: {
		delayDuration?: number;
		side?: 'top' | 'right' | 'bottom' | 'left';
		sideOffset?: number;
		content?: string;
		triggerText?: string;
	} = $props();
</script>

<Tooltip.Provider {delayDuration}>
	<Tooltip.Root>
		<Tooltip.Trigger class={buttonVariants({ variant: 'outline' })}>
			{triggerText}
		</Tooltip.Trigger>
		<Tooltip.Content {side} {sideOffset}>
			<p>{content}</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
