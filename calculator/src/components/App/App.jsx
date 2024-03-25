import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../../public/vite.svg";
import Calculator from "../Calculator/Calculator";
import Screen from "../Screen/Screen";
import ButtonGrid from "../ButtonGrid/ButtonGrid";
import Button from "../Button/Button";
import "./App.css";

function App() {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  return (
    <>
      <div>
        <h1 className="calc__header">SHITTY CALCULATOR INCOMING</h1>
        <Calculator>
          <Screen value={0} />
          <ButtonGrid>
            {btnValues.flat().map((btn, i) => {
              return (
                <Button
                  key={i}
                  className={btn === "=" ? "equals" : ""}
                  value={btn}
                  onClick={() => {
                    console.log(`${btn} clicked!`);
                  }}
                />
              );
            })}
          </ButtonGrid>
        </Calculator>
      </div>
    </>
  );
}

export default App;
