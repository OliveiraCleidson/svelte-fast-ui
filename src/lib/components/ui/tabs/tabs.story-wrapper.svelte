<script lang="ts">
	import * as Tabs from './index.js';
	import * as Card from '../card/index.js';
	import { Button } from '../button/index.js';
	import { Input } from '../input/index.js';
	import { Label } from '../label/index.js';

	let {
		variant = 'default'
	}: {
		variant?:
			| 'default'
			| 'playground'
			| 'simple'
			| 'with-disabled'
			| 'full-width'
			| 'settings'
			| 'dashboard-tabs';
	} = $props();
</script>

{#if variant === 'default' || variant === 'playground'}
	<div class="-mb-4 flex w-full max-w-sm flex-col gap-6">
		<Tabs.Root value="account">
			<Tabs.List>
				<Tabs.Trigger value="account">Account</Tabs.Trigger>
				<Tabs.Trigger value="password">Password</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="account">
				<Card.Root>
					<Card.Header>
						<Card.Title>Account</Card.Title>
						<Card.Description>
							Make changes to your account here. Click save when you're done.
						</Card.Description>
					</Card.Header>
					<Card.Content class="grid gap-6">
						<div class="grid gap-3">
							<Label for="tabs-demo-name">Name</Label>
							<Input id="tabs-demo-name" value="Caio Oliveira" />
						</div>
						<div class="grid gap-3">
							<Label for="tabs-demo-username">Username</Label>
							<Input id="tabs-demo-username" value="@arqcaio" />
						</div>
					</Card.Content>
					<Card.Footer>
						<Button>Save changes</Button>
					</Card.Footer>
				</Card.Root>
			</Tabs.Content>
			<Tabs.Content value="password">
				<Card.Root>
					<Card.Header>
						<Card.Title>Password</Card.Title>
						<Card.Description>
							Change your password here. After saving, you'll be logged out.
						</Card.Description>
					</Card.Header>
					<Card.Content class="grid gap-6">
						<div class="grid gap-3">
							<Label for="tabs-demo-current">Current password</Label>
							<Input id="tabs-demo-current" type="password" />
						</div>
						<div class="grid gap-3">
							<Label for="tabs-demo-new">New password</Label>
							<Input id="tabs-demo-new" type="password" />
						</div>
					</Card.Content>
					<Card.Footer>
						<Button>Save password</Button>
					</Card.Footer>
				</Card.Root>
			</Tabs.Content>
		</Tabs.Root>
	</div>
{:else if variant === 'simple'}
	<Tabs.Root value="tab1" class="w-[400px]">
		<Tabs.List>
			<Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
			<Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
			<Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="tab1" class="p-4">
			<p>Content for Tab 1</p>
		</Tabs.Content>
		<Tabs.Content value="tab2" class="p-4">
			<p>Content for Tab 2</p>
		</Tabs.Content>
		<Tabs.Content value="tab3" class="p-4">
			<p>Content for Tab 3</p>
		</Tabs.Content>
	</Tabs.Root>
{:else if variant === 'with-disabled'}
	<Tabs.Root value="tab1" class="w-[400px]">
		<Tabs.List>
			<Tabs.Trigger value="tab1">Active</Tabs.Trigger>
			<Tabs.Trigger value="tab2">Another</Tabs.Trigger>
			<Tabs.Trigger value="tab3" disabled>Disabled</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="tab1" class="p-4">
			<p>This tab is active.</p>
		</Tabs.Content>
		<Tabs.Content value="tab2" class="p-4">
			<p>Another tab content.</p>
		</Tabs.Content>
	</Tabs.Root>
{:else if variant === 'full-width'}
	<Tabs.Root value="overview" class="w-full max-w-2xl">
		<Tabs.List class="w-full">
			<Tabs.Trigger value="overview" class="flex-1">Overview</Tabs.Trigger>
			<Tabs.Trigger value="analytics" class="flex-1">Analytics</Tabs.Trigger>
			<Tabs.Trigger value="reports" class="flex-1">Reports</Tabs.Trigger>
			<Tabs.Trigger value="notifications" class="flex-1">Notifications</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="overview" class="p-4">
			<p class="text-muted-foreground">Overview content goes here.</p>
		</Tabs.Content>
		<Tabs.Content value="analytics" class="p-4">
			<p class="text-muted-foreground">Analytics content goes here.</p>
		</Tabs.Content>
		<Tabs.Content value="reports" class="p-4">
			<p class="text-muted-foreground">Reports content goes here.</p>
		</Tabs.Content>
		<Tabs.Content value="notifications" class="p-4">
			<p class="text-muted-foreground">Notifications content goes here.</p>
		</Tabs.Content>
	</Tabs.Root>
{:else if variant === 'settings'}
	<Tabs.Root value="general" class="w-full max-w-lg">
		<Tabs.List>
			<Tabs.Trigger value="general">General</Tabs.Trigger>
			<Tabs.Trigger value="security">Security</Tabs.Trigger>
			<Tabs.Trigger value="billing">Billing</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="general" class="space-y-4 pt-4">
			<div class="space-y-1">
				<Label>Display Name</Label>
				<Input placeholder="Enter your name" />
			</div>
			<div class="space-y-1">
				<Label>Email</Label>
				<Input type="email" placeholder="Enter your email" />
			</div>
			<Button>Save Changes</Button>
		</Tabs.Content>
		<Tabs.Content value="security" class="space-y-4 pt-4">
			<div class="space-y-1">
				<Label>Current Password</Label>
				<Input type="password" />
			</div>
			<div class="space-y-1">
				<Label>New Password</Label>
				<Input type="password" />
			</div>
			<Button>Update Password</Button>
		</Tabs.Content>
		<Tabs.Content value="billing" class="pt-4">
			<p class="text-muted-foreground">Billing information will appear here.</p>
		</Tabs.Content>
	</Tabs.Root>
{:else if variant === 'dashboard-tabs'}
	<div class="w-full max-w-2xl rounded-lg border p-4">
		<Tabs.Root value="week">
			<div class="mb-4 flex items-center justify-between">
				<h3 class="text-lg font-semibold">Analytics</h3>
				<Tabs.List>
					<Tabs.Trigger value="day">Day</Tabs.Trigger>
					<Tabs.Trigger value="week">Week</Tabs.Trigger>
					<Tabs.Trigger value="month">Month</Tabs.Trigger>
					<Tabs.Trigger value="year">Year</Tabs.Trigger>
				</Tabs.List>
			</div>
			<Tabs.Content value="day">
				<div class="bg-muted flex h-[200px] items-center justify-center rounded">
					<p class="text-muted-foreground">Daily chart data</p>
				</div>
			</Tabs.Content>
			<Tabs.Content value="week">
				<div class="bg-muted flex h-[200px] items-center justify-center rounded">
					<p class="text-muted-foreground">Weekly chart data</p>
				</div>
			</Tabs.Content>
			<Tabs.Content value="month">
				<div class="bg-muted flex h-[200px] items-center justify-center rounded">
					<p class="text-muted-foreground">Monthly chart data</p>
				</div>
			</Tabs.Content>
			<Tabs.Content value="year">
				<div class="bg-muted flex h-[200px] items-center justify-center rounded">
					<p class="text-muted-foreground">Yearly chart data</p>
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</div>
{/if}
