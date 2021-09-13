import "./css/App.css";
import React, { useState, useEffect } from "react";
import "./css/App.css";
import "./css/input.css";
import "./css/output.css";

import logo from "./img/logo.svg";
import InputBill from "./components/InputBill.js";
import InputPeople from "./components/InputPeople.js";
import InputTip from "./components/InputTip.js";
import PerPersonTip from "./components/PerPersonTip.js";
import TotalTip from "./components/TotalTip.js";
function App() {
  const tipBtns = document.querySelectorAll(".tip-btn");

  // States
  const [state, setstate] = useState({
    InputBill: "",
    tipAmount: "",
    numOfPeople: 1,
    tipPerPerson: "",
    tipTotal: "",
    InputBillErr: false,
    numOfPeopleErr: false,
  });
  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      value.match(/^(\([1-9]\d*(\.\d*[1-9])?|0\.\d*[1-9]+)|\d+(\.\d*[1-9])?/)
    ) {
      setstate((prevState) => ({
        ...prevState,
        [name]: parseFloat(value),
        [name + "Err"]: false,
      }));
    } else {
      setstate((prevState) => ({
        ...prevState,
        [name]: "",
        [name + "Err"]: true,
      }));
    }
  };

  const handleClick = (e) => {
    const { name, value, id } = e.target;
    e.target.classList.add("active");
    toggleActiveClass(tipBtns, id);
    setstate((prevState) => ({
      ...prevState,
      [name]: parseFloat(value.replace("%", "")),
    }));
  };

  const handleReset = (e) => {
    e.preventDefault();
    setstate({
      InputBill: "",
      tipAmount: "",
      numOfPeople: 1,
      tipPerPerson: "",
      tipTotal: "",
      InputBillErr: false,
      numOfPeopleErr: false,
    });
    tipBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
  };

  // Methods
  const toggleActiveClass = function (elements, id) {
    elements.forEach((element) => {
      if (element.id === id) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  };

  const removeActiveClass = () => {
    tipBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
  };

  // Views replaced by Component from separate file
  return (
    <div className="app">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="app-container">
        <div className="input">
          <InputBill
            handleChange={handleChange}
            value={state.InputBill}
            displayErr={state.InputBillErr}
          />

          <InputTip
            handleClick={handleClick}
            handleChange={handleChange}
            removeActiveClass={removeActiveClass}
            value={state.tipAmount}
          />

          <InputPeople
            handleChange={handleChange}
            value={state.numOfPeople}
            displayErr={state.numOfPeopleErr}
          />
        </div>

        <div className="output">
          <PerPersonTip data={state} />
          <TotalTip data={state} />
          <button className="reset-btn" type="reset" onClick={handleReset}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

//Just Random Tests
// const guardClause = true;
// if (!guardClause) {
//   console.log(`falsy values are: false,null,undefined,0,'',NaN`);
// }

// const sayHello = () => console.log(`Hello World`);
// // Ternary Operator
// // !guardClause ? console.log(`False`) : console.log(`True`);

// // If statement tricky alternative
// guardClause && sayHello();
