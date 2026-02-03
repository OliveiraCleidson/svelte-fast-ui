<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './empty.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Empty',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['default', 'outline', 'background', 'avatar', 'avatar-group', 'input-group']
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'default' }} />
<Story name="Default" args={{ variant: 'default' }} />
<Story name="Outline" args={{ variant: 'outline' }} />
<Story name="Background" args={{ variant: 'background' }} />
<Story name="Avatar" args={{ variant: 'avatar' }} />
<Story name="AvatarGroup" args={{ variant: 'avatar-group' }} />
<Story name="InputGroup" args={{ variant: 'input-group' }} />
