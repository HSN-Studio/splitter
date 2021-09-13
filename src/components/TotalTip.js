import React from "react";
import "../css/output.css";

function TotalTip({ data }) {
  const { InputBill, tipAmount } = data;
  return (
    <div className="tip-container">
      <div>
        <label className="tip-label">Total:</label>
        <br></br>
        <span className="output-value">/ person</span>
      </div>
      <span className="amount">
        ${((InputBill / 100) * tipAmount).toFixed(2)}
      </span>
    </div>
  );
}

export default TotalTip;
