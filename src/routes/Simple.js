import React, { useState } from "react";
import * as math from "mathjs";

import '../stylesheets/Simple.css'

export default function Simple(){

    const [expression, setExpression] = useState("");

  const dis = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const solve = () => {
    try {
      const result = math.evaluate(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const clr = () => {
    setExpression("");
  };

  const del = () => {
    setExpression((prevExpression) =>
      prevExpression.slice(0, prevExpression.length - 1)
    );
  };

  const buttonConfigs = [
    [["7", dis], ["8", dis], ["9", dis], ["+", dis]],
    [["4", dis], ["5", dis], ["6", dis], ["-", dis]],
    [["1", dis], ["2", dis], ["3", dis], ["*", dis]],
    [["0", dis], ["clr", clr], ["DEL", del], ["=", solve]],
    [[".", dis], ["^", dis], ["/", dis], ["exp", dis]],
    [["(", dis], [")", dis], ["sin", dis], ["cos", dis]],
    [["tan", dis], ["sqrt", dis], ["log", dis], ["^2", dis]],
    [["^3", dis], ["", dis], ["", dis], ["", dis]] // Empty buttons (adjust as needed)
  ];
  





    return(
      <>
      <div className="container-fluid calculator-container">
        <div className="row instructions">
          <div className="col-md-4 instructions-content">
            <h1>Instructions</h1>
            <p>To calculate the sine of 55 degrees, follow these steps:</p>
            {/* ... rest of the instructions */}
          </div>
          <div className="col-md-8">
            <table className="calculator-table">
              <tbody>
                <tr>
                  <td colSpan="4">
                  <textarea
                        id="result"
                        value={expression}
                        onChange={(e) => setExpression(e.target.value)}
                        rows="2"
                        className="result-textarea"
                      />
                  </td>
                </tr>
                {buttonConfigs.map((line, index) => (
                  <tr key={index}>
                    {line.map(([label, handler], innerIndex) => (
                      <td key={innerIndex}>
                        <input
                          type="button"
                          value={label}
                          onClick={() => handler(label)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
    
    )
}