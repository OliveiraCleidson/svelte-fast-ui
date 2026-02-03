<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Field from './index.js';
	import * as Select from '../select/index.js';
	import FieldComponent from './field.svelte';
	import { Input } from '../input/index.js';
	import { Textarea } from '../textarea/index.js';
	import { Checkbox } from '../checkbox/index.js';
	import { Switch } from '../switch/index.js';
	import { Button } from '../button/index.js';

	const { Story } = defineMeta({
		title: 'UI/Layout/Field',
		component: FieldComponent,
		tags: ['autodocs']
	});
</script>

<Story name="Playground">
	<div class="w-full max-w-md">
		<form>
			<Field.Group>
				<Field.Set>
					<Field.Legend>Payment Method</Field.Legend>
					<Field.Description>All transactions are secure and encrypted</Field.Description>
					<Field.Group>
						<Field.Field>
							<Field.Label for="card-name">Name on Card</Field.Label>
							<Input id="card-name" placeholder="John Doe" required />
						</Field.Field>
						<div class="grid grid-cols-3 gap-4">
							<Field.Field class="col-span-2">
								<Field.Label for="card-number">Card Number</Field.Label>
								<Input id="card-number" placeholder="1234 5678 9012 3456" required />
								<Field.Description>Enter your 16-digit number.</Field.Description>
							</Field.Field>
							<Field.Field class="col-span-1">
								<Field.Label for="cvv">CVV</Field.Label>
								<Input id="cvv" placeholder="123" required />
							</Field.Field>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<Field.Field>
								<Field.Label for="exp-month">Month</Field.Label>
								<Select.Root type="single">
									<Select.Trigger id="exp-month">
										<span>MM</span>
									</Select.Trigger>
									<Select.Content>
										<Select.Item value="01">01</Select.Item>
										<Select.Item value="02">02</Select.Item>
										<Select.Item value="03">03</Select.Item>
										<Select.Item value="04">04</Select.Item>
										<Select.Item value="05">05</Select.Item>
										<Select.Item value="06">06</Select.Item>
										<Select.Item value="07">07</Select.Item>
										<Select.Item value="08">08</Select.Item>
										<Select.Item value="09">09</Select.Item>
										<Select.Item value="10">10</Select.Item>
										<Select.Item value="11">11</Select.Item>
										<Select.Item value="12">12</Select.Item>
									</Select.Content>
								</Select.Root>
							</Field.Field>
							<Field.Field>
								<Field.Label for="exp-year">Year</Field.Label>
								<Select.Root type="single">
									<Select.Trigger id="exp-year">
										<span>YYYY</span>
									</Select.Trigger>
									<Select.Content>
										<Select.Item value="2024">2024</Select.Item>
										<Select.Item value="2025">2025</Select.Item>
										<Select.Item value="2026">2026</Select.Item>
										<Select.Item value="2027">2027</Select.Item>
										<Select.Item value="2028">2028</Select.Item>
										<Select.Item value="2029">2029</Select.Item>
									</Select.Content>
								</Select.Root>
							</Field.Field>
						</div>
					</Field.Group>
				</Field.Set>
				<Field.Separator />
				<Field.Set>
					<Field.Legend>Billing Address</Field.Legend>
					<Field.Description
						>The billing address associated with your payment method</Field.Description
					>
					<Field.Group>
						<Field.Field orientation="horizontal">
							<Checkbox id="same-as-shipping" checked={true} />
							<Field.Label for="same-as-shipping" class="font-normal">
								Same as shipping address
							</Field.Label>
						</Field.Field>
					</Field.Group>
				</Field.Set>
				<Field.Separator />
				<Field.Set>
					<Field.Group>
						<Field.Field>
							<Field.Label for="comments">Comments</Field.Label>
							<Textarea
								id="comments"
								placeholder="Add any additional comments"
								class="resize-none"
							/>
						</Field.Field>
					</Field.Group>
				</Field.Set>
				<Field.Field orientation="horizontal">
					<Button type="submit">Submit</Button>
					<Button variant="outline" type="button">Cancel</Button>
				</Field.Field>
			</Field.Group>
		</form>
	</div>
</Story>

<Story name="Default">
	<Field.Field class="w-full max-w-sm">
		<Field.Label>Username</Field.Label>
		<Field.Content>
			<Input placeholder="Enter username" />
		</Field.Content>
	</Field.Field>
</Story>

<Story name="WithDescription">
	<Field.Field class="w-full max-w-sm">
		<Field.Label>Email</Field.Label>
		<Field.Content>
			<Input type="email" placeholder="email@example.com" />
		</Field.Content>
		<Field.Description>This email will be used for account notifications.</Field.Description>
	</Field.Field>
</Story>

<Story name="WithError">
	<Field.Field class="w-full max-w-sm">
		<Field.Label>Password</Field.Label>
		<Field.Content>
			<Input type="password" placeholder="Enter password" class="border-destructive" />
		</Field.Content>
		<Field.Error>Password must be at least 8 characters.</Field.Error>
	</Field.Field>
</Story>

