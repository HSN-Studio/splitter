import React from "react";
import "../css/output.css";

function PerPersonTip({ data }) {
  const { InputBill, tipAmount, numOfPeople } = data;
  return (
    <div className="tip-container">
      <div>
        <label className="tip-label">Tip Amount:</label>
        <br></br>
        <span className="output-value">/ person</span>
      </div>
      <span className="amount">
        ${(((InputBill / 100) * tipAmount) / numOfPeople).toFixed(2)}
      </span>
    </div>
  );
}

export default PerPersonTip;
