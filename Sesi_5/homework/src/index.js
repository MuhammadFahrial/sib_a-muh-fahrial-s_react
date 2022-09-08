import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Hero from "./components/organisms/hero/Hero";
import Main from "./components/organisms/main/Main";
import Card from "./components/organisms/card/Card";
import Footer from "./components/organisms/footer/Footer";
import Navbar from "./components/organisms/navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <App />
      {/* <Navbar />
      <Hero />
      <Main />
      <Card />
      <Footer /> */}
    </React.StrictMode>
  </>
);
