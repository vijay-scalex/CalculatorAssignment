import { ADDITION, SUBSTRACTION } from "./ActionTypes";

export const addNumber = (content) => ({
  type: ADDITION,
  payload: {
    content,
  },
});
export const substractNumber = (content) => ({
  type: SUBSTRACTION,
  payload: {
    content,
  },
});
