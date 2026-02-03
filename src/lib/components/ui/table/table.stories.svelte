<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Table,
		TableBody,
		TableCaption,
		TableCell,
		TableFooter,
		TableHead,
		TableHeader,
		TableRow
	} from './index.js';

	const { Story } = defineMeta({
		title: 'UI/Layout/Table',
		component: Table,
		tags: ['autodocs']
	});

	const invoices = [
		{ invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
		{ invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
		{ invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
		{ invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
		{ invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
		{ invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: '$200.00' },
		{ invoice: 'INV007', status: 'Unpaid', method: 'Credit Card', amount: '$300.00' }
	];

	const users = [
		{ id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
		{ id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
		{ id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' }
	];
</script>

<Story name="Playground">
	<Table>
		<TableCaption>A list of your recent invoices.</TableCaption>
		<TableHeader>
			<TableRow>
				<TableHead class="w-[100px]">Invoice</TableHead>
				<TableHead>Status</TableHead>
				<TableHead>Method</TableHead>
				<TableHead class="text-right">Amount</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			{#each invoices as invoice}
				<TableRow>
					<TableCell class="font-medium">{invoice.invoice}</TableCell>
					<TableCell>{invoice.status}</TableCell>
					<TableCell>{invoice.method}</TableCell>
					<TableCell class="text-right">{invoice.amount}</TableCell>
				</TableRow>
			{/each}
		</TableBody>
		<TableFooter>
			<TableRow>
				<TableCell colspan={3}>Total</TableCell>
				<TableCell class="text-right">$2,500.00</TableCell>
			</TableRow>
		</TableFooter>
	</Table>
</Story>

<Story name="Default">
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead>Invoice</TableHead>
				<TableHead>Status</TableHead>
				<TableHead>Method</TableHead>
				<TableHead class="text-right">Amount</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			{#each invoices.slice(0, 5) as invoice}
				<TableRow>
					<TableCell class="font-medium">{invoice.invoice}</TableCell>
					<TableCell>{invoice.status}</TableCell>
					<TableCell>{invoice.method}</TableCell>
					<TableCell class="text-right">{invoice.amount}</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</Story>

<Story name="WithCaption">
	<Table>
		<TableCaption>A list of your recent invoices.</TableCaption>
		<TableHeader>
			<TableRow>
				<TableHead>Invoice</TableHead>
				<TableHead>Status</TableHead>
				<TableHead class="text-right">Amount</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			{#each invoices.slice(0, 3) as invoice}
				<TableRow>
					<TableCell class="font-medium">{invoice.invoice}</TableCell>
					<TableCell>{invoice.status}</TableCell>
					<TableCell class="text-right">{invoice.amount}</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</Story>

<Story name="WithFooter">
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead>Invoice</TableHead>
				<TableHead>Status</TableHead>
				<TableHead class="text-right">Amount</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			{#each invoices.slice(0, 4) as invoice}
				<TableRow>
					<TableCell class="font-medium">{invoice.invoice}</TableCell>
					<TableCell>{invoice.status}</TableCell>
					<TableCell class="text-right">{invoice.amount}</TableCell>
				</TableRow>
			{/each}
		</TableBody>
		<TableFooter>
			<TableRow>
				<TableCell colspan={2}>Total</TableCell>
				<TableCell class="text-right">$1,200.00</TableCell>
			</TableRow>
		</TableFooter>
	</Table>
</Story>

<Story name="UserTable">
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead class="w-[80px]">ID</TableHead>
				<TableHead>Name</TableHead>
				<TableHead>Email</TableHead>
				<TableHead>Role</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			{#each users as user}
				<TableRow>
					<TableCell class="font-medium">{user.id}</TableCell>
					<TableCell>{user.name}</TableCell>
					<TableCell>{user.email}</TableCell>
					<TableCell>
						<span
							class={`rounded-full px-2 py-1 text-xs ${
								user.role === 'Admin'
									? 'bg-red-100 text-red-800'
									: user.role === 'Editor'
										? 'bg-blue-100 text-blue-800'
										: 'bg-gray-100 text-gray-800'
							}`}
						>
							{user.role}
						</span>
					</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</Story>

<Story name="Striped">
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead>Invoice</TableHead>
				<TableHead>Status</TableHead>
				<TableHead class="text-right">Amount</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			{#each invoices as invoice, i}
				<TableRow class={i % 2 === 0 ? 'bg-muted/50' : ''}>
					<TableCell class="font-medium">{invoice.invoice}</TableCell>
					<TableCell>{invoice.status}</TableCell>
					<TableCell class="text-right">{invoice.amount}</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</Story>

<Story name="Compact">
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead class="h-8 text-xs">Invoice</TableHead>
				<TableHead class="h-8 text-xs">Status</TableHead>
				<TableHead class="h-8 text-right text-xs">Amount</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			{#each invoices.slice(0, 5) as invoice}
				<TableRow>
					<TableCell class="py-1 text-xs">{invoice.invoice}</TableCell>
					<TableCell class="py-1 text-xs">{invoice.status}</TableCell>
					<TableCell class="py-1 text-right text-xs">{invoice.amount}</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</Story>

<Story name="EmptyState">
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead>Invoice</TableHead>
				<TableHead>Status</TableHead>
				<TableHead class="text-right">Amount</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			<TableRow>
				<TableCell colspan={3} class="text-muted-foreground h-24 text-center">
					No invoices found.
				</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</Story>
