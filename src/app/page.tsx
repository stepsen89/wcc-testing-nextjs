/* eslint-disable @typescript-eslint/no-unused-vars */
// app/page.tsx

"use client";
import React, { useState } from "react";
import styles from "./Calculator.module.css";
import CalculatorButton from "@/components/CalculatorButton";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("");

  const handleClick = (value: string) => {
    setDisplay((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString()); // Use `eval` carefully
    } catch (error: any) {
      setDisplay("ERROR!");
    }
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> Calculator Page </h1>

      <div className={styles.calculator}>
        <div className={styles.display} data-testid="display">
          {display || "0"}
        </div>
        <div className={styles.buttons}>
          <CalculatorButton label="C" onClick={clearDisplay} dataTestId="clear" />
          <CalculatorButton label="/" onClick={() => handleClick("/")} dataTestId="divide" />
          <CalculatorButton label="*" onClick={() => handleClick("*")} dataTestId="multiply" />
          <CalculatorButton label="-" onClick={() => handleClick("-")} dataTestId="minus" />
          <CalculatorButton label="7" onClick={() => handleClick("7")} dataTestId="seven" />
          <CalculatorButton label="8" onClick={() => handleClick("8")} dataTestId="eight" />
          <CalculatorButton label="9" onClick={() => handleClick("9")} dataTestId="nine" />
          <CalculatorButton label="+" onClick={() => handleClick("+")} dataTestId="plus" />
          <CalculatorButton label="4" onClick={() => handleClick("4")} dataTestId="four" />
          <CalculatorButton label="5" onClick={() => handleClick("5")} dataTestId="five" />
          <CalculatorButton label="6" onClick={() => handleClick("6")} dataTestId="six" />
          <CalculatorButton label="=" onClick={calculate} dataTestId="equal" />
          <CalculatorButton label="1" onClick={() => handleClick("1")} dataTestId="one" />
          <CalculatorButton label="2" onClick={() => handleClick("2")} dataTestId="two" />
          <CalculatorButton label="3" onClick={() => handleClick("3")} dataTestId="three" />
          <CalculatorButton
            label="0"
            onClick={() => handleClick("0")}
            dataTestId="zero"
            className={styles.zero} // Custom class for zero button
          />
          <CalculatorButton label="." onClick={() => handleClick(".")} dataTestId="dot" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
