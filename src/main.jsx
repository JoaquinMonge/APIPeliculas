import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./Home";
import { BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);
