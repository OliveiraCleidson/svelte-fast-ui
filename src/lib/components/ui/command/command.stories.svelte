<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Command from './index.js';
	import Root from './command.svelte';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import SmileIcon from '@lucide/svelte/icons/smile';
	import CalculatorIcon from '@lucide/svelte/icons/calculator';
	import UserIcon from '@lucide/svelte/icons/user';
	import CreditCardIcon from '@lucide/svelte/icons/credit-card';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import FileIcon from '@lucide/svelte/icons/file';
	import MailIcon from '@lucide/svelte/icons/mail';
	import RocketIcon from '@lucide/svelte/icons/rocket';

	const { Story } = defineMeta({
		title: 'UI/Overlays/Command',
		component: Root,
		tags: ['autodocs']
	});
</script>

<Story name="Playground">
	<Command.Root class="rounded-lg border shadow-md md:min-w-[450px]">
		<Command.Input placeholder="Type a command or search..." />
		<Command.List>
			<Command.Empty>No results found.</Command.Empty>
			<Command.Group heading="Suggestions">
				<Command.Item>
					<CalendarIcon />
					<span>Calendar</span>
				</Command.Item>
				<Command.Item>
					<SmileIcon />
					<span>Search Emoji</span>
				</Command.Item>
				<Command.Item disabled>
					<CalculatorIcon />
					<span>Calculator</span>
				</Command.Item>
			</Command.Group>
			<Command.Separator />
			<Command.Group heading="Settings">
				<Command.Item>
					<UserIcon />
					<span>Profile</span>
					<Command.Shortcut>⌘P</Command.Shortcut>
				</Command.Item>
				<Command.Item>
					<CreditCardIcon />
					<span>Billing</span>
					<Command.Shortcut>⌘B</Command.Shortcut>
				</Command.Item>
				<Command.Item>
					<SettingsIcon />
					<span>Settings</span>
					<Command.Shortcut>⌘S</Command.Shortcut>
				</Command.Item>
			</Command.Group>
		</Command.List>
	</Command.Root>
</Story>

<Story name="Default">
	<Command.Root class="rounded-lg border shadow-md">
		<Command.Input placeholder="Search..." />
		<Command.List>
			<Command.Empty>No results found.</Command.Empty>
			<Command.Group>
				<Command.Item>Item 1</Command.Item>
				<Command.Item>Item 2</Command.Item>
				<Command.Item>Item 3</Command.Item>
			</Command.Group>
		</Command.List>
	</Command.Root>
</Story>

<Story name="FileSearch">
	<Command.Root class="rounded-lg border shadow-md">
		<Command.Input placeholder="Search files..." />
		<Command.List>
			<Command.Empty>No files found.</Command.Empty>
			<Command.Group heading="Recent Files">
				<Command.Item>
					<FileIcon />
					<span>README.md</span>
					<span class="ml-auto text-xs text-muted-foreground">2 hours ago</span>
				</Command.Item>
				<Command.Item>
					<FileIcon />
					<span>package.json</span>
					<span class="ml-auto text-xs text-muted-foreground">5 hours ago</span>
				</Command.Item>
				<Command.Item>
					<FileIcon />
					<span>index.ts</span>
					<span class="ml-auto text-xs text-muted-foreground">1 day ago</span>
				</Command.Item>
			</Command.Group>
			<Command.Separator />
			<Command.Group heading="All Files">
				<Command.Item>
					<FileIcon />
					<span>src/components/Button.svelte</span>
				</Command.Item>
				<Command.Item>
					<FileIcon />
					<span>src/lib/utils.ts</span>
				</Command.Item>
			</Command.Group>
		</Command.List>
	</Command.Root>
</Story>

<Story name="ActionCommands">
	<Command.Root class="rounded-lg border shadow-md">
		<Command.Input placeholder="What do you want to do?" />
		<Command.List>
			<Command.Empty>No commands found.</Command.Empty>
			<Command.Group heading="Actions">
				<Command.Item>
					<RocketIcon />
					<span>Deploy to Production</span>
				</Command.Item>
				<Command.Item>
					<MailIcon />
					<span>Send Notification</span>
				</Command.Item>
				<Command.Item>
					<UserIcon />
					<span>Invite Team Member</span>
				</Command.Item>
			</Command.Group>
			<Command.Separator />
			<Command.Group heading="Navigation">
				<Command.Item>
					<span>Go to Dashboard</span>
					<Command.Shortcut>⌘D</Command.Shortcut>
				</Command.Item>
				<Command.Item>
					<span>Go to Settings</span>
					<Command.Shortcut>⌘,</Command.Shortcut>
				</Command.Item>
				<Command.Item>
					<span>Go to Billing</span>
				</Command.Item>
			</Command.Group>
		</Command.List>
	</Command.Root>
</Story>

<Story name="WithGroups">
	<Command.Root class="rounded-lg border shadow-md">
		<Command.Input placeholder="Search everything..." />
		<Command.List>
			<Command.Empty>No results found.</Command.Empty>
			<Command.Group heading="Pages">
				<Command.Item>Home</Command.Item>
				<Command.Item>About</Command.Item>
				<Command.Item>Contact</Command.Item>
			</Command.Group>
			<Command.Separator />
			<Command.Group heading="Blog Posts">
				<Command.Item>Getting Started with Svelte</Command.Item>
				<Command.Item>Advanced TypeScript Patterns</Command.Item>
				<Command.Item>Building a Design System</Command.Item>
			</Command.Group>
			<Command.Separator />
			<Command.Group heading="Projects">
				<Command.Item>Project Alpha</Command.Item>
				<Command.Item>Project Beta</Command.Item>
				<Command.Item>Project Gamma</Command.Item>
			</Command.Group>
		</Command.List>
	</Command.Root>
</Story>
