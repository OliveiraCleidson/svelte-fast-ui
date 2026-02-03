import { getContext, setContext } from 'svelte';
import {
	reorderArray,
	calculatePosition,
	getNeighborPositions,
	needsRebalance,
	rebalancePositions,
	sortByPosition
} from '../../../sortable/index.js';

// ============================================================================
// Helpers
// ============================================================================

/**
 * Deep clone que funciona com Proxies do Svelte
 * (structuredClone não funciona com Proxies reativos)
 */
function deepClone<T>(obj: T): T {
	return JSON.parse(JSON.stringify(obj));
}

// ============================================================================
// Types
// ============================================================================

export interface KanbanCard {
	id: string;
	title: string;
	position: number;
	description?: string;
	[key: string]: unknown;
}

export interface KanbanColumn {
	id: string;
	title: string;
	position: number;
	cards: KanbanCard[];
	[key: string]: unknown;
}

export interface KanbanStateProps {
	columns: () => KanbanColumn[];
	onColumnsChange?: (columns: KanbanColumn[]) => void;
	onCardMove?: (cardId: string, fromColumnId: string, toColumnId: string, newIndex: number) => void;
	onColumnReorder?: (columns: KanbanColumn[]) => void;
}

// ============================================================================
// State Class
// ============================================================================

const KANBAN_CONTEXT = Symbol.for('kanban-context');

export class KanbanState {
	readonly props: KanbanStateProps;

	constructor(props: KanbanStateProps) {
		this.props = props;
	}

	// Getters
	get columns() {
		return this.props.columns();
	}

	// Derived
	get cardCount() {
		return this.columns.reduce((acc, col) => acc + col.cards.length, 0);
	}

	get columnCount() {
		return this.columns.length;
	}

	// ============================================================================
	// Column Operations (Funções puras - Svelte controla estado)
	// ============================================================================

	/**
	 * Reordena colunas
	 */
	reorderColumns = (oldIndex: number, newIndex: number) => {
		if (oldIndex === newIndex) return;
		const newColumns = reorderArray(this.columns, oldIndex, newIndex);
		this.props.onColumnsChange?.(newColumns);
		this.props.onColumnReorder?.(newColumns);
	};

	/**
	 * Define todas as colunas (usado pelo Sortable wrapper)
	 */
	setColumns = (columns: KanbanColumn[]) => {
		this.props.onColumnsChange?.(columns);
		this.props.onColumnReorder?.(columns);
	};

	/**
	 * Encontra uma coluna pelo ID
	 */
	findColumn = (columnId: string): KanbanColumn | undefined => {
		return this.columns.find((col) => col.id === columnId);
	};

	/**
	 * Encontra o índice de uma coluna pelo ID
	 */
	findColumnIndex = (columnId: string): number => {
		return this.columns.findIndex((col) => col.id === columnId);
	};

	// ============================================================================
	// Card Operations (Funções puras - Svelte controla estado)
	// ============================================================================

	/**
	 * Reordena cards dentro da mesma coluna
	 */
	reorderCardsInColumn = (columnId: string, oldIndex: number, newIndex: number) => {
		if (oldIndex === newIndex) return;

		const newColumns = deepClone(this.columns);
		const column = newColumns.find((col) => col.id === columnId);
		if (!column) return;

		column.cards = reorderArray(column.cards, oldIndex, newIndex);
		this.props.onColumnsChange?.(newColumns);
	};

	/**
	 * Define todos os cards de uma coluna (usado pelo Sortable wrapper)
	 * @deprecated Use updateCardPosition, addCardToColumn, removeCardFromColumn instead
	 */
	setColumnCards = (columnId: string, cards: KanbanCard[]) => {
		const newColumns = deepClone(this.columns);
		const column = newColumns.find((col) => col.id === columnId);
		if (!column) return;

		column.cards = deepClone(cards);
		this.props.onColumnsChange?.(newColumns);
	};

	// ============================================================================
	// New Atomic Card Operations (Recommended)
	// ============================================================================

	/**
	 * Atualiza a position de um card específico.
	 * Usado após reorder dentro da mesma coluna.
	 */
	updateCardPosition = (columnId: string, cardId: string, newPosition: number) => {
		const newColumns = deepClone(this.columns);
		const column = newColumns.find((col) => col.id === columnId);
		if (!column) return;

		const card = column.cards.find((c) => c.id === cardId);
		if (!card) return;

		card.position = newPosition;

		if (needsRebalance(column.cards)) {
			column.cards = rebalancePositions(column.cards) as KanbanCard[];
		}

		this.props.onColumnsChange?.(newColumns);
	};

	/**
	 * Adiciona um card a uma coluna com a position especificada.
	 * Usado quando um card é recebido de outra coluna.
	 */
	addCardToColumn = (columnId: string, card: KanbanCard) => {
		const newColumns = deepClone(this.columns);
		const column = newColumns.find((col) => col.id === columnId);
		if (!column) return;

		column.cards.push(deepClone(card));

		if (needsRebalance(column.cards)) {
			column.cards = rebalancePositions(column.cards) as KanbanCard[];
		}

		this.props.onColumnsChange?.(newColumns);
	};

