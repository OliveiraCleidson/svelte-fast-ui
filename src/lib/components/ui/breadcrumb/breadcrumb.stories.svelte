<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './breadcrumb.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Composite/Breadcrumb',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: [
					'default',
					'playground',
					'with-ellipsis',
					'custom-separator',
					'with-icons',
					'file-explorer',
					'e-commerce'
				]
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'playground' }} />

<Story name="Default" args={{ variant: 'default' }} />

<Story name="WithEllipsis" args={{ variant: 'with-ellipsis' }} />

<Story name="CustomSeparator" args={{ variant: 'custom-separator' }} />

<Story name="WithIcons" args={{ variant: 'with-icons' }} />

<Story name="FileExplorer" args={{ variant: 'file-explorer' }} />

<Story name="ECommerce" args={{ variant: 'e-commerce' }} />
