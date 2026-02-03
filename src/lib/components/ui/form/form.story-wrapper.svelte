<script lang="ts">
	import { z } from 'zod';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import * as Form from './index.js';
	import { Input } from '../input/index.js';
	import { Textarea } from '../textarea/index.js';
	import { Checkbox } from '../checkbox/index.js';
	import * as Select from '../select/index.js';
	import * as RadioGroup from '../radio-group/index.js';
	import { Switch } from '../switch/index.js';
	import { Slider } from '../slider/index.js';
	import { Spinner } from '../spinner/index.js';
	import { Label } from '../label/index.js';

	let {
		variant = 'default'
	}: {
		variant?: 'default';
	} = $props();

	const formSchema = z.object({
		username: z.string().min(2, 'Username must be at least 2 characters').max(50),
		email: z.string().email('Invalid email address'),
		bio: z.string().min(10, 'Bio must be at least 10 characters').max(160),
		role: z.enum(['admin', 'user', 'guest'], { message: 'Please select a role' }),
		experience: z.enum(['junior', 'mid', 'senior'], {
			message: 'Please select experience level'
		}),
		newsletter: z.boolean().default(false),
		notifications: z.boolean().default(true),
		satisfaction: z.number().min(0).max(100).default(50)
	});

	let isSubmitting = $state(false);

	const initialData = {
		username: '',
		email: '',
		bio: '',
		role: '' as 'admin' | 'user' | 'guest' | '',
		experience: '' as 'junior' | 'mid' | 'senior' | '',
		newsletter: false,
		notifications: true,
		satisfaction: 50
	};

	const form = superForm(defaults(initialData, zod4(formSchema)), {
		SPA: true,
		validators: zod4(formSchema),
		validationMethod: 'onblur',
		async onUpdate({ form: formResult }) {
			if (formResult.valid) {
				isSubmitting = true;
				// Simulate API call with 2s delay
				await new Promise((resolve) => setTimeout(resolve, 2000));
				console.log('Form submitted successfully:', formResult.data);
				isSubmitting = false;
			}
		}
	});

	const { form: formData, enhance, errors } = form;

	const roleLabels: Record<string, string> = {
		admin: 'Admin',
		user: 'User',
		guest: 'Guest'
	};
</script>

{#if variant === 'default'}
	<form method="POST" use:enhance class="max-w-lg space-y-6">
		<div>
			<h3 class="text-lg font-medium">User Profile</h3>
			<p class="text-muted-foreground text-sm">
				Complete your profile information. All fields are validated with Zod.
			</p>
		</div>

		<!-- Username (Input) -->
		<Form.Field {form} name="username">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Username</Form.Label>
					<Input {...props} bind:value={$formData.username} placeholder="johndoe" />
				{/snippet}
			</Form.Control>
			<Form.Description>Your public display name (2-50 characters).</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<!-- Email (Input type=email) -->
		<Form.Field {form} name="email">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Email</Form.Label>
					<Input
						{...props}
						type="email"
						bind:value={$formData.email}
						placeholder="john@example.com"
					/>
				{/snippet}
			</Form.Control>
			<Form.Description>We'll never share your email.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<!-- Bio (Textarea) -->
		<Form.Field {form} name="bio">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Bio</Form.Label>
					<Textarea
						{...props}
						bind:value={$formData.bio}
						placeholder="Tell us about yourself..."
						rows={3}
					/>
				{/snippet}
			</Form.Control>
			<Form.Description>Brief description (10-160 characters).</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<!-- Role (Select) -->
		<Form.Field {form} name="role">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Role</Form.Label>
					<Select.Root type="single" bind:value={$formData.role}>
						<Select.Trigger {...props}>
							{$formData.role ? roleLabels[$formData.role] : 'Select a role'}
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="admin">Admin</Select.Item>
							<Select.Item value="user">User</Select.Item>
							<Select.Item value="guest">Guest</Select.Item>
						</Select.Content>
					</Select.Root>
				{/snippet}
			</Form.Control>
			<Form.Description>Your access level in the system.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<!-- Experience (RadioGroup) -->
		<Form.Fieldset {form} name="experience">
			<Form.Legend>Experience Level</Form.Legend>
			<RadioGroup.Root bind:value={$formData.experience} class="flex flex-col space-y-2">
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value="junior" id="junior" />
					<Label for="junior" class="font-normal">Junior (0-2 years)</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value="mid" id="mid" />
					<Label for="mid" class="font-normal">Mid-level (2-5 years)</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value="senior" id="senior" />
					<Label for="senior" class="font-normal">Senior (5+ years)</Label>
				</div>
			</RadioGroup.Root>
			<Form.Description>Select your professional experience level.</Form.Description>
			<Form.FieldErrors />
		</Form.Fieldset>

		<!-- Newsletter (Checkbox) -->
		<Form.Field {form} name="newsletter">
			<Form.Control>
				{#snippet children({ props })}
					<div class="flex items-center space-x-2">
						<Checkbox {...props} bind:checked={$formData.newsletter} />
						<Form.Label class="font-normal">Subscribe to newsletter</Form.Label>
					</div>
				{/snippet}
			</Form.Control>
			<Form.Description>Receive weekly updates and tips.</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<!-- Notifications (Switch) -->
		<Form.Field {form} name="notifications">
			<Form.Control>
				{#snippet children({ props })}
					<div class="flex items-center justify-between rounded-lg border p-4">
						<div class="space-y-0.5">
							<Form.Label>Push Notifications</Form.Label>
							<Form.Description>Receive push notifications on your device.</Form.Description>
						</div>
						<Switch {...props} bind:checked={$formData.notifications} />
					</div>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<!-- Satisfaction (Slider) -->
		<Form.Field {form} name="satisfaction">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Satisfaction Level: {$formData.satisfaction}%</Form.Label>
					<Slider
						{...props}
						type="single"
						value={$formData.satisfaction}
						onValueChange={(v: number) => ($formData.satisfaction = v)}
						max={100}
						step={1}
						class="py-4"
					/>
				{/snippet}
			</Form.Control>
			<Form.Description>How satisfied are you with our service?</Form.Description>
			<Form.FieldErrors />
		</Form.Field>

		<!-- Submit Button -->
		<Form.Button disabled={isSubmitting} class="w-full">
			{#if isSubmitting}
				<Spinner class="mr-2" />
				Submitting...
			{:else}
				Submit
			{/if}
		</Form.Button>
	</form>
{/if}
