import arithmeticOperations from "../Services/arithmeticOperations";
import {
  CLEARALL,
  UPDATEDISPLAY,
  UPDATENUMBER,
  UPDATEOPERATOR,
} from "./ActionTypes";

const initialState = { NUMBERS: [], OPERATORS: [], DISPLAY: "" };

function reducer(state = initialState, { type, payload }) {
  const handleUpdateNumber = (state, payload) => {
    let { NUMBERS, OPERATORS, DISPLAY } = state;

    let newNumberArr = NUMBERS;

    newNumberArr.push(payload);

    let newDisplay = DISPLAY + parseInt(payload);

    return {
      ...state,
      NUMBERS: newNumberArr,
      OPERATORS: OPERATORS,
      DISPLAY: newDisplay,
    };
  };

  const handleUpdateOperator = (state, payload) => {
    console.log("state", state);
    let { NUMBERS, OPERATORS, DISPLAY } = state;
    let newOperators = OPERATORS;
    newOperators.push(payload);
    console.log("newOperators", newOperators);
    let newDisplay = DISPLAY + payload;
    return {
      ...state,
      NUMBERS: NUMBERS,
      OPERATORS: newOperators,
      DISPLAY: newDisplay,
    };
  };

  const handleClearAll = (state, payload) => {
    return {
      ...state,
      NUMBERS: [],
      OPERATORS: [],
      DISPLAY: "",
    };
  };

  const handleUpdateDisplay = (state, payload) => {
    let { OPERATORS, DISPLAY } = state;
    let firstOperator = OPERATORS[0];
    let eq = DISPLAY.split(firstOperator);

    let newDisplay = arithmeticOperations(eq[0], eq[1], firstOperator);
    return {
      ...state,
      NUMBERS: [],
      OPERATORS: [],
      DISPLAY: newDisplay,
    };
  };

  switch (type) {
    case UPDATENUMBER:
      return handleUpdateNumber(state, payload);
    case UPDATEOPERATOR:
      return handleUpdateOperator(state, payload);
    case CLEARALL:
      return handleClearAll(state);

    case UPDATEDISPLAY:
      return handleUpdateDisplay(state, payload);
    default:
      return state;
  }
}

export default reducer;
