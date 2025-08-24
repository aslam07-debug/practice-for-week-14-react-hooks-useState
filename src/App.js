import UseState from "./components/UseState";
import { useState } from "react";
function App() {
  return (
    <>
      <UseState />
      {console.log(useState("light"))}
    </>
  );
}

export default App;
