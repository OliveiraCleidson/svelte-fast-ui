# 0003. Arquitetura em Camadas para Design Tokens

Data: 2025-12-29

## Status

Aceito

## Contexto

A biblioteca de componentes do Control Plane precisa ser preparada para extração futura como um Design System independente. Os principais desafios identificados foram:

- Tokens definidos inline no `layout.css` sem separação clara de responsabilidades
- Aplicações consumidoras não conseguiam customizar temas sem modificar o código fonte
- Falta de padrão para decidir quais valores devem ser tokens
- Dificuldade em manter consistência visual entre light/dark mode

Precisamos de uma arquitetura de tokens que permita:

1. Temas customizáveis por aplicações consumidoras
2. Separação clara entre valores brutos e decisões de design
3. Componentes agnósticos ao tema atual (light/dark)

## Decisao

Adotamos uma **Arquitetura em Camadas** com tres niveis de tokens:

### Hierarquia

```
src/lib/tokens/
├── index.css        # Importa as camadas na ordem correta
├── primitives.css   # Camada 1: Valores brutos
├── semantic.css     # Camada 2: Decisoes de design
└── components.css   # Camada 3: Tokens de componentes
```

### Camada 1: Primitives (Primitivos)

Valores brutos sem semantica. **NAO devem ser sobrescritos por temas.**

```css
:root {
	/* Escala Neutral (OKLCH) */
	--primitive-neutral-0: oklch(1 0 0);
	--primitive-neutral-950: oklch(0.145 0 0);

	/* Escala Red */
	--primitive-red-500: oklch(0.577 0.245 27.325);

	/* Escala Radius */
	--primitive-radius-lg: 0.625rem;
}
```

**Regras:**

- Prefixo `--primitive-*`
- Apenas valores literais (cores, espacamentos, radius)
- Sem referencias a outros tokens
- Expandir escala conforme necessidade (nao por antecipacao)

### Camada 2: Semantic (Semantico)

Decisoes de design que referenciam primitivos. **PODEM ser sobrescritos por temas.**

```css
:root {
	--background: var(--primitive-neutral-0);
	--foreground: var(--primitive-neutral-950);
	--primary: var(--primitive-neutral-900);
	--destructive: var(--primitive-red-500);
	--destructive-foreground: var(--primitive-neutral-0);
}

.dark {
	--background: var(--primitive-neutral-950);
	--foreground: var(--primitive-neutral-50);
	--destructive: var(--primitive-red-400);
	--destructive-foreground: var(--primitive-neutral-0);
}
```

**Regras:**

- Nomes funcionais (nao visuais): `--primary`, nao `--blue`
- Sempre referenciam primitivos (exceto excecoes documentadas)
- Light/dark mode resolvidos APENAS aqui
- Cores de chart usam nomenclatura de escala cromatica:
  - `--chart-categorical-*`: itens distintos (A vs B vs C)
  - `--chart-sequential-*`: escala de intensidade (0% -> 100%)
  - `--chart-diverging-*`: escala bipolar (-100 <- 0 -> +100)

### Camada 3: Components (Componentes)

Tokens especificos de componentes. **Referenciam APENAS tokens semanticos.**

```css
:root {
	/* Button */
	--button-default-bg: var(--primary);
	--button-default-text: var(--primary-foreground);
	--button-destructive-bg: var(--destructive);
	--button-destructive-text: var(--destructive-foreground);

	/* Switch */
	--switch-unchecked-bg: var(--input);
	--switch-checked-bg: var(--primary);
}
```

**Regras:**

- Prefixo do componente: `--button-*`, `--toggle-*`
- NUNCA usar `.dark` (semantic resolve)
- Nomes funcionais, nao visuais
- Tokens descrevem resultado visual, NAO mecanismo
- Criar apenas para componentes com variacoes reutilizaveis
- Expandir por necessidade, nao por antecipacao

### Quando NAO Criar Token de Componente

| Situacao                 | Decisao                  |
| ------------------------ | ------------------------ |
| Valor unico sem variacao | CSS direto no componente |
| Opacity em hover         | Mecanismo, nao resultado |
| Tokens de sub-elementos  | Muito granular           |
| Componente sem variantes | Nao precisa de token     |

### Fluxo de Customizacao por Tema

```
Aplicacao consumidora
        |
        v
  Sobrescreve semantic.css
        |
        v
  components.css herda automaticamente
        |
        v
  Componentes refletem novo tema
```

## Consequencias

### Positivas

- Separacao clara de responsabilidades entre camadas
- Aplicacoes podem criar temas customizados sobrescrevendo semantic
- Componentes sao automaticamente agnósticos ao tema
- Facilita extracao futura como biblioteca independente
- Previne fallbacks espalhados (semantic completo)
- Nomenclatura de chart preparada para expansao futura

### Negativas

- Curva de aprendizado para decidir em qual camada criar token
- Requer disciplina para manter as regras das camadas
- Mais arquivos para gerenciar

## Referencias

- [Design Tokens W3C Community Group](https://www.w3.org/community/design-tokens/)
- [Tokens in Design Systems](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)
- [Martin Fowler - Layered Architecture](https://martinfowler.com/bliki/PresentationDomainDataLayering.html)
- [Tailwind CSS v4 Theme Configuration](https://tailwindcss.com/docs/theme)
