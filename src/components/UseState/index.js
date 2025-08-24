import "./UseState.css";
import { useState } from "react";
const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  return (
    <div className="state" className={`${theme} state`}>
      <h1>UseState Component</h1>
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "light" ? "dark" : "light";
          })
        }
      >
        {theme}
      </button>
      <h2>DISPLAY COUNT HERE</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
