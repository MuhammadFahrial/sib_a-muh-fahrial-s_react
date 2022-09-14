import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Clock from "./components/Clock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ErrorBoundary>
        <Clock />
      </ErrorBoundary>
    </div>
  );
}

export default App;
