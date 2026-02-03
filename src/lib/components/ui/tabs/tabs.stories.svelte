<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './tabs.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Layout/Tabs',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['default', 'simple', 'with-disabled', 'full-width', 'settings', 'dashboard-tabs']
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'default' }} />

<Story name="Default" args={{ variant: 'default' }} />

<Story name="Simple" args={{ variant: 'simple' }} />

<Story name="WithDisabled" args={{ variant: 'with-disabled' }} />

<Story name="FullWidth" args={{ variant: 'full-width' }} />

<Story name="Settings" args={{ variant: 'settings' }} />

<Story name="DashboardTabs" args={{ variant: 'dashboard-tabs' }} />
