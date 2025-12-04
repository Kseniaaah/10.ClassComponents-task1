import { TYPE_ACTION } from "../constants/TYPE_ACTION";

export const cellClick = (index) => ({
  type: TYPE_ACTION.CELL_CLICK,
  payload: index,
});
