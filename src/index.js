import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalHooksProvider } from "@devhammed/use-global-hook";
import stores from "./context/_index";

ReactDOM.render(
  <React.StrictMode>
    <GlobalHooksProvider hooks={stores}>
      <App />
    </GlobalHooksProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
