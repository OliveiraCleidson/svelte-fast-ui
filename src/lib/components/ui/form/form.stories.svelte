<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './form.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Composite/Form',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['default']
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'default' }} />
<Story name="Default" args={{ variant: 'default' }} />
