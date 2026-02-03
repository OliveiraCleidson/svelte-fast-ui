<script lang="ts">
	import * as Accordion from './index.js';

	let {
		variant = 'default'
	}: {
		variant?: 'default' | 'playground' | 'multiple' | 'faq' | 'product-details' | 'settings-panel';
	} = $props();
</script>

{#if variant === 'playground'}
	<Accordion.Root type="single" class="w-full max-w-md" value="item-1">
		<Accordion.Item value="item-1">
			<Accordion.Trigger>Product Information</Accordion.Trigger>
			<Accordion.Content class="flex flex-col gap-4 text-balance">
				<p>
					Our flagship product combines cutting-edge technology with sleek design. Built with
					premium materials, it offers unparalleled performance and reliability.
				</p>
				<p>
					Key features include advanced processing capabilities, and an intuitive user interface
					designed for both beginners and experts.
				</p>
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Trigger>Shipping Details</Accordion.Trigger>
			<Accordion.Content class="flex flex-col gap-4 text-balance">
				<p>
					We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5
					business days, while express shipping ensures delivery within 1-2 business days.
				</p>
				<p>
					All orders are carefully packaged and fully insured. Track your shipment in real-time
					through our dedicated tracking portal.
				</p>
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-3">
			<Accordion.Trigger>Return Policy</Accordion.Trigger>
			<Accordion.Content class="flex flex-col gap-4 text-balance">
				<p>
					We stand behind our products with a comprehensive 30-day return policy. If you're not
					completely satisfied, simply return the item in its original condition.
				</p>
				<p>
					Our hassle-free return process includes free return shipping and full refunds processed
					within 48 hours of receiving the returned item.
				</p>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
{:else if variant === 'default'}
	<Accordion.Root type="single" class="w-full max-w-md">
		<Accordion.Item value="item-1">
			<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
			<Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Trigger>Is it styled?</Accordion.Trigger>
			<Accordion.Content>
				Yes. It comes with default styles that matches the other components' aesthetic.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-3">
			<Accordion.Trigger>Is it animated?</Accordion.Trigger>
			<Accordion.Content>
				Yes. It's animated by default, but you can disable it if you prefer.
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
{:else if variant === 'multiple'}
	<Accordion.Root type="multiple" class="w-full max-w-md" value={['item-1', 'item-2']}>
		<Accordion.Item value="item-1">
			<Accordion.Trigger>Can I open multiple items?</Accordion.Trigger>
			<Accordion.Content>
				Yes! When using type="multiple", you can have multiple items open at once.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-2">
			<Accordion.Trigger>Is this different from single?</Accordion.Trigger>
			<Accordion.Content>
				Yes, the single type only allows one item to be open at a time.
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item value="item-3">
			<Accordion.Trigger>Try opening all three!</Accordion.Trigger>
			<Accordion.Content>
				You can open all three items simultaneously with the multiple type.
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
{:else if variant === 'faq'}
	<div class="w-full max-w-lg">
		<h2 class="mb-4 text-xl font-semibold">Frequently Asked Questions</h2>
		<Accordion.Root type="single" value="shipping">
			<Accordion.Item value="shipping">
				<Accordion.Trigger>What are your shipping options?</Accordion.Trigger>
				<Accordion.Content>
					We offer free standard shipping on orders over $50. Express shipping is available for an
					additional fee. Orders typically arrive within 3-5 business days for standard shipping and
					1-2 business days for express shipping.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="returns">
				<Accordion.Trigger>What is your return policy?</Accordion.Trigger>
				<Accordion.Content>
					We accept returns within 30 days of purchase. Items must be in their original condition
					with tags attached. Refunds are processed within 5-7 business days after we receive the
					returned item.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="payment">
				<Accordion.Trigger>What payment methods do you accept?</Accordion.Trigger>
				<Accordion.Content>
					We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay,
					and Google Pay. All transactions are secure and encrypted.
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="support">
				<Accordion.Trigger>How can I contact customer support?</Accordion.Trigger>
				<Accordion.Content>
					Our customer support team is available 24/7. You can reach us via email at
					support@example.com, by phone at 1-800-XXX-XXXX, or through our live chat feature on the
					website.
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>
{:else if variant === 'product-details'}
	<div class="w-full max-w-md rounded-lg border p-4">
		<h3 class="mb-4 font-semibold">Product Information</h3>
		<Accordion.Root type="multiple" value={['description']}>
			<Accordion.Item value="description">
				<Accordion.Trigger>Description</Accordion.Trigger>
				<Accordion.Content>
					<p class="text-muted-foreground">
						A premium quality product designed for everyday use. Made with sustainable materials and
						crafted with attention to detail.
					</p>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="specifications">
				<Accordion.Trigger>Specifications</Accordion.Trigger>
				<Accordion.Content>
					<ul class="space-y-1 text-sm text-muted-foreground">
						<li>Dimensions: 10" x 8" x 4"</li>
						<li>Weight: 2.5 lbs</li>
						<li>Material: Recycled Cotton</li>
						<li>Color: Navy Blue</li>
					</ul>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="shipping">
				<Accordion.Trigger>Shipping Info</Accordion.Trigger>
				<Accordion.Content>
					<p class="text-muted-foreground">
						Free shipping on orders over $50. Standard delivery takes 3-5 business days. Express
						shipping available at checkout.
					</p>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>
{:else if variant === 'settings-panel'}
	<div class="w-full max-w-md">
		<Accordion.Root type="single" value="general">
			<Accordion.Item value="general">
				<Accordion.Trigger>General Settings</Accordion.Trigger>
				<Accordion.Content>
					<div class="space-y-3">
						<div class="flex items-center justify-between">
							<span class="text-sm">Language</span>
							<span class="text-sm text-muted-foreground">English</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-sm">Timezone</span>
							<span class="text-sm text-muted-foreground">UTC-5</span>
						</div>
					</div>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="notifications">
				<Accordion.Trigger>Notification Preferences</Accordion.Trigger>
				<Accordion.Content>
					<div class="space-y-3">
						<div class="flex items-center justify-between">
							<span class="text-sm">Email notifications</span>
							<span class="text-sm text-muted-foreground">Enabled</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-sm">Push notifications</span>
							<span class="text-sm text-muted-foreground">Disabled</span>
						</div>
					</div>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="privacy">
				<Accordion.Trigger>Privacy Settings</Accordion.Trigger>
				<Accordion.Content>
					<div class="space-y-3">
						<div class="flex items-center justify-between">
							<span class="text-sm">Profile visibility</span>
							<span class="text-sm text-muted-foreground">Public</span>
						</div>
						<div class="flex items-center justify-between">
							<span class="text-sm">Activity status</span>
							<span class="text-sm text-muted-foreground">Hidden</span>
						</div>
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>
{/if}
