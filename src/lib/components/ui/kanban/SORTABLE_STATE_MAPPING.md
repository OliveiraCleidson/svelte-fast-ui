# Mapeamento de Estados: SortableJS ↔ Svelte

## Princípio Fundamental

```
┌─────────────────────────────────────────────────────────────────────┐
│  SortableJS: Biblioteca de interação (detecta gestos do usuário)   │
│  Svelte:     Framework reativo (controla estado e renderização)    │
└─────────────────────────────────────────────────────────────────────┘
```

**Regra:** Svelte deve controlar TODO estado que afeta a renderização.
SortableJS apenas emite eventos sobre a intenção do usuário.

---

## Ciclo de Vida do Drag-and-Drop

```
┌─────────────────────────────────────────────────────────────────────┐
│                        CICLO DE VIDA                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. CHOOSE    → Usuário clica/toca no item                         │
│  2. START     → Drag inicia (após delay, se configurado)           │
│  3. MOVE      → Item sendo arrastado sobre containers              │
│  4. CHANGE    → Posição visual muda durante drag                   │
│  5. END       → Usuário solta o item                               │
│  6. UNCHOOSE  → Item é desselecionado                              │
│                                                                     │
│  Eventos específicos de lista:                                      │
│  • ADD       → Item adicionado vindo de outra lista                │
│  • REMOVE    → Item removido para outra lista                      │
│  • UPDATE    → Ordenação mudou dentro da mesma lista               │
│  • SORT      → Qualquer mudança (add/update/remove)                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Estados que Svelte DEVE Gerenciar

### 1. Estado de Dados (Data State)

| Estado            | Tipo             | Descrição                  | Quando Atualizar    |
| ----------------- | ---------------- | -------------------------- | ------------------- |
| `columns`         | `KanbanColumn[]` | Array de colunas com cards | `onEnd` (após drop) |
| `columns[].cards` | `KanbanCard[]`   | Cards de cada coluna       | `onEnd` (após drop) |

**Por quê?** O `{#each}` do Svelte precisa destes dados para renderizar.

### 2. Estado de Drag (Drag State)

| Estado                | Tipo                 | Descrição                          | Quando Atualizar                  |
| --------------------- | -------------------- | ---------------------------------- | --------------------------------- |
| `isDragging`          | `boolean`            | Se algum item está sendo arrastado | `onStart` → true, `onEnd` → false |
| `draggedItem`         | `KanbanCard \| null` | Referência ao item sendo arrastado | `onStart` → item, `onEnd` → null  |
| `draggedFromColumnId` | `string \| null`     | Coluna de origem                   | `onStart` → id, `onEnd` → null    |

**Por quê?** Permite feedback visual durante drag (ex: destacar coluna de origem).

### 3. Estado de Drop Zone (Drop State)

| Estado               | Tipo             | Descrição                       | Quando Atualizar      |
| -------------------- | ---------------- | ------------------------------- | --------------------- |
| `dropTargetColumnId` | `string \| null` | Coluna sob o cursor             | `onMove` / `onChange` |
| `dropIndex`          | `number \| null` | Posição onde será inserido      | `onMove` / `onChange` |
| `canDrop`            | `boolean`        | Se pode soltar na posição atual | `onMove`              |

**Por quê?** Feedback visual de onde o item será inserido (placeholder).

### 4. Estado de Placeholder

| Estado                | Tipo             | Descrição                    | Quando Atualizar |
| --------------------- | ---------------- | ---------------------------- | ---------------- |
| `placeholderColumnId` | `string \| null` | Coluna mostrando placeholder | `onChange`       |
| `placeholderIndex`    | `number \| null` | Posição do placeholder       | `onChange`       |

**Por quê?** Para renderizar um elemento visual indicando a posição de drop.

---

## Eventos SortableJS → Ações Svelte

### onChoose

```typescript
// Usuário selecionou item (antes de começar a arrastar)
evt: {
	oldIndex: number;
}

// Ação Svelte: Preparar para drag
// Nenhum estado crítico ainda
```

### onStart

```typescript
// Drag iniciou
evt: {
  item: HTMLElement,
  oldIndex: number,
  from: HTMLElement
}

// Ação Svelte: Atualizar estado de drag
dragState = {
  isDragging: true,
  draggedItem: getCardFromElement(evt.item),
  draggedFromColumnId: getColumnId(evt.from),
  originalIndex: evt.oldIndex
}
```

### onMove ⚠️ CRÍTICO

```typescript
// Item movendo sobre containers
evt: {
  dragged: HTMLElement,      // Elemento sendo arrastado
  related: HTMLElement,      // Elemento sob o cursor
  from: HTMLElement,         // Container de origem
  to: HTMLElement,           // Container de destino
  willInsertAfter: boolean   // Se será inserido após related
}

// RETORNO AFETA COMPORTAMENTO:
// - false: Cancela movimento (item volta)
// - true/void: Permite movimento
// - -1: Insere antes do related
// - 1: Insere depois do related

// Ação Svelte: Atualizar estado de drop zone
dropState = {
  dropTargetColumnId: getColumnId(evt.to),
  dropIndex: calculateDropIndex(evt),
  canDrop: validateDrop(evt)
}

// PROBLEMA ATUAL: Retornar false cancela TUDO incluindo feedback visual
```

### onChange

```typescript
// Posição visual mudou durante drag
evt: {
  item: HTMLElement,
  to: HTMLElement,
  from: HTMLElement,
  newIndex: number,
  oldIndex: number
}

// Ação Svelte: Atualizar placeholder
placeholderState = {
  columnId: getColumnId(evt.to),
  index: evt.newIndex
}
```

### onEnd

```typescript
// Drop finalizado
evt: {
  item: HTMLElement,
  to: HTMLElement,
  from: HTMLElement,
  oldIndex: number,
  newIndex: number,
  pullMode: 'clone' | true | false
}

// Ação Svelte: Atualizar dados + limpar estados
1. Atualizar columns (mover card)
2. Limpar dragState
3. Limpar dropState
4. Limpar placeholderState
```

### onAdd (na lista de destino)

```typescript
// Item foi adicionado vindo de outra lista
evt: {
	(item, to, from, oldIndex, newIndex);
}

// Ação Svelte: Adicionar card à coluna
// NOTA: Só dispara se SortableJS manipular o DOM
```

### onRemove (na lista de origem)

```typescript
// Item foi removido para outra lista
evt: {
	(item, to, from, oldIndex, newIndex);
}

// Ação Svelte: Remover card da coluna
// NOTA: Só dispara se SortableJS manipular o DOM
```

---

## Problema Identificado

### Situação Atual

```
onMove retorna false para cross-container
    ↓
SortableJS NÃO move o elemento
    ↓
SortableJS NÃO dispara onChange
    ↓
Nenhum feedback visual de posição de drop
    ↓
onEnd recebe dados incorretos (newIndex = oldIndex?)
```

### Solução Necessária

**Opção A: Permitir SortableJS manipular, reverter depois**

```
onMove retorna true
    ↓
SortableJS move elemento (DOM manipulado)
    ↓
onChange dispara com posição correta
    ↓
onEnd dispara com dados corretos
    ↓
Reverter DOM + Atualizar estado Svelte
```

**Opção B: Gerenciar placeholder manualmente**

```
onMove retorna false (cancela DOM manipulation)
    ↓
Mas capturar evt.to e calcular posição
    ↓
Svelte renderiza placeholder próprio
    ↓
onEnd: usar dados salvos do último onMove
```

---

## Estado Completo Proposto

```typescript
interface KanbanDragState {
	// Dados persistentes (source of truth)
	columns: KanbanColumn[];

	// Estado de drag (durante operação)
	drag: {
		active: boolean;
		item: KanbanCard | null;
		fromColumnId: string | null;
		fromIndex: number | null;
	} | null;

	// Estado de drop zone (feedback visual)
	dropZone: {
		columnId: string | null;
		index: number | null;
		canDrop: boolean;
	} | null;

	// Placeholder (elemento visual)
	placeholder: {
		columnId: string | null;
		index: number | null;
	} | null;
}
```

---

## Próximos Passos

1. **Decidir abordagem** (A ou B)
2. **Implementar estado de drag** (`isDragging`, `draggedItem`)
3. **Implementar feedback de drop zone** (placeholder visual)
4. **Ajustar handlers** para popular estados corretamente
5. **Renderizar placeholder** via Svelte (não via SortableJS)

---

## Referência: Propriedades do evt

```typescript
interface SortableEvent {
	// Elementos
	item: HTMLElement; // Elemento sendo arrastado
	clone: HTMLElement; // Clone (se pull: 'clone')
	target: HTMLElement; // Elemento que recebeu evento

	// Containers
	from: HTMLElement; // Container de origem
	to: HTMLElement; // Container de destino

	// Índices
	oldIndex: number; // Índice original
	newIndex: number; // Novo índice
	oldDraggableIndex: number; // Índice entre draggables
	newDraggableIndex: number; // Novo índice entre draggables

	// Modo
	pullMode: 'clone' | boolean;
}

interface MoveEvent extends SortableEvent {
	dragged: HTMLElement; // Elemento arrastado
	related: HTMLElement; // Elemento relacionado (sob cursor)
	draggedRect: DOMRect; // Bounds do arrastado
	relatedRect: DOMRect; // Bounds do relacionado
	willInsertAfter: boolean; // Inserir após related?
}
```
