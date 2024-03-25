import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../../public/vite.svg";
import Calculator from "../Calculator/Calculator";
import Screen from "../Screen/Screen";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="calc__header">SHITTY CALCULATOR INCOMING</h1>

        <Calculator>
          <Screen />
        </Calculator>
      </div>
    </>
  );
}

export default App;
