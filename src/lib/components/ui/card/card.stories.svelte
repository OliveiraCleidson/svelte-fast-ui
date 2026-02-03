<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Card from './index.js';
	import * as Avatar from '../avatar/index.js';
	import Root from './card.svelte';
	import { Button } from '../button/index.js';
	import { Input } from '../input/index.js';
	import { Label } from '../label/index.js';
	import { Switch } from '../switch/index.js';

	const { Story } = defineMeta({
		title: 'UI/Layout/Card',
		component: Root,
		tags: ['autodocs'],
		argTypes: {
			class: {
				control: 'text',
				description: 'Additional CSS classes'
			}
		}
	});
</script>

<Story name="Playground">
	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Title>Login to your account</Card.Title>
			<Card.Description>Enter your email below to login to your account</Card.Description>
			<Card.Action>
				<Button variant="link">Sign Up</Button>
			</Card.Action>
		</Card.Header>
		<Card.Content>
			<form>
				<div class="flex flex-col gap-6">
					<div class="grid gap-2">
						<Label for="email">Email</Label>
						<Input id="email" type="email" placeholder="m@example.com" required />
					</div>
					<div class="grid gap-2">
						<div class="flex items-center">
							<Label for="password">Password</Label>
							<a href="##" class="ms-auto inline-block text-sm underline-offset-4 hover:underline">
								Forgot your password?
							</a>
						</div>
						<Input id="password" type="password" required />
					</div>
				</div>
			</form>
		</Card.Content>
		<Card.Footer class="flex-col gap-2">
			<Button type="submit" class="w-full">Login</Button>
			<Button variant="outline" class="w-full">Login with Google</Button>
		</Card.Footer>
	</Card.Root>
</Story>

<Story name="Default">
	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Title>Create project</Card.Title>
			<Card.Description>Deploy your new project in one-click.</Card.Description>
		</Card.Header>
		<Card.Content>
			<form>
				<div class="grid w-full items-center gap-4">
					<div class="flex flex-col space-y-1.5">
						<Label for="name">Name</Label>
						<Input id="name" placeholder="Name of your project" />
					</div>
				</div>
			</form>
		</Card.Content>
		<Card.Footer class="flex justify-between">
			<Button variant="outline">Cancel</Button>
			<Button>Deploy</Button>
		</Card.Footer>
	</Card.Root>
</Story>

<Story name="Simple">
	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Title>Notifications</Card.Title>
			<Card.Description>You have 3 unread messages.</Card.Description>
		</Card.Header>
	</Card.Root>
</Story>

<Story name="WithContent">
	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Title>Team Members</Card.Title>
			<Card.Description>Invite your team members to collaborate.</Card.Description>
		</Card.Header>
		<Card.Content class="grid gap-4">
			<div class="flex items-center gap-4">
				<Avatar.Root>
					<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex-1">
					<p class="text-sm font-medium">Sofia Davis</p>
					<p class="text-muted-foreground text-sm">sofia@example.com</p>
				</div>
			</div>
			<div class="flex items-center gap-4">
				<Avatar.Root>
					<Avatar.Fallback>JD</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex-1">
					<p class="text-sm font-medium">John Doe</p>
					<p class="text-muted-foreground text-sm">john@example.com</p>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
</Story>

<Story name="WithAction">
	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Title>Push Notifications</Card.Title>
			<Card.Description>Send notifications to device.</Card.Description>
			<Card.Action>
				<Switch />
			</Card.Action>
		</Card.Header>
	</Card.Root>
</Story>

<Story name="WithFooter">
	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Title>Account</Card.Title>
			<Card.Description>Make changes to your account here.</Card.Description>
		</Card.Header>
		<Card.Content class="space-y-4">
			<div class="space-y-1">
				<Label for="username">Username</Label>
				<Input id="username" value="@johndoe" />
			</div>
			<div class="space-y-1">
				<Label for="email">Email</Label>
				<Input id="email" type="email" value="john@example.com" />
			</div>
		</Card.Content>
		<Card.Footer>
			<Button class="w-full">Save changes</Button>
		</Card.Footer>
	</Card.Root>
</Story>

<Story name="Pricing">
	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Title>Pro Plan</Card.Title>
			<Card.Description>Perfect for growing businesses</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="text-4xl font-bold">$29</div>
			<p class="text-muted-foreground text-sm">per month</p>
			<ul class="mt-4 space-y-2 text-sm">
				<li class="flex items-center gap-2">
					<span class="text-green-500">✓</span> Unlimited projects
				</li>
				<li class="flex items-center gap-2">
					<span class="text-green-500">✓</span> Priority support
				</li>
				<li class="flex items-center gap-2">
					<span class="text-green-500">✓</span> Advanced analytics
				</li>
			</ul>
		</Card.Content>
		<Card.Footer>
			<Button class="w-full">Get Started</Button>
		</Card.Footer>
	</Card.Root>
</Story>

<Story name="Stats">
	<div class="grid w-full max-w-2xl grid-cols-3 gap-4">
		<Card.Root>
			<Card.Header>
				<Card.Description>Total Revenue</Card.Description>
				<Card.Title class="text-2xl">$45,231.89</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-muted-foreground text-xs">+20.1% from last month</p>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Description>Subscriptions</Card.Description>
				<Card.Title class="text-2xl">+2,350</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-muted-foreground text-xs">+180.1% from last month</p>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Description>Active Users</Card.Description>
				<Card.Title class="text-2xl">+12,234</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-muted-foreground text-xs">+19% from last month</p>
			</Card.Content>
		</Card.Root>
	</div>
</Story>

<Story name="LoginForm">
	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Title>Login</Card.Title>
			<Card.Description>Enter your credentials to access your account.</Card.Description>
		</Card.Header>
		<Card.Content class="space-y-4">
			<div class="space-y-1">
				<Label for="login-email">Email</Label>
				<Input id="login-email" type="email" placeholder="m@example.com" />
			</div>
			<div class="space-y-1">
				<Label for="login-password">Password</Label>
				<Input id="login-password" type="password" />
			</div>
		</Card.Content>
		<Card.Footer class="flex flex-col gap-2">
			<Button class="w-full">Sign in</Button>
			<p class="text-muted-foreground text-center text-xs">
				Don't have an account? <a href="#" class="underline">Sign up</a>
			</p>
		</Card.Footer>
	</Card.Root>
</Story>
