import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [screenValue, setScreenValue] = useState("");
  const calculator = () => {
    try {
      setScreenValue(eval(value));
    } catch (error) {
      setValue("Error");
      setScreenValue("Error");
    }
  };
  const clear = () => {
    setValue("");
    setScreenValue("");
  };
  const backspace = () => {
    setValue(value.slice(0, -1));
    setScreenValue(screenValue.slice(0, -1));
  };

  return (
    <div className="body">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="screen">{screenValue}</div>
        <div className="digits">
          <button onClick={clear} style={{ color: "red", width: "10.5em" }}>
            CLEAR
          </button>
          <button onClick={backspace}>C</button>
          <button
            onClick={() => {
              setValue(value + "/");
              setScreenValue(screenValue + "÷");
            }}
          >
            ÷
          </button>
        </div>
        <div className="numbers">
          <div className="container">
            <button
              onClick={() => {
                setValue(value + "1");
                setScreenValue(screenValue + "1");
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                setValue(value + "2");
                setScreenValue(screenValue + "2");
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                setValue(value + "3");
                setScreenValue(screenValue + "3");
              }}
            >
              3
            </button>
            <button
              onClick={() => {
                setValue(value + "*");
                setScreenValue(screenValue + "x");
              }}
            >
              x
            </button>
          </div>
          <div className="container">
            <button
              onClick={() => {
                setValue(value + "4");
                setScreenValue(screenValue + "4");
              }}
            >
              4
            </button>
            <button
              onClick={() => {
                setValue(value + "5");
                setScreenValue(screenValue + "5");
              }}
            >
              5
            </button>
            <button
              onClick={() => {
                setValue(value + "6");
                setScreenValue(screenValue + "6");
              }}
            >
              6
            </button>
            <button
              onClick={() => {
                setValue(value + "-");
                setScreenValue(screenValue + "-");
              }}
            >
              -
            </button>
          </div>
          <div className="container">
            <button
              onClick={() => {
                setValue(value + "7");
                setScreenValue(screenValue + "7");
              }}
            >
              7
            </button>
            <button
              onClick={() => {
                setValue(value + "8");
                setScreenValue(screenValue + "8");
              }}
            >
              8
            </button>
            <button
              onClick={() => {
                setValue(value + "9");
                setScreenValue(screenValue + "9");
              }}
            >
              9
            </button>
            <button
              onClick={() => {
                setValue(value + "+");
                setScreenValue(screenValue + "+");
              }}
            >
              +
            </button>
          </div>
          <div className="container">
            <button
              onClick={() => {
                setValue(value + "0");
                setScreenValue(screenValue + "0");
              }}
            >
              0
            </button>
            <button
              onClick={() => {
                setValue(value + ".");
                setScreenValue(screenValue + ".");
              }}
            >
              .
            </button>
            <button onClick={calculator} style={{ width: "10.5em" }}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
