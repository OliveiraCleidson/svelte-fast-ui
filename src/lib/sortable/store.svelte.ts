import type { SortableStore, SortableItemProps } from './types.js';
import { sortByPosition } from './fractional.js';

// ============================================================================
// Global Store
// ============================================================================

/**
 * Store global para coordenar drag-and-drop entre listas diferentes.
 *
 * Quando um item é arrastado de uma lista para outra, precisamos saber
 * de onde ele veio para poder obter os dados corretos.
 *
 * Este store é módulo-level e compartilhado entre todas as instâncias
 * do componente Sortable.
 */

let dragging: SortableStore['dragging'] = $state(null);

export const sortableStore: SortableStore = {
	get dragging() {
		return dragging;
	},
	set dragging(value) {
		dragging = value;
	}
};

// ============================================================================
// Store Actions
// ============================================================================

/**
 * Define o item sendo arrastado e sua lista de origem.
 * Chamado no evento onStart.
 *
 * IMPORTANTE: A lista é armazenada ORDENADA por position para corresponder
 * à ordem visual do DOM (que é o que SortableJS usa para oldIndex).
 */
export function setDragging(list: SortableItemProps[], el: HTMLElement): void {
	// Armazenar a lista ordenada por position para corresponder à ordem do DOM
	dragging = { list: sortByPosition([...list]), el };
}

/**
 * Limpa o estado de drag.
 * Chamado no evento onEnd.
 */
export function clearDragging(): void {
	dragging = null;
}

/**
 * Obtém o item sendo arrastado de uma lista de origem.
 * O oldIndex é baseado na ordem visual (DOM), então a lista armazenada
 * já está ordenada por position.
 */
export function getDraggingItem<T extends SortableItemProps>(oldIndex: number): T | null {
	if (!dragging) return null;
	return dragging.list[oldIndex] as T;
}
