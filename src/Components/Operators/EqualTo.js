import React from "react";
import { useDispatch } from "react-redux";
import { UPDATEDISPLAY } from "../../Store/ActionTypes";
import { buttonStyle } from "../../Styles/buttonStyle";
export default function EqualTo() {
  const dispatch = useDispatch();
  let colorStyle = {
    backgroundColor: "grey",
    color: "white",
  };
  return (
    <button
      style={{ ...buttonStyle, ...colorStyle }}
      onClick={() => dispatch({ type: UPDATEDISPLAY, payload: "=" })}
    >
      =
    </button>
  );
}
