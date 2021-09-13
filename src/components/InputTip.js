import React from "react";

function InputTip({ handleClick, removeActiveClass, handleChange, value }) {
  return (
    <div className="input-tip">
      <label className="field-headings">Tip Amount %:</label>
      <br></br>
      <input
        type="button"
        name="tipAmount"
        id="1"
        value="5%"
        onClick={handleClick}
        className="tip-btn"
      />
      <input
        type="button"
        name="tipAmount"
        value="10%"
        id="2"
        onClick={handleClick}
        className="tip-btn"
      />
      <input
        type="button"
        name="tipAmount"
        value="15%"
        id="3"
        onClick={handleClick}
        className="tip-btn"
      />
      <input
        type="button"
        name="tipAmount"
        id="4"
        value="25%"
        onClick={handleClick}
        className="tip-btn"
      />
      <input
        type="button"
        name="tipAmount"
        id="5"
        value="50%"
        onClick={handleClick}
        className="tip-btn"
      />

      <input
        type="number"
        name="tipAmount"
        id="6"
        min="1"
        className="tip-btn"
        value={value}
        onChange={handleChange}
        onClick={removeActiveClass}
        placeholder="custom"
      />
    </div>
  );
}

export default InputTip;
