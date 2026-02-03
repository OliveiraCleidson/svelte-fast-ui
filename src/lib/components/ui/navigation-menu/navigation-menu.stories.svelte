<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		NavigationMenuRoot,
		NavigationMenuContent,
		NavigationMenuIndicator,
		NavigationMenuItem,
		NavigationMenuLink,
		NavigationMenuList,
		NavigationMenuTrigger,
		NavigationMenuViewport
	} from './index.js';
	import { cn } from '../../../utils.js';

	const { Story } = defineMeta({
		title: 'UI/Composite/NavigationMenu',
		component: NavigationMenuRoot,
		tags: ['autodocs']
	});

	const components = [
		{
			title: 'Alert Dialog',
			href: '/docs/primitives/alert-dialog',
			description: 'A modal dialog that interrupts the user with important content.'
		},
		{
			title: 'Hover Card',
			href: '/docs/primitives/hover-card',
			description: 'For sighted users to preview content available behind a link.'
		},
		{
			title: 'Progress',
			href: '/docs/primitives/progress',
			description: 'Displays an indicator showing the completion progress of a task.'
		},
		{
			title: 'Scroll Area',
			href: '/docs/primitives/scroll-area',
			description: 'Visually or semantically separates content.'
		},
		{
			title: 'Tabs',
			href: '/docs/primitives/tabs',
			description: 'A set of layered sections of content—known as tab panels.'
		},
		{
			title: 'Tooltip',
			href: '/docs/primitives/tooltip',
			description: 'A popup that displays information related to an element.'
		}
	];
</script>

<Story name="Playground">
	<NavigationMenuRoot class="relative z-10 flex max-w-max flex-1 items-center justify-center">
		<NavigationMenuList>
			<NavigationMenuItem>
				<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
				<NavigationMenuContent>
					<ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
						<li class="row-span-3">
							<NavigationMenuLink href="/">
								<div
									class="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
								>
									<div class="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
									<p class="text-muted-foreground text-sm leading-tight">
										Beautifully designed components built with Radix UI and Tailwind CSS.
									</p>
								</div>
							</NavigationMenuLink>
						</li>
						<li>
							<NavigationMenuLink
								href="/docs"
								class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
							>
								<div class="text-sm leading-none font-medium">Introduction</div>
								<p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
									Re-usable components built using Radix UI and Tailwind CSS.
								</p>
							</NavigationMenuLink>
						</li>
						<li>
							<NavigationMenuLink
								href="/docs/installation"
								class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
							>
								<div class="text-sm leading-none font-medium">Installation</div>
								<p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
									How to install dependencies and structure your app.
								</p>
							</NavigationMenuLink>
						</li>
						<li>
							<NavigationMenuLink
								href="/docs/typography"
								class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
							>
								<div class="text-sm leading-none font-medium">Typography</div>
								<p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
									Styles for headings, paragraphs, lists...etc
								</p>
							</NavigationMenuLink>
						</li>
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuTrigger>Components</NavigationMenuTrigger>
				<NavigationMenuContent>
					<ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
						{#each components as component}
							<li>
								<NavigationMenuLink
									href={component.href}
									class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
								>
									<div class="text-sm leading-none font-medium">{component.title}</div>
									<p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
										{component.description}
									</p>
								</NavigationMenuLink>
							</li>
						{/each}
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink
					href="/docs"
					class={cn(
						'group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50'
					)}
				>
					Documentation
				</NavigationMenuLink>
			</NavigationMenuItem>
		</NavigationMenuList>
		<NavigationMenuViewport />
	</NavigationMenuRoot>
</Story>

<Story name="Simple">
	<NavigationMenuRoot class="relative z-10 flex max-w-max flex-1 items-center justify-center">
		<NavigationMenuList>
			<NavigationMenuItem>
				<NavigationMenuLink
					href="/"
					class="group bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
				>
					Home
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink
					href="/about"
					class="group bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
				>
					About
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink
					href="/contact"
					class="group bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
				>
					Contact
				</NavigationMenuLink>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenuRoot>
</Story>

<Story name="WithDropdown">
	<NavigationMenuRoot class="relative z-10 flex max-w-max flex-1 items-center justify-center">
		<NavigationMenuList>
			<NavigationMenuItem>
				<NavigationMenuTrigger>Products</NavigationMenuTrigger>
				<NavigationMenuContent>
					<ul class="grid w-[300px] gap-3 p-4">
						<li>
							<NavigationMenuLink
								href="/products/software"
								class="hover:bg-accent hover:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
							>
								<div class="text-sm leading-none font-medium">Software</div>
								<p class="text-muted-foreground text-sm leading-snug">Our software solutions</p>
							</NavigationMenuLink>
						</li>
						<li>
							<NavigationMenuLink
								href="/products/hardware"
								class="hover:bg-accent hover:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
							>
								<div class="text-sm leading-none font-medium">Hardware</div>
								<p class="text-muted-foreground text-sm leading-snug">
									Physical devices and accessories
								</p>
							</NavigationMenuLink>
						</li>
						<li>
							<NavigationMenuLink
								href="/products/services"
								class="hover:bg-accent hover:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
							>
								<div class="text-sm leading-none font-medium">Services</div>
								<p class="text-muted-foreground text-sm leading-snug">Consulting and support</p>
							</NavigationMenuLink>
						</li>
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuTrigger>Resources</NavigationMenuTrigger>
				<NavigationMenuContent>
					<ul class="grid w-[300px] gap-3 p-4">
						<li>
							<NavigationMenuLink
								href="/blog"
								class="hover:bg-accent hover:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
							>
								<div class="text-sm leading-none font-medium">Blog</div>
								<p class="text-muted-foreground text-sm leading-snug">Latest news and articles</p>
							</NavigationMenuLink>
						</li>
						<li>
							<NavigationMenuLink
								href="/docs"
								class="hover:bg-accent hover:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
							>
								<div class="text-sm leading-none font-medium">Documentation</div>
								<p class="text-muted-foreground text-sm leading-snug">Guides and API reference</p>
							</NavigationMenuLink>
						</li>
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink
					href="/pricing"
					class="group bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
				>
					Pricing
				</NavigationMenuLink>
			</NavigationMenuItem>
		</NavigationMenuList>
		<NavigationMenuViewport />
	</NavigationMenuRoot>
</Story>
