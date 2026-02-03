<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './aspect-ratio.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Primitives/AspectRatio',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			ratio: {
				control: { type: 'number', min: 0.1, max: 5, step: 0.1 }
			}
		}
	});
</script>

<Story name="Playground" args={{ ratio: 16 / 9 }} />
<Story name="Ratio16x9" args={{ ratio: 16 / 9 }} />
<Story name="Ratio4x3" args={{ ratio: 4 / 3 }} />
<Story name="Square" args={{ ratio: 1 }} />
<Story name="Ratio21x9" args={{ ratio: 21 / 9 }} />
<Story name="Portrait" args={{ ratio: 9 / 16 }} />
