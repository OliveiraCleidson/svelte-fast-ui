<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './skeleton.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Primitives/Skeleton',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['default', 'card']
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'default' }} />
<Story name="Default" args={{ variant: 'default' }} />
<Story name="Card" args={{ variant: 'card' }} />
