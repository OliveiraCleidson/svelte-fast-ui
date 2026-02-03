# svelte-fast-ui

A fast, modern UI component library for **Svelte 5** and **SvelteKit**, built with **Tailwind CSS v4**.

[![npm version](https://img.shields.io/npm/v/@olivdev/svelte-fast-ui.svg)](https://www.npmjs.com/package/@olivdev/svelte-fast-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **Svelte 5** - Built with runes and the latest Svelte features
- **Tailwind CSS v4** - CSS-first configuration with design tokens
- **58+ Components** - Comprehensive set of UI primitives and composites
- **Design Tokens** - Layered architecture (primitives, semantic, components) for easy theming
- **Accessible** - Built on top of bits-ui headless components
- **Dark Mode** - Built-in light/dark mode support
- **Storybook** - Interactive component documentation

## Installation

```bash
npm install @olivdev/svelte-fast-ui
```

### Peer Dependencies

```bash
npm install svelte@^5.0.0 tailwindcss@^4.0.0 @lucide/svelte tw-animate-css
```

## Setup

### 1. Configure Vite

Add the Tailwind CSS plugin to your `vite.config.ts`:

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()]
});
```

### 2. Configure CSS

Create or update your main CSS file (e.g., `src/app.css`):

```css
@import 'tailwindcss';
@import 'tw-animate-css';
@import '@olivdev/svelte-fast-ui/tokens/theme';
@source '../node_modules/@olivdev/svelte-fast-ui/dist';
```

> **Why `@source`?** Tailwind CSS v4 only scans your local source files for class names by default. The `@source` directive tells Tailwind to also scan the library's component files, so it generates all the CSS utility classes the components use (like `bg-primary`, `rounded-md`, etc.). Without it, components render without styling.

The `tokens/theme` import includes everything you need:

- **Primitive tokens** - Raw color values, radius scale
- **Semantic tokens** - Design decisions (`--primary`, `--background`, etc.)
- **Component tokens** - Component-specific variables
- **Tailwind theme bridge** - Maps CSS variables to Tailwind's `@theme` system
- **Base styles** - Border color defaults and body background/foreground

### 3. Import the CSS in your layout

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}
```

Optionally, apply a built-in theme after the main import:

```css
@import '@olivdev/svelte-fast-ui/tokens/theme';
@import '@olivdev/svelte-fast-ui/tokens/themes/indigo-enterprise';
```

## Usage

### Importing Components

```svelte
<script lang="ts">
	import { Button } from '@olivdev/svelte-fast-ui/components/ui/button';
	import * as Card from '@olivdev/svelte-fast-ui/components/ui/card';
	import { Input } from '@olivdev/svelte-fast-ui/components/ui/input';
	import { Badge } from '@olivdev/svelte-fast-ui/components/ui/badge';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Welcome</Card.Title>
		<Card.Description>Get started with svelte-fast-ui</Card.Description>
	</Card.Header>
	<Card.Content>
		<Input placeholder="Enter your name" />
		<div class="mt-4 flex gap-2">
			<Button>Submit</Button>
			<Button variant="outline">Cancel</Button>
			<Badge variant="secondary">New</Badge>
		</div>
	</Card.Content>
</Card.Root>
```

### Using Utilities

```typescript
import { cn } from '@olivdev/svelte-fast-ui/utils';

const className = cn(
	'base-class',
	isActive && 'active-class',
	variant === 'primary' && 'primary-class'
);
```

### Using Hooks

```svelte
<script lang="ts">
	import { IsMobile } from '@olivdev/svelte-fast-ui/hooks/is-mobile.svelte';
	import { UseClipboard } from '@olivdev/svelte-fast-ui/hooks/use-clipboard.svelte';

	const isMobile = new IsMobile();
	const clipboard = new UseClipboard();
</script>

{#if isMobile.current}
	<p>You are on a mobile device</p>
{/if}

<button onclick={() => clipboard.copy('Hello!')}>
	{clipboard.copied ? 'Copied!' : 'Copy'}
</button>
```

