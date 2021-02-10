import React from "react";
import { useDispatch } from "react-redux";
import { UPDATENUMBER } from "../../Store/ActionTypes";
export default function Three() {
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
      onClick={() => dispatch({ type: UPDATENUMBER, payload: 3 })}
    >
      {3}
    </button>
  );
}
