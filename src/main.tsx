import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
