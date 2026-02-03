<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './label.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Primitives/Label',
		component: Wrapper,
		tags: ['autodocs']
	});
</script>

<Story name="Playground" />
<Story name="Default" />
