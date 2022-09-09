import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Hero from "./components/organisms/hero/Hero";
import Main from "./components/organisms/main/Main";
import Card from "./components/organisms/card/Card";
import Footer from "./components/organisms/footer/Footer";
import Navbar from "./components/organisms/navbar/Navigation";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* <Navbar />
      <Hero />
      <Main />
      <Card />
      <Footer /> */}
    </React.StrictMode>
  </>
);
