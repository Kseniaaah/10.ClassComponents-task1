import { WIN_PATTERNS } from '../constants/WIN_PATTERNS';

export const checkWin = (field, currentPlayer) =>
	WIN_PATTERNS.some(pattern => pattern.every(cell => field[cell] === currentPlayer));
