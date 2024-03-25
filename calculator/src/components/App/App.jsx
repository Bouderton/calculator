import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../../public/vite.svg";
import Calculator from "../Calculator/Calculator";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>SHITTY CALCULATOR INCOMING</h1>
        <Calculator />
      </div>
    </>
  );
}

export default App;
