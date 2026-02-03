<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './button.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Primitives/Button',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: [
					'default',
					'primary',
					'secondary',
					'destructive',
					'outline',
					'ghost',
					'link',
					'sizes',
					'icon'
				]
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'default' }} />
<Story name="Primary" args={{ variant: 'primary' }} />
<Story name="Secondary" args={{ variant: 'secondary' }} />
<Story name="Destructive" args={{ variant: 'destructive' }} />
<Story name="Outline" args={{ variant: 'outline' }} />
<Story name="Ghost" args={{ variant: 'ghost' }} />
<Story name="Link" args={{ variant: 'link' }} />
<Story name="Sizes" args={{ variant: 'sizes' }} />
<Story name="Icon" args={{ variant: 'icon' }} />
