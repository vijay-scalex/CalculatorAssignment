import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  const localState = useSelector((state) => state);
  let { DISPLAY } = localState;
  return (
    <input
      style={{
        color: "#fff", 
        backgroundColor: "#000",
        height: "100px",
        fontSize: "35px",
        width: "96%",
        margin: "1px",
      }}
      value={DISPLAY}
      readOnly
    />
  );
}
