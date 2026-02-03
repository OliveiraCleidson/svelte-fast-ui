<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './pagination.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Layout/Pagination',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			count: { control: 'number' },
			page: { control: 'number' },
			perPage: { control: 'number' }
		}
	});
</script>

<Story
	name="Playground"
	args={{
		count: 30,
		page: 2,
		perPage: 10
	}}
/>

<Story
	name="Default"
	args={{
		count: 30,
		page: 1,
		perPage: 10
	}}
/>

<Story
	name="MiddlePage"
	args={{
		count: 100,
		page: 5,
		perPage: 10
	}}
/>

<Story
	name="LastPage"
	args={{
		count: 100,
		page: 10,
		perPage: 10
	}}
/>

<Story
	name="FewPages"
	args={{
		count: 30,
		page: 2,
		perPage: 10
	}}
/>

<Story
	name="ManyPages"
	args={{
		count: 500,
		page: 25,
		perPage: 10
	}}
/>
