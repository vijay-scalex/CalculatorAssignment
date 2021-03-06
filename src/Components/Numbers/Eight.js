import React from "react";
import { useDispatch } from "react-redux";
import { UPDATENUMBER } from "../../Store/ActionTypes";
import { buttonStyle } from "../../Styles/buttonStyle";

export default function Eight() {
  const dispatch = useDispatch();
  let colorStyle = {
    backgroundColor: "#3d3a3a",
    color: "white",
  };
  return (
    <button
      style={{ ...buttonStyle, ...colorStyle }}
      onClick={() => dispatch({ type: UPDATENUMBER, payload: 8 })}
    >
      {8}
    </button>
  );
}
