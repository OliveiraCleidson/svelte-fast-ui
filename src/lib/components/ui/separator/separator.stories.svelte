<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './separator.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Primitives/Separator',
		component: Wrapper,
		tags: ['autodocs']
	});
</script>

<Story name="Playground" />
<Story name="Default" />
