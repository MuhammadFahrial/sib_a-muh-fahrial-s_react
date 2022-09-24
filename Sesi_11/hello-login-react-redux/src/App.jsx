import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AuthLoginForm from "./features/auth/AuthLoginForm";

// Import komponen AuthLoginForm yang sudah dibuat, dan render dalam fungsi return.
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="App">
        <AuthLoginForm />
      </main>
    </>
  );
}

export default App;
