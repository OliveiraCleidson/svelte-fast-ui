import type { SortableEvent } from 'sortablejs';
import type { SortableItemProps, NormalizedItem } from './types.js';

// ============================================================================
// Normalized Item Creation
// ============================================================================

/**
 * Cria uma estrutura normalizada a partir de um evento SortableJS.
 * Esta estrutura contém todas as informações necessárias para:
 * - Reverter as mudanças DOM
 * - Calcular o novo estado
 */
export function createNormalized<T extends SortableItemProps>(
	evt: SortableEvent,
	list: T[]
): NormalizedItem<T>[] {
	const { oldIndex, newIndex, item, from } = evt;

	if (oldIndex === undefined || newIndex === undefined) {
		return [];
	}

	return [
		{
			item: list[oldIndex],
			element: item,
			parentElement: from,
			oldIndex,
			newIndex
		}
	];
}

// ============================================================================
// State Transformations - Pure Functions
// ============================================================================

/**
 * Reordena um array movendo item de oldIndex para newIndex.
 * Função pura genérica que funciona com qualquer tipo de array.
 */
export function reorderArray<T>(array: T[], oldIndex: number, newIndex: number): T[] {
	if (oldIndex === newIndex) return array;

	const result = [...array];
	const [removed] = result.splice(oldIndex, 1);
	result.splice(newIndex, 0, removed);
	return result;
}

/**
 * Reordena um item dentro da mesma lista (alias para sortable items).
 * Move o item de oldIndex para newIndex.
 */
export function handleReorder<T extends SortableItemProps>(
	list: T[],
	oldIndex: number,
	newIndex: number
): T[] {
	return reorderArray(list, oldIndex, newIndex);
}

/**
 * Remove um item da lista (quando foi para outra lista).
 */
export function handleRemove<T extends SortableItemProps>(list: T[], oldIndex: number): T[] {
	const result = [...list];
	result.splice(oldIndex, 1);
	return result;
}

/**
 * Adiciona um item à lista (quando veio de outra lista).
 */
export function handleAdd<T extends SortableItemProps>(list: T[], item: T, newIndex: number): T[] {
	const result = [...list];
	result.splice(newIndex, 0, item);
	return result;
}

/**
 * Remove múltiplos itens da lista (para MultiDrag).
 * Remove do maior índice para o menor para não afetar os índices.
 */
export function handleMultiRemove<T extends SortableItemProps>(
	list: T[],
	normalized: NormalizedItem<T>[]
): T[] {
	const result = [...list];
	const sortedByIndexDesc = [...normalized].sort((a, b) => b.oldIndex - a.oldIndex);
	sortedByIndexDesc.forEach(({ oldIndex }) => result.splice(oldIndex, 1));
	return result;
}

/**
 * Adiciona múltiplos itens à lista (para MultiDrag).
 * Adiciona do menor índice para o maior.
 */
export function handleMultiAdd<T extends SortableItemProps>(
	list: T[],
	normalized: NormalizedItem<T>[],
	clone?: (item: T, evt: SortableEvent) => T,
	evt?: SortableEvent
): T[] {
	const result = [...list];
	const sortedByIndexAsc = [...normalized].sort((a, b) => a.newIndex - b.newIndex);
	sortedByIndexAsc.forEach(({ item, newIndex }) => {
		const newItem = clone && evt ? clone(item, evt) : item;
		result.splice(newIndex, 0, newItem);
	});
	return result;
}

/**
 * Processa reordenação completa (remove e adiciona).
 * Usado para operações dentro da mesma lista com MultiDrag.
 */
export function handleStateChanges<T extends SortableItemProps>(
	normalized: NormalizedItem<T>[],
	list: T[]
): T[] {
	const afterRemove = handleMultiRemove<T>(list, normalized);
	return handleMultiAdd<T>(afterRemove, normalized);
}
