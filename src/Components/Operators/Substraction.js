import React from "react";
import { useDispatch } from "react-redux";
import { UPDATEOPERATOR } from "../../Store/ActionTypes";
import { buttonStyle } from "../../Styles/buttonStyle";
export default function Substraction() {
  const dispatch = useDispatch();
  let colorStyle = {
    backgroundColor: "#f26800",
    color: "white",
  };
  return (
    <button
      style={{ ...buttonStyle, ...colorStyle }}
      onClick={() => dispatch({ type: UPDATEOPERATOR, payload: "-" })}
    >
      {"-"}
    </button>
  );
}
