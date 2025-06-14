// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./index.css";

// const root = createRoot(document.getElementById("root"));
// root.render(<App />);
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);