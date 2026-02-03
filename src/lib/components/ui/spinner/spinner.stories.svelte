<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './spinner.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Primitives/Spinner',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['default', 'sizes', 'colors', 'button', 'badge', 'input-group']
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'default' }} />
<Story name="Default" args={{ variant: 'default' }} />
<Story name="Sizes" args={{ variant: 'sizes' }} />
<Story name="Colors" args={{ variant: 'colors' }} />
<Story name="Button" args={{ variant: 'button' }} />
<Story name="Badge" args={{ variant: 'badge' }} />
<Story name="InputGroup" args={{ variant: 'input-group' }} />
