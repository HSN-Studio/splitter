import React from "react";
import "../css/input.css";
import iconPerson from "../img/icon-person.svg";
function InputPeople({ handleChange, value, displayErr }) {
  return (
    <div className="input-people">
      <label className="field-headings">
        Number of people:
        {displayErr ? <span className="input-err">Invalid or empty!</span> : ""}
      </label>
      <br></br>
      <img className="input-icons" src={iconPerson}></img>
      <input
        type="number"
        min="1"
        name="numOfPeople"
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default InputPeople;
