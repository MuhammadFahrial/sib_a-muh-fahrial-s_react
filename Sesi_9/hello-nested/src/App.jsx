import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutCompany from "./pages/AboutCompany";
import AboutMe from "./pages/AboutMe";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="about-company" element={<AboutCompany />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// Di sini kita melakukan praktek pengiriman props ke dalam element Route via atribut element
