<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './accordion.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Layout/Accordion',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: ['default', 'playground', 'multiple', 'faq', 'product-details', 'settings-panel']
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'playground' }} />

<Story name="Default" args={{ variant: 'default' }} />

<Story name="Multiple" args={{ variant: 'multiple' }} />

<Story name="FAQ" args={{ variant: 'faq' }} />

<Story name="ProductDetails" args={{ variant: 'product-details' }} />

<Story name="SettingsPanel" args={{ variant: 'settings-panel' }} />
