# 0002. Atomic Design para Organização de Componentes

Data: 2025-12-23

## Status

Aceito

## Contexto

Com o crescimento da biblioteca de componentes UI do Control Plane, surgiu a necessidade de estabelecer uma metodologia clara de organização. Enfrentamos os seguintes desafios:

- Dificuldade em categorizar novos componentes
- Falta de clareza sobre níveis de abstração
- Inconsistência na estrutura de pastas
- Componentes com responsabilidades mistas

Precisamos de uma metodologia que forneça diretrizes claras para organização e composição de componentes.

## Decisão

Adotamos o **Atomic Design** adaptado para nossa estrutura, utilizando duas categorias principais:

### Hierarquia

```
src/lib/components/ui/
├── [primitives]     # Componentes atômicos (átomos/moléculas)
│   ├── button/
│   ├── input/
│   ├── badge/
│   ├── spinner/
│   └── ...
│
└── [composite]      # Componentes compostos (organismos)
    ├── data-table/
    ├── form/
    ├── dialog/
    └── ...
```

### Definições

**Primitives (Primitivos)**

- Componentes atômicos e indivisíveis
- Não dependem de outros componentes do projeto
- Exemplos: Button, Input, Badge, Spinner, Toggle, Label

**Composite (Compostos)**

- Combinação de componentes primitivos
- Implementam padrões de UI mais complexos
- Exemplos: DataTable, Form, Dialog, Sheet, Command

### Estrutura no Storybook

```
UI/
├── Primitives/
│   ├── Button
│   ├── Input
│   ├── Badge
│   └── ...
│
└── Composite/
    ├── DataTable
    ├── Form
    └── ...
```

### Critérios de Classificação

| Critério              | Primitive                  | Composite                     |
| --------------------- | -------------------------- | ----------------------------- |
| Dependências internas | Nenhuma ou mínimas         | Múltiplos primitivos          |
| Responsabilidade      | Uma única função           | Orquestra múltiplas funções   |
| Reutilização          | Alta, em qualquer contexto | Específica para padrões de UI |
| Exemplos              | Button, Input, Label       | Form, DataTable, Dialog       |

## Consequências

### Positivas

- Hierarquia clara e previsível de componentes
- Facilita decisões sobre onde criar novos componentes
- Promove reutilização de primitivos em compostos
- Melhora a descoberta de componentes via Storybook
- Alinha com práticas conhecidas da comunidade

### Negativas

- Alguns componentes podem ser ambíguos na classificação
- Requer disciplina para manter a consistência
- Pode exigir refatoração de componentes existentes

## Referências

- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/)
