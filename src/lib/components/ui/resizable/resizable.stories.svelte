<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './resizable.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Primitives/Resizable',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['default', 'vertical', 'handle']
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'default' }} />
<Story name="Default" args={{ variant: 'default' }} />
<Story name="Vertical" args={{ variant: 'vertical' }} />
<Story name="Handle" args={{ variant: 'handle' }} />
