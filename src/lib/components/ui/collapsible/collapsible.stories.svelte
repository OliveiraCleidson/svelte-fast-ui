<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './collapsible.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Primitives/Collapsible',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			open: { control: 'boolean' }
		}
	});
</script>

<Story name="Playground" args={{ open: false }} />
<Story name="Default" args={{ open: false }} />
<Story name="Open" args={{ open: true }} />
