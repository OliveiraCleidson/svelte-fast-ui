<script lang="ts">
	import { typographyVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	let {
		variant = 'all'
	}: {
		variant?: 'all' | 'headings' | 'paragraphs' | 'inline' | 'lists';
	} = $props();
</script>

{#if variant === 'all'}
	<div class="space-y-8">
		<section>
			<p class={cn(typographyVariants({ variant: 'muted' }), 'mb-4')}>Headings</p>
			<h1 class={typographyVariants({ variant: 'h1' })}>This is H1 Heading</h1>
			<h2 class={typographyVariants({ variant: 'h2' })}>This is H2 Heading</h2>
			<h3 class={typographyVariants({ variant: 'h3' })}>This is H3 Heading</h3>
			<h4 class={typographyVariants({ variant: 'h4' })}>This is H4 Heading</h4>
		</section>

		<section>
			<p class={cn(typographyVariants({ variant: 'muted' }), 'mb-4')}>Paragraphs</p>
			<p class={typographyVariants({ variant: 'lead' })}>
				This is a lead paragraph. It's typically used for introductory text that needs to stand out
				from the rest of the content.
			</p>
			<p class={typographyVariants({ variant: 'p' })}>
				This is a regular paragraph. The king, seeing how much happier his subjects were, realized
				the error of his ways and repealed the joke tax. The people rejoiced, and the kingdom was
				once again filled with laughter.
			</p>
			<p class={typographyVariants({ variant: 'large' })}>This is large text for emphasis.</p>
			<p class={typographyVariants({ variant: 'small' })}>This is small text for fine print.</p>
			<p class={typographyVariants({ variant: 'muted' })}>This is muted text for secondary info.</p>
		</section>

		<section>
			<p class={cn(typographyVariants({ variant: 'muted' }), 'mb-4')}>Inline Elements</p>
			<blockquote class={typographyVariants({ variant: 'blockquote' })}>
				"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay
				for the privilege."
			</blockquote>
			<p class={typographyVariants({ variant: 'p' })}>
				Use the <code class={typographyVariants({ variant: 'code' })}>typographyVariants</code> function
				to apply typography styles.
			</p>
		</section>

		<section>
			<p class={cn(typographyVariants({ variant: 'muted' }), 'mb-4')}>Lists</p>
			<ul class={typographyVariants({ variant: 'list' })}>
				<li>First item in the list</li>
				<li>Second item with more content</li>
				<li>Third item to complete the example</li>
			</ul>
		</section>
	</div>
{:else if variant === 'headings'}
	<div class="space-y-4">
		<h1 class={typographyVariants({ variant: 'h1' })}>H1: The Joke Tax Chronicles</h1>
		<h2 class={typographyVariants({ variant: 'h2' })}>H2: The People of the Kingdom</h2>
		<h3 class={typographyVariants({ variant: 'h3' })}>H3: The Joke Tax</h3>
		<h4 class={typographyVariants({ variant: 'h4' })}>H4: People stopped telling jokes</h4>
	</div>
{:else if variant === 'paragraphs'}
	<div class="space-y-4">
		<p class={typographyVariants({ variant: 'lead' })}>
			A modal dialog that interrupts the user with important content and expects a response.
		</p>
		<p class={typographyVariants({ variant: 'p' })}>
			The king, seeing how much happier his subjects were, realized the error of his ways and
			repealed the joke tax. Jokester and his colleagues were once again free to tell jokes, and the
			kingdom was once again filled with laughter.
		</p>
		<p class={typographyVariants({ variant: 'p' })}>
			The moral of the story? Never tax the things that bring people joy, and always listen to a
			good joke when you hear one.
		</p>
		<p class={typographyVariants({ variant: 'large' })}>Are you absolutely sure?</p>
		<p class={typographyVariants({ variant: 'small' })}>Email address is required.</p>
		<p class={typographyVariants({ variant: 'muted' })}>Enter your email address.</p>
	</div>
{:else if variant === 'inline'}
	<div class="space-y-6">
		<blockquote class={typographyVariants({ variant: 'blockquote' })}>
			"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for
			the privilege."
		</blockquote>

		<p class={typographyVariants({ variant: 'p' })}>
			You can install the component using the
			<code class={typographyVariants({ variant: 'code' })}>npx shadcn-svelte@latest add</code>
			command.
		</p>

		<p class={typographyVariants({ variant: 'p' })}>
			The <code class={typographyVariants({ variant: 'code' })}>@radix-ui/react-alert-dialog</code> component
			is used internally.
		</p>
	</div>
{:else if variant === 'lists'}
	<div class="space-y-6">
		<div>
			<h4 class={typographyVariants({ variant: 'h4' })}>Unordered List</h4>
			<ul class={typographyVariants({ variant: 'list' })}>
				<li>1st level of puns: 5 gold coins</li>
				<li>2nd level of jokes: 10 gold coins</li>
				<li>3rd level of one-liners: 20 gold coins</li>
			</ul>
		</div>

		<div>
			<h4 class={typographyVariants({ variant: 'h4' })}>Feature List</h4>
			<ul class={typographyVariants({ variant: 'list' })}>
				<li>Accessible by default</li>
				<li>Keyboard navigation</li>
				<li>Focus management</li>
				<li>Screen reader support</li>
			</ul>
		</div>
	</div>
{/if}
