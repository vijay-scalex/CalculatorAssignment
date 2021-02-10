import React from "react";
import { useDispatch } from "react-redux";
import { UPDATENUMBER } from "../../Store/ActionTypes";
import { buttonStyle } from "../../Styles/buttonStyle";
export default function One() {
  const dispatch = useDispatch();
  let colorStyle = {
    backgroundColor: "grey",
    color: "white",
  };
  return (
    <button
      style={{ ...buttonStyle, ...colorStyle }}
      onClick={() => dispatch({ type: UPDATENUMBER, payload: 1 })}
    >
      {1}
    </button>
  );
}
