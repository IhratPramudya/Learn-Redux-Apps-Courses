import React from "react";
import { createRoot } from "react-dom/client";
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./component/App";

const rootElement = document.getElementById("app");
createRoot(rootElement).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

render(<h1 />, document.getElementById("app"))