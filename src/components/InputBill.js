import React, { useRef, useEffect } from "react";
import iconDollar from "../img/icon-dollar.svg";

function InputBill({ handleChange, value, displayErr }) {
  const billInputField = useRef(null);

  // Methods
  useEffect(() => {
    billInputField.current.focus();
  }, []);

  // JSX / View / Presentation
  return (
    <div className="input-bill">
      <label className="field-headings">
        Bill:
        {displayErr ? <span className="input-err">Invalid input!</span> : ""}
      </label>
      <label></label>
      <br></br>
      <img className="input-icons" src={iconDollar}></img>
      <input
        ref={billInputField}
        type="number"
        name="InputBill"
        value={value}
        onChange={handleChange}
        min="0"
      ></input>
    </div>
  );
}

export default InputBill;
