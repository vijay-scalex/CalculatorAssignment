import React from "react";
import One from "../Numbers/One";

import Two from "../Numbers/Two";
import Three from "../Numbers/Three";
import Four from "../Numbers/Four";
import Five from "../Numbers/Five";
import Six from "../Numbers/Six";
import Seven from "../Numbers/Seven";
import Eight from "../Numbers/Eight";
import Nine from "../Numbers/Nine";
import Zero from "../Numbers/Zero";
import FloatingPoint from "../Numbers/FloatingPoint";

import EqualTo from "../Operators/EqualTo";
import Division from "../Operators/Division";
import Multiplication from "../Operators/Multiplication";
import Addition from "../Operators/Addition";
import Substraction from "../Operators/Substraction";

export default function KeyPad() {
  return (
    <React.Fragment>
      <tr>
        <td>
          <Seven />
        </td>
        <td>
          <Eight />
        </td>
        <td>
          <Nine />
        </td>
        <td>
          <Division />
        </td>
      </tr>
      <tr>
        <td>
          <Four />
        </td>
        <td>
          <Five />
        </td>
        <td>
          <Six />
        </td>
        <td>
          <Multiplication />
        </td>
      </tr>
      <tr>
        <td>
          <One />
        </td>
        <td>
          <Two />
        </td>
        <td>
          <Three />
        </td>
        <td>
          <Substraction />
        </td>
      </tr>
      <tr>
        <td>
          <Zero />
        </td>
        <td>
          <FloatingPoint />
        </td>
        <td>
          <EqualTo />
        </td>
        <td>
          <Addition />
        </td>
      </tr>
    </React.Fragment>
  );
}
