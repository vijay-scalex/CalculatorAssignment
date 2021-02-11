import React from "react";
import "./App.css";
import ClearAll from "./Components/Common/ClearAll";
import Display from "./Components/Common/Display";
import KeyPad from "./Components/KeyPad/KeyPad";

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
            <KeyPad />
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