<Story name="WithTextarea">
	<Field.Field class="w-full max-w-sm">
		<Field.Label>Bio</Field.Label>
		<Field.Content>
			<Textarea placeholder="Tell us about yourself..." />
		</Field.Content>
		<Field.Description>Max 500 characters.</Field.Description>
	</Field.Field>
</Story>

<Story name="FieldSet">
	<Field.Set class="w-full max-w-md">
		<Field.Legend>Personal Information</Field.Legend>
		<Field.Field>
			<Field.Label>Full Name</Field.Label>
			<Field.Content>
				<Input placeholder="John Doe" />
			</Field.Content>
		</Field.Field>
		<Field.Field>
			<Field.Label>Email</Field.Label>
			<Field.Content>
				<Input type="email" placeholder="john@example.com" />
			</Field.Content>
		</Field.Field>
		<Field.Field>
			<Field.Label>Phone</Field.Label>
			<Field.Content>
				<Input type="tel" placeholder="+1 (555) 000-0000" />
			</Field.Content>
		</Field.Field>
	</Field.Set>
</Story>

<Story name="FieldGroup">
	<Field.Group class="w-full max-w-md">
		<Field.Title>Notification Settings</Field.Title>
		<Field.Description>Configure how you want to receive notifications.</Field.Description>
		<Field.Separator />
		<Field.Field class="flex items-center justify-between">
			<div>
				<Field.Label>Email notifications</Field.Label>
				<Field.Description>Receive updates via email</Field.Description>
			</div>
			<Field.Content>
				<Switch />
			</Field.Content>
		</Field.Field>
		<Field.Field class="flex items-center justify-between">
			<div>
				<Field.Label>Push notifications</Field.Label>
				<Field.Description>Receive updates on your device</Field.Description>
			</div>
			<Field.Content>
				<Switch />
			</Field.Content>
		</Field.Field>
	</Field.Group>
</Story>

<Story name="FormExample">
	<form class="w-full max-w-md space-y-6">
		<Field.Set>
			<Field.Legend>Account Details</Field.Legend>
			<Field.Field>
				<Field.Label>Username</Field.Label>
				<Field.Content>
					<Input placeholder="johndoe" />
				</Field.Content>
				<Field.Description>This will be your public display name.</Field.Description>
			</Field.Field>
			<Field.Field>
				<Field.Label>Email</Field.Label>
				<Field.Content>
					<Input type="email" placeholder="john@example.com" />
				</Field.Content>
			</Field.Field>
		</Field.Set>

		<Field.Separator />

		<Field.Set>
			<Field.Legend>Security</Field.Legend>
			<Field.Field>
				<Field.Label>Password</Field.Label>
				<Field.Content>
					<Input type="password" />
				</Field.Content>
				<Field.Description>At least 8 characters with one number.</Field.Description>
			</Field.Field>
			<Field.Field>
				<Field.Label>Confirm Password</Field.Label>
				<Field.Content>
					<Input type="password" />
				</Field.Content>
			</Field.Field>
		</Field.Set>

		<Field.Field class="flex items-start gap-2">
			<Field.Content class="mt-1">
				<Checkbox />
			</Field.Content>
			<div>
				<Field.Label>I agree to the terms and conditions</Field.Label>
				<Field.Description>
					By checking this, you agree to our Terms of Service and Privacy Policy.
				</Field.Description>
			</div>
		</Field.Field>

		<Button type="submit" class="w-full">Create Account</Button>
	</form>
</Story>

<Story name="SettingsForm">
	<div class="w-full max-w-lg space-y-6">
		<Field.Group>
			<Field.Title>Profile</Field.Title>
			<Field.Description>Manage your public profile information.</Field.Description>
			<Field.Separator />
			<Field.Field>
				<Field.Label>Display Name</Field.Label>
				<Field.Content>
					<Input placeholder="Your name" />
				</Field.Content>
			</Field.Field>
			<Field.Field>
				<Field.Label>Bio</Field.Label>
				<Field.Content>
					<Textarea placeholder="A short bio about yourself" />
				</Field.Content>
				<Field.Description>This will appear on your public profile.</Field.Description>
			</Field.Field>
		</Field.Group>

		<Field.Group>
			<Field.Title>Preferences</Field.Title>
			<Field.Description>Customize your experience.</Field.Description>
			<Field.Separator />
			<Field.Field class="flex items-center justify-between">
				<div>
					<Field.Label>Dark mode</Field.Label>
					<Field.Description>Use dark theme</Field.Description>
				</div>
				<Field.Content>
					<Switch />
				</Field.Content>
			</Field.Field>
			<Field.Field class="flex items-center justify-between">
				<div>
					<Field.Label>Compact view</Field.Label>
					<Field.Description>Show more content on screen</Field.Description>
				</div>
				<Field.Content>
					<Switch />
				</Field.Content>
			</Field.Field>
		</Field.Group>

		<div class="flex justify-end gap-2">
			<Button variant="outline">Cancel</Button>
			<Button>Save Changes</Button>
		</div>
	</div>
</Story>
