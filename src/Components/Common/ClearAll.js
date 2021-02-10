import React from "react";
import { useDispatch } from "react-redux";
import { CLEARALL } from "../../Store/ActionTypes";
export default function ClearAll() {
  const dispatch = useDispatch();
  
  let buttonStyle = {
    height: "100px",
    width: "60px",
    margin: "1px",
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    fontSize: "21px",
  };
  return (
    <button
      style={buttonStyle}
      onClick={() => dispatch({ type: CLEARALL })}
    >
      AC
    </button>
  );
}
