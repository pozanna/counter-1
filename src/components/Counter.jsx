import "./Counter.css";
import { useState } from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="sectionsContainer">
      <div className="row">
        <Decrement counter={counter} setCounter={setCounter} />
        <div className="counterValue"> {counter} </div>
        <Increment counter={counter} setCounter={setCounter} />
      </div>
      <div className="resetContainer">
        <button
          className="resetButton"
          type="button"
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
