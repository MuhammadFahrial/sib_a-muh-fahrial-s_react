import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* untuk membungkus component App dan store sebagai props */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
