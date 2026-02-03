<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './typography.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Primitives/Typography',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['all', 'headings', 'paragraphs', 'inline', 'lists']
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'all' }} />
<Story name="All Variants" args={{ variant: 'all' }} />
<Story name="Headings" args={{ variant: 'headings' }} />
<Story name="Paragraphs" args={{ variant: 'paragraphs' }} />
<Story name="Inline" args={{ variant: 'inline' }} />
<Story name="Lists" args={{ variant: 'lists' }} />
