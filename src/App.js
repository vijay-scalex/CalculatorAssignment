import React from "react";
import "./App.css";

import Display from "./Components/Common/Display";
import ClearAll from "./Components/Common/ClearAll";

import One from "./Components/Numbers/One";
import Two from "./Components/Numbers/Two";
import Three from "./Components/Numbers/Three";
import Four from "./Components/Numbers/Four";
import Five from "./Components/Numbers/Five";
import Six from "./Components/Numbers/Six";
import Seven from "./Components/Numbers/Seven";
import Eight from "./Components/Numbers/Eight";
import Nine from "./Components/Numbers/Nine";
import Zero from "./Components/Numbers/Zero";
import FloatingPoint from "./Components/Numbers/FloatingPoint";

import EqualTo from "./Components/Operators/EqualTo";
import Division from "./Components/Operators/Division";
import Multiplication from "./Components/Operators/Multiplication";
import Addition from "./Components/Operators/Addition";
import Substraction from "./Components/Operators/Substraction";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="CalculatorContainer">
          <table>
            <tr>
              <td>
                <ClearAll />
              </td>
              <td colspan="3">
                <Display />
              </td>
            </tr>
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
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
