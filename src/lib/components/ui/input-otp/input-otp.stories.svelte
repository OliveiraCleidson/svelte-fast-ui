<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './input-otp.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/InputOtp',
		component: Wrapper,
		tags: ['autodocs']
	});
</script>

<Story name="Playground" />
