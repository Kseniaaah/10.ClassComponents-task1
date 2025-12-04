import { PLAYER } from '../constants/PLAYER';

export const checkDraw = (field) => field.every((cell) => cell !== PLAYER.EMPTY);
