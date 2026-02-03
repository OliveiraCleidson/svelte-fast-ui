# CLAUDE.md

This file provides context for AI assistants working with this codebase.

## Project Overview

**@olivdev/svelte-fast-ui** is a UI component library for Svelte 5 + SvelteKit, styled with Tailwind CSS v4. It provides 58+ accessible components built on top of [bits-ui](https://bits-ui.com) (headless primitives), with a layered design token system for theming.

- **Package name:** `@olivdev/svelte-fast-ui`
- **Published to:** npm
- **License:** MIT

## Tech Stack

- **Svelte 5** — uses runes (`$state`, `$derived`, `$props`, `$effect`)
- **SvelteKit** — project scaffolding, `svelte-package` for building the library
- **Tailwind CSS v4** — CSS-first config with `@theme inline` and `@source`
- **TypeScript** — strict mode
- **bits-ui** — headless accessible component primitives
- **tailwind-variants** (`tv()`) — component style variants
- **Vitest** — unit testing
- **Storybook** — component documentation and visual testing

## Repository Structure

```
src/
  lib/
    components/ui/       # 58+ UI components, each in its own folder
      button/            # Example: button.svelte, index.ts
      card/
      ...
    hooks/               # Reactive utilities (IsMobile, UseClipboard)
    sortable/            # Drag-and-drop sortable list system
    tokens/              # Design tokens (CSS)
      primitives.css     # Raw values (colors, radius) — never override
      semantic.css       # Design decisions (--primary, --background) — themeable
      components.css     # Component-specific tokens (--button-default-bg)
      theme.css          # Tailwind bridge — imports all tokens + @theme inline
      themes/            # Pre-built themes (e.g. indigo-enterprise.css)
    utils.ts             # cn() helper (clsx + tailwind-merge)
    index.ts             # Main package exports
  routes/                # Dev/demo app (not published)
examples/
  sveltekit-app/         # Example consumer app using the npm package
dist/                    # Built package output (svelte-package)
```

## Key Architectural Decisions

### Component Pattern

Each component folder contains:

- `component-name.svelte` — the Svelte component
- `index.ts` — re-exports with aliases (e.g., `Root as Card`, `Content as CardContent`)

Components use `tailwind-variants` (`tv()`) for variant definitions and `cn()` for class merging. Props are typed with Svelte 5's `interface Props` pattern and spread with `$props()`.

```svelte
<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { tv, type VariantProps } from 'tailwind-variants';

	const buttonVariants = tv({
		base: '...',
		variants: { variant: { default: '...', destructive: '...' } }
	});

	let { class: className, variant = 'default', ...restProps } = $props();
</script>

<button class={cn(buttonVariants({ variant }), className)} {...restProps}>
	{@render children?.()}
</button>
```

### Design Token System (3 layers)

1. **Primitives** (`primitives.css`) — Raw OKLCH color values and radius scale. Prefixed `--primitive-*`. Never override these.
2. **Semantic** (`semantic.css`) — Maps primitives to design intent (`--primary`, `--background`, `--destructive`). Override these for custom themes. Includes `.dark` variant.
3. **Components** (`components.css`) — Component-level decisions (`--button-default-bg: var(--primary)`). Reference only semantic tokens.

The **theme bridge** (`theme.css`) connects tokens to Tailwind v4 via `@theme inline`:

```css
@theme inline {
	--color-primary: var(--primary);
	--color-background: var(--background);
	/* ... maps all semantic tokens to Tailwind's --color-* namespace */
}
```

### Consumer Setup (Critical)

When consumers use the package, they **must** include a `@source` directive in their CSS:

```css
@import 'tailwindcss';
@import '@olivdev/svelte-fast-ui/tokens/theme';
@source '../node_modules/@olivdev/svelte-fast-ui/dist';
```

Without `@source`, Tailwind v4 won't scan the package's `.svelte` files for class names, and components render without any styling. This is documented in the README.

### Package Exports

The `package.json` exports map allows tree-shakeable imports:

```
@olivdev/svelte-fast-ui                    → main index (utils, hooks, sortable)
@olivdev/svelte-fast-ui/components/ui/*    → individual components
@olivdev/svelte-fast-ui/hooks/*            → reactive hooks
@olivdev/svelte-fast-ui/sortable           → drag-and-drop system
@olivdev/svelte-fast-ui/tokens             → all CSS tokens
@olivdev/svelte-fast-ui/tokens/theme       → full theme bridge (recommended)
@olivdev/svelte-fast-ui/tokens/themes/*    → pre-built themes
@olivdev/svelte-fast-ui/utils              → cn() utility
```

## Commands

```bash
npm run dev          # Start SvelteKit dev server
npm run build        # Build the SvelteKit app
npm run package      # Build the library to dist/ (svelte-package)
npm run storybook    # Start Storybook dev server
npm run test         # Run Vitest tests
npm run check        # svelte-check type checking
npm run lint         # Prettier + ESLint
npm run format       # Prettier --write
```

## CI Pipeline

The CI workflow (`.github/workflows/ci.yml`) runs on Node 18/20/22:

1. `npm ci`
2. `npm run lint`
3. `npm run check`
4. `npm run test`
5. `npm run package`

## Testing

- Tests live alongside source files as `*.spec.ts`
- Tests requiring DOM (e.g., `store.svelte.spec.ts`) use `// @vitest-environment jsdom`
- `dist/` and `.svelte-kit/` are excluded from test collection via `vite.config.ts`

## Conventions

- **Svelte 5 only** — no legacy `$:`, `export let`, `on:event` syntax. Use `$state`, `$derived`, `$props`, `$effect`, `onclick`.
- **OKLCH colors** — all color tokens use `oklch()` format for perceptual uniformity.
- **No `$lib/utils` in dist** — components in `src/` import from `$lib/utils.js`, but `svelte-package` resolves this to relative paths in `dist/`. Consumers do NOT need to create a `src/lib/utils.ts` file.
- **Component imports use namespace pattern** — multi-part components use `import * as Card from '...'` then `<Card.Root>`, `<Card.Header>`, etc.
- **Optional peer dependencies** — most peer deps are optional and only needed for specific components (see `peerDependenciesMeta` in `package.json`).

## Common Pitfalls

1. **Components render without styling** — Consumer forgot `@source` directive. See "Consumer Setup" above.
2. **Type error on `vite.config.ts` `test` property** — Use `import { defineConfig } from 'vitest/config'` instead of `from 'vite'`.
3. **Tests fail with `document is not defined`** — Add `// @vitest-environment jsdom` to test files that use DOM APIs.
4. **Tests run from `dist/` and `.svelte-kit/`** — Exclude these in `vite.config.ts` test config.
