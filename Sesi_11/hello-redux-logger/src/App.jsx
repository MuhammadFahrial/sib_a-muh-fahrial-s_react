import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CounterClass from "./features/counter/CounterClass";
import CounterFn from "./features/counter/CounterFn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="App">
        <CounterFn />
        <CounterClass />
      </main>
    </>
  );
}

export default App;
