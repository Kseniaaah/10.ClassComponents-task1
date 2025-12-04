import { PLAYER } from './constants/PLAYER';
import { TYPE_ACTION } from './constants/TYPE_ACTION';
import { checkWin } from './helpers/checkWin';
import { checkDraw } from './helpers/checkDraw';
import { togglePlayer } from './helpers/togglePlayer';

export const initialState = {
	field: Array(9).fill(PLAYER.EMPTY),
	currentPlayer: PLAYER.CROSS,
	isDraw: false,
	isWin: false,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case TYPE_ACTION.CELL_CLICK: {
			const newField = [...state.field];
			newField[payload] = state.currentPlayer;

			const isWin = checkWin(newField, state.currentPlayer);
			const isDraw = !isWin && checkDraw(newField);

			const nextPlayer =
				isWin || isDraw ? state.currentPlayer : togglePlayer(state.currentPlayer);

			return {
				...state,
				field: newField,
				currentPlayer: nextPlayer,
				isDraw,
				isWin,
			};
		}

		case TYPE_ACTION.RESTART_GAME:
			return {
				...initialState,
			};

		default:
			return state;
	}
};
