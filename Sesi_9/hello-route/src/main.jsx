import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Router yang kita pakai kali ini adalah BrowserRouter. Router ini akan kita simpan sebagai pembungkus komponen App kita di file index.js, agar semua yang di dalam nya akan menjadi children dari Router dan dapat kita implementasikan fitur-fitur react router
