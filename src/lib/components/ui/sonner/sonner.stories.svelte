<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './sonner.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Sonner',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: [
					'default',
					'success',
					'error',
					'info',
					'warning',
					'description',
					'action',
					'promise',
					'loading'
				]
			},
			position: {
				control: 'select',
				options: [
					'top-left',
					'top-center',
					'top-right',
					'bottom-left',
					'bottom-center',
					'bottom-right'
				]
			},
			richColors: { control: 'boolean' },
			closeButton: { control: 'boolean' },
			expand: { control: 'boolean' }
		}
	});
</script>

<Story name="Playground" args={{ variant: 'default' }} />
<Story name="Default" args={{ variant: 'default' }} />
<Story name="Success" args={{ variant: 'success' }} />
<Story name="Error" args={{ variant: 'error' }} />
<Story name="Info" args={{ variant: 'info' }} />
<Story name="Warning" args={{ variant: 'warning' }} />
<Story name="WithDescription" args={{ variant: 'description' }} />
<Story name="WithAction" args={{ variant: 'action' }} />
<Story name="Promise" args={{ variant: 'promise' }} />
<Story name="Loading" args={{ variant: 'loading' }} />
<Story name="WithCloseButton" args={{ variant: 'default', closeButton: true }} />
<Story name="PositionTopRight" args={{ variant: 'default', position: 'top-right' }} />
<Story name="PositionTopCenter" args={{ variant: 'default', position: 'top-center' }} />
<Story name="Expanded" args={{ variant: 'default', expand: true }} />
