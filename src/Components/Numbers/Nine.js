import React from "react";
import { useDispatch } from "react-redux";
import { UPDATENUMBER } from "../../Store/ActionTypes";
export default function Nine() {
  const dispatch = useDispatch();

  let buttonStyle = {
    height: "60px",
    width: "60px",
    margin: "1px",
    backgroundColor: "#3d3a3a",
    color: "white",
    fontWeight: "bold",
    fontSize:'21px'
  };
  return (
    <button
      style={buttonStyle}
      onClick={() => dispatch({ type: UPDATENUMBER, payload: 9 })}
    >
      {9}
    </button>
  );
}
