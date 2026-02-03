<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './data-table.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Composite/DataTable',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['default', 'simple', 'empty']
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'default' }} />
<Story name="Default" args={{ variant: 'default' }} />
<Story name="Simple" args={{ variant: 'simple' }} />
<Story name="Empty" args={{ variant: 'empty' }} />
