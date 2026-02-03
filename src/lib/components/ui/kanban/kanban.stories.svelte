<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './kanban.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Composite/Kanban',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['default', 'custom-card', 'empty', 'many-columns']
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'default' }} />
<Story name="Default" args={{ variant: 'default' }} />
<Story name="Custom Card" args={{ variant: 'custom-card' }} />
<Story name="Empty Columns" args={{ variant: 'empty' }} />
<Story name="Many Columns" args={{ variant: 'many-columns' }} />
