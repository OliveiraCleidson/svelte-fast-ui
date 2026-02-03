<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './scroll-area.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Primitives/ScrollArea',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['default', 'horizontal']
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'default' }} />
<Story name="Default" args={{ variant: 'default' }} />
<Story name="Horizontal" args={{ variant: 'horizontal' }} />
