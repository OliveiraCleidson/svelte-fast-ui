<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './toggle.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Primitives/Toggle',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['default', 'outline', 'with-text', 'sizes', 'disabled', 'toolbar']
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'default' }} />
<Story name="Default" args={{ variant: 'default' }} />
<Story name="Outline" args={{ variant: 'outline' }} />
<Story name="WithText" args={{ variant: 'with-text' }} />
<Story name="Sizes" args={{ variant: 'sizes' }} />
<Story name="Disabled" args={{ variant: 'disabled' }} />
<Story name="Toolbar" args={{ variant: 'toolbar' }} />
