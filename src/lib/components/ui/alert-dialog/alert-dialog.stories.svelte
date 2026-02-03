<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as AlertDialog from './index.js';
	import Root from './alert-dialog.svelte';
	import { buttonVariants } from '../button/index.js';

	const { Story } = defineMeta({
		title: 'UI/Overlays/AlertDialog',
		component: Root,
		tags: ['autodocs']
	});
</script>

<Story name="Playground">
	<AlertDialog.Root>
		<AlertDialog.Trigger class={buttonVariants({ variant: 'outline' })}>
			Show Dialog
		</AlertDialog.Trigger>
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
				<AlertDialog.Description>
					This action cannot be undone. This will permanently delete your account and remove your
					data from our servers.
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
				<AlertDialog.Action>Continue</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Root>
</Story>

<Story name="Default">
	<AlertDialog.Root>
		<AlertDialog.Trigger class={buttonVariants({ variant: 'outline' })}>
			Open Alert
		</AlertDialog.Trigger>
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>Are you sure?</AlertDialog.Title>
				<AlertDialog.Description>This action cannot be undone.</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
				<AlertDialog.Action>Continue</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Root>
</Story>

<Story name="DeleteConfirmation">
	<AlertDialog.Root>
		<AlertDialog.Trigger class={buttonVariants({ variant: 'destructive' })}>
			Delete Account
		</AlertDialog.Trigger>
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>Delete Account</AlertDialog.Title>
				<AlertDialog.Description>
					Are you sure you want to delete your account? All of your data will be permanently
					removed. This action cannot be undone.
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
				<AlertDialog.Action
					class="bg-destructive text-destructive-foreground hover:bg-destructive/90"
				>
					Delete
				</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Root>
</Story>

<Story name="UnsavedChanges">
	<AlertDialog.Root>
		<AlertDialog.Trigger class={buttonVariants({ variant: 'outline' })}>
			Leave Page
		</AlertDialog.Trigger>
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>Unsaved Changes</AlertDialog.Title>
				<AlertDialog.Description>
					You have unsaved changes. Are you sure you want to leave this page? Your changes will be
					lost.
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel>Stay</AlertDialog.Cancel>
				<AlertDialog.Action>Leave</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Root>
</Story>

<Story name="LogoutConfirmation">
	<AlertDialog.Root>
		<AlertDialog.Trigger class={buttonVariants({ variant: 'ghost' })}>Log Out</AlertDialog.Trigger>
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>Log Out</AlertDialog.Title>
				<AlertDialog.Description>
					Are you sure you want to log out? You'll need to sign in again to access your account.
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
				<AlertDialog.Action>Log Out</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Root>
</Story>

<Story name="RemoveItem">
	<AlertDialog.Root>
		<AlertDialog.Trigger class={buttonVariants({ variant: 'outline', size: 'sm' })}>
			Remove
		</AlertDialog.Trigger>
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>Remove Item</AlertDialog.Title>
				<AlertDialog.Description>
					This will remove the item from your cart. You can add it back anytime.
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel>Keep Item</AlertDialog.Cancel>
				<AlertDialog.Action>Remove</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Root>
</Story>

<Story name="PublishPost">
	<AlertDialog.Root>
		<AlertDialog.Trigger class={buttonVariants()}>Publish Post</AlertDialog.Trigger>
		<AlertDialog.Content>
			<AlertDialog.Header>
				<AlertDialog.Title>Publish Post</AlertDialog.Title>
				<AlertDialog.Description>
					Your post will be visible to everyone. Make sure you've reviewed all the content before
					publishing.
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer>
				<AlertDialog.Cancel>Save as Draft</AlertDialog.Cancel>
				<AlertDialog.Action>Publish</AlertDialog.Action>
			</AlertDialog.Footer>
		</AlertDialog.Content>
	</AlertDialog.Root>
</Story>
