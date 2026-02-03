<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './toggle-group.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Composite/ToggleGroup',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: 'select',
				options: [
					'default',
					'single',
					'multiple',
					'outline',
					'sizes',
					'theme-switcher',
					'with-labels',
					'disabled'
				]
			}
		}
	});
</script>

<Story name="Playground" args={{ variant: 'default' }} />

<Story name="Single" args={{ variant: 'single' }} />

<Story name="Multiple" args={{ variant: 'multiple' }} />

<Story name="Outline" args={{ variant: 'outline' }} />

<Story name="Sizes" args={{ variant: 'sizes' }} />

<Story name="ThemeSwitcher" args={{ variant: 'theme-switcher' }} />

<Story name="WithLabels" args={{ variant: 'with-labels' }} />

<Story name="Disabled" args={{ variant: 'disabled' }} />
