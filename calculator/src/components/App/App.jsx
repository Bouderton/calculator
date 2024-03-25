import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../../public/vite.svg";
import Calculator from "../Calculator/Calculator";
import Screen from "../Screen/Screen";
import ButtonGrid from "../ButtonGrid/ButtonGrid";
import Button from "../Button/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="calc__header">SHITTY CALCULATOR INCOMING</h1>
        <Calculator>
          <Screen value={0} />
          <ButtonGrid>
            <Button
              value={0}
              className=""
              onClick={() => {
                console.log("Click");
              }}
            />
          </ButtonGrid>
        </Calculator>
      </div>
    </>
  );
}

export default App;
