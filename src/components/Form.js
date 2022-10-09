import React, { useState } from "react";
import './Form.css';
export default function Form() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [bmiMessage, setBmiMessage] = useState("Message");
  const [flag, setFlag] = useState(0);
  const calculate = (e) => {
    e.preventDefault();
    const ht = height * 0.0254;
    const bmi = parseFloat(weight / ht ** 2).toFixed(2);
    setBmi(bmi);
    setFlag(true);
    setMessage(bmi);
  };
  const setMessage = (bmi) => {
    if (bmi < 18.5 && bmi > 0) setBmiMessage("UnderWeight");
    else if (bmi >= 18.5 && bmi < 24.9) setBmiMessage("Normal Weight");
    else if (bmi >= 25 && bmi < 29.9) setBmiMessage("Over Weight");
    else if (bmi >= 30) setBmiMessage("Obesity");
    else setBmiMessage("Invalid BMI");
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <form  onSubmit={calculate}>
            <div className="col">
              <label className="heading-text" htmlFor="inputHeight">Height</label>
              <input
                type="text"
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
                className="form-control"
                id="inputHeight"
                placeholder="Enter Your Height in inches"
              />
            </div>
            <div className="form-group ">
              <label className="heading-text" htmlFor="InputWeight">Weight</label>
              <input
                type="text"
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                className="form-control"
                id="InputWeight"
                placeholder="Enter Your Weight in Kg"
              />
            </div>
            <button type="submit" className="btn btn-dark  my-4">
              Submit
            </button>
          </form>
          <div className="card-secondry">
      <div className="card-body1">
          <div className="heading-text">
            {flag === true ? (
              <h2>
                BMI:{bmi} - {bmiMessage}
              </h2>
            ) : (
              ""
            )}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
