# 0001. Uso do Storybook para Desenvolvimento de Componentes

Data: 2025-12-23

## Status

Aceito

## Contexto

O Control Plane é uma aplicação SvelteKit com uma biblioteca de componentes UI reutilizáveis. À medida que a quantidade de componentes cresce, surgem desafios:

- Dificuldade em visualizar e testar componentes de forma isolada
- Falta de documentação visual para desenvolvedores
- Complexidade em garantir consistência visual entre componentes
- Necessidade de demonstrar diferentes estados e variantes dos componentes

Precisamos de uma ferramenta que permita desenvolver, documentar e testar componentes UI de forma eficiente.

## Decisão

Adotamos o **Storybook** como ferramenta de desenvolvimento de componentes UI.

### Configuração

- Storybook v10 com `@storybook/sveltekit`
- Addon Svelte CSF (`@storybook/addon-svelte-csf`) para sintaxe nativa Svelte
- Addon de acessibilidade (`@storybook/addon-a11y`)
- Addon de documentação automática (`@storybook/addon-docs`)

### Padrão de Stories

Utilizamos o padrão **wrapper** para organizar variantes:

```svelte
<!-- component.story-wrapper.svelte -->
<script lang="ts">
	let { variant = 'default' } = $props();
</script>

{#if variant === 'default'}
	<!-- variante default -->
{:else if variant === 'sizes'}
	<!-- variante sizes -->
{/if}
```

```svelte
<!-- component.stories.svelte -->
<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './component.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Category/Component',
		component: Wrapper,
		tags: ['autodocs']
	});
</script>

<Story name="Default" args={{ variant: 'default' }} />
<Story name="Sizes" args={{ variant: 'sizes' }} />
```

## Consequências

### Positivas

- Documentação visual automática de todos os componentes
- Desenvolvimento isolado sem dependência de páginas completas
- Testes de acessibilidade integrados via addon a11y
- Facilita onboarding de novos desenvolvedores
- Permite demonstrar diferentes estados e variantes
- Suporte a Svelte 5 com sintaxe nativa via addon-svelte-csf

### Negativas

- Adiciona dependências de desenvolvimento ao projeto
- Requer manutenção das stories junto com os componentes
- Curva de aprendizado para novos contribuidores

## Referências

- [Storybook for SvelteKit](https://storybook.js.org/docs/get-started/sveltekit)
- [Storybook Addon Svelte CSF](https://github.com/storybookjs/addon-svelte-csf)
