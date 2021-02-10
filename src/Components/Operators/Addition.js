import React from "react";
import { useDispatch } from "react-redux";
import { UPDATEOPERATOR } from "../../Store/ActionTypes";
export default function Addition() {
  const dispatch = useDispatch();
  let buttonStyle = {
    height: "60px",
    width: "60px",
    margin: "1px",
    backgroundColor: "#f26800",
    color: "white",
    fontWeight: "bold",
    fontSize: "21px",
  };
  return (
    <button
      style={buttonStyle}
      onClick={() => dispatch({ type: UPDATEOPERATOR, payload: "+" })}
    >
      {"+"}
    </button>
  );
}
