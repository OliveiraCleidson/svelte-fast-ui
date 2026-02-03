<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './sidebar.story-wrapper.svelte';
	import CollapsibleTest from './sidebar-collapsible-test.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Sidebar',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['sidebar', 'floating', 'inset']
			},
			side: {
				control: 'select',
				options: ['left', 'right']
			},
			collapsible: {
				control: 'select',
				options: ['offcanvas', 'icon', 'none']
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'sidebar', side: 'left', collapsible: 'offcanvas' }} />
<Story name="Default" args={{ variant: 'sidebar', side: 'left', collapsible: 'offcanvas' }} />
<Story name="Floating" args={{ variant: 'floating', side: 'left', collapsible: 'offcanvas' }} />
<Story name="Inset" args={{ variant: 'inset', side: 'left', collapsible: 'offcanvas' }} />
<Story name="IconCollapsible" args={{ variant: 'sidebar', side: 'left', collapsible: 'icon' }} />
<Story name="RightSide" args={{ variant: 'sidebar', side: 'right', collapsible: 'offcanvas' }} />
<Story name="NonCollapsible" args={{ variant: 'sidebar', side: 'left', collapsible: 'none' }} />

<Story name="CollapsibleTest">
	<CollapsibleTest />
</Story>
