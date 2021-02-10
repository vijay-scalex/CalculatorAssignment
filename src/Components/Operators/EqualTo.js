import React from "react";
import { useDispatch } from "react-redux";
import { UPDATEDISPLAY } from "../../Store/ActionTypes";
export default function EqualTo() {
  const dispatch = useDispatch();
  let buttonStyle = {
    height: "60px",
    width: "60px",
    margin: "1px",
    backgroundColor: "grey",
    color: "white",
    fontWeight: "bold",fontSize:'21px'
  };
  return (
    <button
      style={buttonStyle}
      onClick={() => dispatch({ type: UPDATEDISPLAY, payload: "=" })}
    >
      =
    </button>
  );
}
