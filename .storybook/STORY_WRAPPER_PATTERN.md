# Story Wrapper Pattern

## Visão Geral

O **Story Wrapper Pattern** é uma prática para gerenciar componentes complexos no Storybook. Consiste em criar um componente wrapper dedicado que encapsula a lógica e estrutura do componente, permitindo que o arquivo de stories fique limpo e declarativo.

## Quando Usar

Use este padrão quando o componente:

- Requer snippets (`{#snippet children(...)}`) para renderização
- Tem estrutura de composição complexa (múltiplos sub-componentes)
- Precisa de lógica ou estado interno para funcionar
- Tem markup repetitivo que seria duplicado em cada story

## Estrutura

```
component/
├── component.svelte           # Componente principal
├── component.stories.svelte   # Stories (limpo e declarativo)
├── component.story-wrapper.svelte  # Wrapper exclusivo para Storybook
└── index.ts                   # Exports
```

## Exemplo: Pagination

### Sem Wrapper (problema)

```svelte
<!-- pagination.stories.svelte - RUIM: repetitivo e verboso -->
<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Pagination from './index.js';
	import Root from './pagination.svelte';

	const { Story } = defineMeta({
		title: 'UI/Layout/Pagination',
		component: Root,
		tags: ['autodocs']
	});
</script>

<Story name="Playground">
	<Pagination.Root count={30} page={2}>
		{#snippet children({ pages, currentPage })}
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.Previous />
				</Pagination.Item>
				{#each pages as page (page.key)}
					{#if page.type === 'ellipsis'}
						<Pagination.Item>
							<Pagination.Ellipsis />
						</Pagination.Item>
					{:else}
						<Pagination.Item>
							<Pagination.Link {page} isActive={currentPage === page.value}>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}
				<Pagination.Item>
					<Pagination.Next />
				</Pagination.Item>
			</Pagination.Content>
		{/snippet}
	</Pagination.Root>
</Story>

<!-- Cada story repete TODO o markup acima... -->
```

**Problemas:**

- Markup repetido em cada story
- Valores hardcoded não respondem aos controles do Storybook
- Arquivo extenso e difícil de manter
- Alterações requerem edição em múltiplos lugares

### Com Wrapper (solução)

**1. Criar o Wrapper:**

```svelte
<!-- pagination.story-wrapper.svelte -->
<script lang="ts">
	import * as Pagination from './index.js';

	let { count = 30, page = 1, perPage = 10 } = $props();
</script>

<Pagination.Root {count} {perPage} bind:page>
	{#snippet children({ pages, currentPage })}
		<Pagination.Content>
			<Pagination.Item>
				<Pagination.Previous />
			</Pagination.Item>

			{#each pages as pageItem (pageItem.key)}
				{#if pageItem.type === 'ellipsis'}
					<Pagination.Item>
						<Pagination.Ellipsis />
					</Pagination.Item>
				{:else}
					<Pagination.Item>
						<Pagination.Link page={pageItem} isActive={currentPage === pageItem.value}>
							{pageItem.value}
						</Pagination.Link>
					</Pagination.Item>
				{/if}
			{/each}

			<Pagination.Item>
				<Pagination.Next />
			</Pagination.Item>
		</Pagination.Content>
	{/snippet}
</Pagination.Root>
```

**2. Stories Limpas:**

```svelte
<!-- pagination.stories.svelte -->
<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './pagination.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Layout/Pagination',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			count: { control: 'number' },
			page: { control: 'number' },
			perPage: { control: 'number' }
		}
	});
</script>

<Story
	name="Playground"
	args={{
		count: 30,
		page: 2,
		perPage: 10
	}}
/>

<Story
	name="ManyPages"
	args={{
		count: 500,
		page: 25,
		perPage: 10
	}}
/>
```

## Benefícios

| Aspecto             | Sem Wrapper   | Com Wrapper |
| ------------------- | ------------- | ----------- |
| Linhas de código    | ~250+         | ~70         |
| Repetição           | Alta          | Nenhuma     |
| Controles Storybook | Não funcionam | Funcionam   |
| Manutenção          | Difícil       | Fácil       |
| Legibilidade        | Baixa         | Alta        |

## Convenções

1. **Nomenclatura:** `{component}.story-wrapper.svelte`
2. **Localização:** Mesmo diretório do componente
3. **Props:** Expor apenas props relevantes para demonstração
4. **Bindings:** Usar `bind:` para props que precisam de interatividade
5. **Não exportar:** O wrapper é exclusivo para Storybook, não incluir no `index.ts`

## Checklist

- [ ] Componente tem estrutura complexa ou snippets?
- [ ] Markup seria repetido em múltiplas stories?
- [ ] Controles do Storybook precisam funcionar?
- [ ] → Criar um story wrapper!
