import { PLAYER } from '../constants/PLAYER';

export const togglePlayer = (currentPlayer) =>
	currentPlayer === PLAYER.CROSS ? PLAYER.ZERO : PLAYER.CROSS;