### Using Sortable (Drag and Drop)

```svelte
<script lang="ts">
	import { SortableList } from '@olivdev/svelte-fast-ui/sortable';

	let items = $state([
		{ id: '1', name: 'Item 1' },
		{ id: '2', name: 'Item 2' },
		{ id: '3', name: 'Item 3' }
	]);
</script>

<SortableList
	{items}
	onMove={(info) => {
		/* Reorder items */
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
| **Inputs**     | Input, InputGroup, InputOTP, Textarea, Checkbox, RadioGroup, Select, NativeSelect, Slider, Switch   |
| **Layout**     | Card, Separator, Tabs, Accordion, Collapsible, Resizable                                            |
| **Navigation** | Breadcrumb, Pagination, NavigationMenu, Menubar, Sidebar                                            |
| **Overlays**   | Dialog, AlertDialog, Drawer, Sheet, Popover, HoverCard, Tooltip, DropdownMenu, ContextMenu, Command |
| **Feedback**   | Alert, Badge, Progress, Skeleton, Spinner, Sonner (toasts)                                          |
| **Data**       | Table, DataTable, Calendar, RangeCalendar, Chart                                                    |
| **Others**     | Avatar, AspectRatio, Carousel, Empty, Field, Form, Item, Kanban, Kbd, Label, ScrollArea, Typography |

## Theming

The library uses a layered design token architecture:

### Token Layers

1. **Primitives** (`primitives.css`) - Raw values. Should not be overridden.

   ```css
   --primitive-neutral-950: oklch(0.145 0 0);
   --primitive-red-500: oklch(0.577 0.245 27.325);
   ```

2. **Semantic** (`semantic.css`) - Design decisions. Can be overridden by themes.

   ```css
   --primary: var(--primitive-neutral-900);
   --destructive: var(--primitive-red-500);
   ```

3. **Components** (`components.css`) - Component-specific tokens. Reference semantic tokens.

   ```css
   --button-default-bg: var(--primary);
   --badge-destructive-bg: var(--destructive);
   ```

### Custom Theme

Override semantic tokens in your app CSS after the library import:

```css
@import 'tailwindcss';
@import '@olivdev/svelte-fast-ui/tokens/theme';
@source '../node_modules/@olivdev/svelte-fast-ui/dist';

:root {
	--primary: oklch(0.5 0.2 260);
	--primary-foreground: oklch(1 0 0);
}

.dark {
	--primary: oklch(0.7 0.15 260);
}
```

### Importing Token Layers Individually

```css
@import '@olivdev/svelte-fast-ui/tokens/primitives.css';
@import '@olivdev/svelte-fast-ui/tokens/semantic.css';
@import '@olivdev/svelte-fast-ui/tokens/components.css';
```

## Optional Peer Dependencies

Most peer dependencies are optional and only needed if you use specific components:

```bash
# Form handling
npm install formsnap sveltekit-superforms zod

# Calendar
npm install @internationalized/date

# Data tables
npm install @tanstack/table-core

# Charts
npm install layerchart

# Carousel
npm install embla-carousel-svelte

# Drag and drop
npm install sortablejs @types/sortablejs

# Dark mode
npm install mode-watcher

# Resizable panels
npm install paneforge

# Drawer
npm install vaul-svelte

# Toasts
npm install svelte-sonner
```

## Examples

See the [`examples/`](./examples/) directory for working example applications:

- **[sveltekit-app](./examples/sveltekit-app/)** - Basic SvelteKit app consuming the package from npm

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

| Library                         | Purpose             |
| ------------------------------- | ------------------- |
| bits-ui                         | Headless components |
| tailwind-variants               | Style variants      |
| layerchart                      | Charts              |
| @tanstack/table-core            | Data tables         |
| formsnap + sveltekit-superforms | Form handling       |
| svelte-sonner                   | Toast notifications |
| mode-watcher                    | Light/dark theme    |
| sortablejs                      | Drag and drop       |

## License

MIT © [Cleidson Oliveira](https://github.com/OliveiraCleidson)
