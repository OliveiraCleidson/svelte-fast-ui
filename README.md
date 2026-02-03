# svelte-fast-ui

A fast, modern UI component library for **Svelte 5** and **SvelteKit**, built with **Tailwind CSS v4**.

[![npm version](https://img.shields.io/npm/v/svelte-fast-ui.svg)](https://www.npmjs.com/package/svelte-fast-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🚀 **Svelte 5** - Built with the latest Svelte runes and features
- 🎨 **Tailwind CSS v4** - Using the new CSS-first configuration
- 📦 **58+ Components** - Comprehensive set of UI primitives and composites
- 🎭 **Design Tokens** - Layered architecture for easy theming
- ♿ **Accessible** - Built on top of bits-ui headless components
- 📱 **Responsive** - Mobile-first design approach
- 🌙 **Dark Mode** - Built-in dark mode support
- 📚 **Storybook** - Interactive component documentation

## Installation

```bash
# npm
npm install svelte-fast-ui

# pnpm
pnpm add svelte-fast-ui

# bun
bun add svelte-fast-ui
```

### Peer Dependencies

Make sure you have these installed in your project:

```bash
npm install svelte@^5.0.0 tailwindcss@^4.0.0
```

## Setup

### 1. Configure Tailwind CSS

In your main CSS file (e.g., `src/app.css` or `src/routes/layout.css`):

```css
@import 'tailwindcss';
@import 'tw-animate-css';
@import 'svelte-fast-ui/tokens';

/* Required: Scan the library for Tailwind classes */
@source "../node_modules/svelte-fast-ui/dist/**/*.{svelte,js}";

@custom-variant dark (&:is(.dark *));

/* Configure Tailwind theme with design tokens */
@theme inline {
	--radius-sm: calc(var(--radius) - 4px);
	--radius-md: calc(var(--radius) - 2px);
	--radius-lg: var(--radius);
	--radius-xl: calc(var(--radius) + 4px);
	--color-background: var(--background);
	--color-foreground: var(--foreground);
	--color-card: var(--card);
	--color-card-foreground: var(--card-foreground);
	--color-popover: var(--popover);
	--color-popover-foreground: var(--popover-foreground);
	--color-primary: var(--primary);
	--color-primary-foreground: var(--primary-foreground);
	--color-secondary: var(--secondary);
	--color-secondary-foreground: var(--secondary-foreground);
	--color-muted: var(--muted);
	--color-muted-foreground: var(--muted-foreground);
	--color-accent: var(--accent);
	--color-accent-foreground: var(--accent-foreground);
	--color-destructive: var(--destructive);
	--color-destructive-foreground: var(--destructive-foreground);
	--color-success: var(--success);
	--color-success-foreground: var(--success-foreground);
	--color-warning: var(--warning);
	--color-warning-foreground: var(--warning-foreground);
	--color-border: var(--border);
	--color-input: var(--input);
	--color-ring: var(--ring);
	--color-chart-1: var(--chart-1);
	--color-chart-2: var(--chart-2);
	--color-chart-3: var(--chart-3);
	--color-chart-4: var(--chart-4);
	--color-chart-5: var(--chart-5);
	--color-sidebar: var(--sidebar);
	--color-sidebar-foreground: var(--sidebar-foreground);
	--color-sidebar-primary: var(--sidebar-primary);
	--color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
	--color-sidebar-accent: var(--sidebar-accent);
	--color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
	--color-sidebar-border: var(--sidebar-border);
	--color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
	* {
		@apply border-border;
	}
	body {
		@apply bg-background text-foreground;
	}
}
```

### 2. Create a utils file (Required)

Create `src/lib/utils.ts` in your project:

```typescript
// Re-export utils from svelte-fast-ui
// Components reference $lib/utils internally
export * from 'svelte-fast-ui/utils';
```

## Usage

### Importing Components

```svelte
<script lang="ts">
	import { Button } from 'svelte-fast-ui/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from 'svelte-fast-ui/components/ui/card';
	import { Input } from 'svelte-fast-ui/components/ui/input';
</script>

<Card>
	<CardHeader>
		<CardTitle>Welcome</CardTitle>
	</CardHeader>
	<CardContent>
		<Input placeholder="Enter your name" />
		<Button variant="default">Submit</Button>
	</CardContent>
</Card>
```

### Using Utilities

```typescript
import { cn } from 'svelte-fast-ui/utils';

// Combine classes conditionally
const className = cn(
	'base-class',
	isActive && 'active-class',
	variant === 'primary' && 'primary-class'
);
```

### Using Hooks

```svelte
<script lang="ts">
	import { IsMobile } from 'svelte-fast-ui/hooks/is-mobile.svelte';
	import { UseClipboard } from 'svelte-fast-ui/hooks/use-clipboard.svelte';

	const isMobile = new IsMobile();
	const clipboard = new UseClipboard();

	async function copyText() {
		await clipboard.copy('Text copied!');
	}
</script>

{#if isMobile.current}
	<p>You are on a mobile device</p>
{/if}

<button onclick={copyText}>
	{clipboard.copied ? 'Copied!' : 'Copy'}
</button>
```

### Using Sortable (Drag and Drop)

```svelte
<script lang="ts">
	import { SortableList } from 'svelte-fast-ui/sortable';

	let items = $state([
		{ id: '1', name: 'Item 1' },
		{ id: '2', name: 'Item 2' },
		{ id: '3', name: 'Item 3' }
	]);
</script>

<SortableList
	{items}
	onMove={(info) => {
		// Reorder items
	}}
>
	{#each items as item (item.id)}
		<div data-id={item.id}>{item.name}</div>
	{/each}
</SortableList>
```

## Available Components

| Category       | Components                                                                                          |
| -------------- | --------------------------------------------------------------------------------------------------- |
| **Buttons**    | Button, ButtonGroup, Toggle, ToggleGroup                                                            |
| **Inputs**     | Input, InputGroup, InputOTP, Textarea, Checkbox, RadioGroup, Select, NativeSelect, Slider, Switch  |
| **Layout**     | Card, Separator, Tabs, Accordion, Collapsible, Resizable                                            |
| **Navigation** | Breadcrumb, Pagination, NavigationMenu, Menubar, Sidebar                                            |
| **Overlays**   | Dialog, AlertDialog, Drawer, Sheet, Popover, HoverCard, Tooltip, DropdownMenu, ContextMenu, Command |
| **Feedback**   | Alert, Badge, Progress, Skeleton, Spinner, Sonner (toasts)                                          |
| **Data**       | Table, DataTable, Calendar, RangeCalendar, Chart                                                    |
| **Others**     | Avatar, AspectRatio, Carousel, Empty, Field, Form, Item, Kanban, Kbd, Label, ScrollArea, Typography |

## Importing CSS Tokens

Import all tokens:

```css
@import 'svelte-fast-ui/tokens';
```

Or import specific token files:

```css
@import 'svelte-fast-ui/tokens/primitives.css';
@import 'svelte-fast-ui/tokens/semantic.css';
@import 'svelte-fast-ui/tokens/components.css';
```

## Theming

The library uses a layered design token architecture:

### 1. Primitives (`primitives.css`)

Raw values without semantics. **Should not be overridden.**

```css
--primitive-neutral-950: oklch(0.145 0 0);
--primitive-red-500: oklch(0.577 0.245 27.325);
--primitive-radius-lg: 0.625rem;
```

### 2. Semantic (`semantic.css`)

Design decisions. **Can be overridden by themes.**

```css
--background: var(--primitive-neutral-0);
--foreground: var(--primitive-neutral-950);
--primary: var(--primitive-neutral-900);
--destructive: var(--primitive-red-500);
```

### 3. Components (`components.css`)

Component-specific tokens. Reference only semantic tokens.

```css
--button-default-bg: var(--primary);
--button-destructive-bg: var(--destructive);
```

### Customizing the Theme

Override semantic tokens in your app:

```css
/* src/app.css */
@import 'tailwindcss';
@import 'svelte-fast-ui/tokens';

/* Custom theme */
:root {
	--primary: oklch(0.5 0.2 260); /* Blue */
	--primary-foreground: oklch(1 0 0);
}

.dark {
	--primary: oklch(0.7 0.15 260);
}
```

## Optional Dependencies

For form handling with validation, install these optional dependencies:

```bash
npm install formsnap sveltekit-superforms zod
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run Storybook
npm run storybook

# Build package
npm run package

# Run tests
npm run test

# Type check
npm run check

# Lint
npm run lint
```

## Dependencies

| Library                         | Purpose              |
| ------------------------------- | -------------------- |
| bits-ui                         | Headless components  |
| tailwind-variants               | Style variants       |
| layerchart                      | Charts               |
| @tanstack/table-core            | Data tables          |
| formsnap + sveltekit-superforms | Form handling        |
| svelte-sonner                   | Toast notifications  |
| mode-watcher                    | Light/dark theme     |
| sortablejs                      | Drag and drop        |

## License

MIT © [Cleidson Oliveira](https://github.com/OliveiraCleidson)
