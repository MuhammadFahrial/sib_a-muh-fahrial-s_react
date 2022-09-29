import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import UsersList from "./features/users/UsersList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="App">
        <UsersList />
      </main>
    </>
  );
}

export default App;