	/**
	 * Remove um card de uma coluna.
	 * Usado quando um card é enviado para outra coluna.
	 */
	removeCardFromColumn = (columnId: string, cardId: string) => {
		const newColumns = deepClone(this.columns);
		const column = newColumns.find((col) => col.id === columnId);
		if (!column) return;

		const cardIndex = column.cards.findIndex((c) => c.id === cardId);
		if (cardIndex === -1) return;

		column.cards.splice(cardIndex, 1);
		this.props.onColumnsChange?.(newColumns);
	};

	/**
	 * Calcula a position para um card em uma nova posição.
	 * Útil para calcular a position antes de chamar updateCardPosition ou addCardToColumn.
	 */
	calculateCardPosition = (columnId: string, newIndex: number, excludeCardId?: string): number => {
		const column = this.findColumn(columnId);
		if (!column) return 1000;

		const sortedCards = sortByPosition(column.cards);
		const [prevPos, nextPos] = getNeighborPositions(sortedCards, newIndex, excludeCardId ?? '');
		return calculatePosition(prevPos, nextPos);
	};

	/**
	 * Move card entre colunas diferentes
	 */
	moveCardToColumn = (
		cardId: string,
		fromColumnId: string,
		toColumnId: string,
		newIndex: number
	) => {
		const newColumns = deepClone(this.columns);

		const fromColumn = newColumns.find((col) => col.id === fromColumnId);
		const toColumn = newColumns.find((col) => col.id === toColumnId);

		if (!fromColumn || !toColumn) return;

		const cardIndex = fromColumn.cards.findIndex((c) => c.id === cardId);
		if (cardIndex === -1) return;

		const [movedCard] = fromColumn.cards.splice(cardIndex, 1);
		toColumn.cards.splice(newIndex, 0, movedCard);

		this.props.onColumnsChange?.(newColumns);
		this.props.onCardMove?.(cardId, fromColumnId, toColumnId, newIndex);
	};

	/**
	 * Move um card programaticamente
	 */
	moveCard = (cardId: string, fromColumnId: string, toColumnId: string, newIndex: number) => {
		this.moveCardToColumn(cardId, fromColumnId, toColumnId, newIndex);
	};

	/**
	 * Adiciona um novo card a uma coluna
	 */
	addCard = (columnId: string, card: KanbanCard) => {
		const newColumns = deepClone(this.columns);
		const column = newColumns.find((col) => col.id === columnId);

		if (!column) return;

		column.cards.push(card);
		this.props.onColumnsChange?.(newColumns);
	};

	/**
	 * Remove um card de uma coluna
	 */
	removeCard = (columnId: string, cardId: string) => {
		const newColumns = deepClone(this.columns);
		const column = newColumns.find((col) => col.id === columnId);

		if (!column) return;

		column.cards = column.cards.filter((c) => c.id !== cardId);
		this.props.onColumnsChange?.(newColumns);
	};

	/**
	 * Atualiza um card
	 */
	updateCard = (columnId: string, cardId: string, updates: Partial<KanbanCard>) => {
		const newColumns = deepClone(this.columns);
		const column = newColumns.find((col) => col.id === columnId);

		if (!column) return;

		const cardIndex = column.cards.findIndex((c) => c.id === cardId);
		if (cardIndex === -1) return;

		column.cards[cardIndex] = { ...column.cards[cardIndex], ...updates };
		this.props.onColumnsChange?.(newColumns);
	};

	/**
	 * Encontra um card pelo ID
	 */
	findCard = (cardId: string): { card: KanbanCard; column: KanbanColumn } | undefined => {
		for (const column of this.columns) {
			const card = column.cards.find((c) => c.id === cardId);
			if (card) {
				return { card, column };
			}
		}
		return undefined;
	};

	// ============================================================================
	// Column CRUD
	// ============================================================================

	/**
	 * Adiciona uma nova coluna
	 */
	addColumn = (column: KanbanColumn) => {
		const newColumns = [...deepClone(this.columns), column];
		this.props.onColumnsChange?.(newColumns);
	};

	/**
	 * Remove uma coluna
	 */
	removeColumn = (columnId: string) => {
		const newColumns = deepClone(this.columns).filter((col: KanbanColumn) => col.id !== columnId);
		this.props.onColumnsChange?.(newColumns);
	};

	/**
	 * Atualiza uma coluna
	 */
	updateColumn = (columnId: string, updates: Partial<KanbanColumn>) => {
		const newColumns = deepClone(this.columns);
		const columnIndex = newColumns.findIndex((col) => col.id === columnId);

		if (columnIndex === -1) return;

		newColumns[columnIndex] = { ...newColumns[columnIndex], ...updates };
		this.props.onColumnsChange?.(newColumns);
	};
}

// ============================================================================
// Context API
// ============================================================================

export function setKanbanContext(props: KanbanStateProps): KanbanState {
	const state = new KanbanState(props);
	setContext(KANBAN_CONTEXT, state);
	return state;
}

export function useKanban(): KanbanState {
	const context = getContext<KanbanState | undefined>(KANBAN_CONTEXT);

	if (!context) {
		throw new Error('useKanban must be used within a Kanban.Board component');
	}

	return context;
}
