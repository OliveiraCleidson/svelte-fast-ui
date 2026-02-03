# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Unreleased]

## [0.0.1] - 2026-02-03

### Adicionado

- Arquivo `CLAUDE.md` com contexto do projeto para agentes de IA, incluído no artefato npm.
- Aplicação de exemplo em `examples/sveltekit-app/` consumindo o pacote publicado no npm.
- Arquivo `.npmignore` para excluir pastas internas (`.agent`, `.claude`, `.github`, `examples`, `src`) do artefato npm.

### Alterado

- Documentação (README): reescrito o guia de setup — agora basta importar `@olivdev/svelte-fast-ui/tokens/theme` e adicionar a diretiva `@source` do Tailwind v4, sem necessidade de copiar blocos `@theme inline` ou criar `src/lib/utils.ts` manualmente.
- Documentação (README): adicionada explicação sobre a diretiva `@source` e por que ela é obrigatória para que os componentes renderizem com estilo.
- Documentação (README): dependências opcionais agora listadas individualmente por funcionalidade (calendário, charts, forms, etc.).

### Corrigido

- Documentação (README): atualizados badges e instruções de instalação para usar o nome correto do pacote `@olivdev/svelte-fast-ui`.

## [0.0.1-beta.4] - 2026-02-03

### Corrigido

- Workflow de release: adicionada etapa obrigatória de formatação (`npm run format`) antes do commit para garantir consistência.

## [0.0.1-beta.3] - 2026-02-03

### Alterado

- Renomeado pacote para `@olivdev/svelte-fast-ui` para publicação com escopo.

### Corrigido

- Workflow de publicação: removido script `prepublishOnly` durante o deploy para evitar erro de dependências.

## [0.0.1-beta.2] - 2026-02-03

### Corrigido

- Configuração do Vitest: migrado `defineConfig` para `vitest/config`, adicionado pacote `jsdom` e diretiva `@vitest-environment jsdom` nos testes.
- Padronização de formatação e ordenação de classes Tailwind em todos os componentes (Prettier).

## [0.0.1-beta.1] - 2026-02-03

### Adicionado

- Estrutura inicial do projeto **svelte-fast-ui** (v0.0.1) com Svelte 5, SvelteKit e Tailwind CSS v4
- Sistema de design tokens em três camadas: primitivos, semânticos e de componentes, com suporte a tema claro/escuro
- 59 componentes de UI organizados por categoria:
  - **Botões e Toggles**: Button, ButtonGroup, Toggle, ToggleGroup
  - **Inputs e Formulários**: Input, InputGroup, InputOTP, Textarea, Checkbox, RadioGroup, Select, NativeSelect, Slider, Switch, Field
  - **Layout**: Card, Separator, Tabs, Accordion, Collapsible, Resizable, AspectRatio
  - **Navegação**: Breadcrumb, Pagination, NavigationMenu, Menubar, Sidebar
  - **Overlays e Popovers**: Dialog, AlertDialog, Drawer, Sheet, Popover, HoverCard, Tooltip, DropdownMenu, ContextMenu, Command
  - **Feedback e Status**: Alert, Badge, Progress, Skeleton, Spinner, Sonner (toast)
  - **Exibição de Dados**: Table, DataTable, Calendar, RangeCalendar, Chart (54 variantes)
  - **Outros**: Avatar, Carousel, Empty, Item, Kanban, Kbd, Label, ScrollArea, Typography
- Hooks reutilizáveis: `IsMobile` (media query responsiva) e `UseClipboard` (copiar para área de transferência)
- Sistema de drag-and-drop baseado em SortableJS com indexação fracional (`Sortable`, `SortableList`)
- Função utilitária `cn()` para composição condicional de classes Tailwind (clsx + tailwind-merge)
- Configuração de Storybook v10 para documentação interativa dos componentes
- Suporte a testes com Vitest
- Configuração de ESLint e Prettier
- Licença MIT
