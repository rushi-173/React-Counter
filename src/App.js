import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  function Add() {
    setValue(value + 1);
  }
  function Subtract() {
    setValue(value - 1);
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{value}</h1>
      <button onClick={Add}>+</button>
      <button onClick={Subtract}>-</button>
    </div>
  );
}
