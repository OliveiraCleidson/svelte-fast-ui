<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './badge.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Primitives/Badge',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['all', 'default', 'secondary', 'destructive', 'outline', 'custom', 'counter']
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'all' }} />
<Story name="Default" args={{ variant: 'default' }} />
<Story name="Secondary" args={{ variant: 'secondary' }} />
<Story name="Destructive" args={{ variant: 'destructive' }} />
<Story name="Outline" args={{ variant: 'outline' }} />
<Story name="Custom" args={{ variant: 'custom' }} />
<Story name="Counter" args={{ variant: 'counter' }} />
