import React from "react";
import { createRoot } from "react-dom/client";
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./component/App";
import store from "./redux/configureStore.dev";
import { Provider } from "react-redux";

const rootElement = document.getElementById("app");
createRoot(rootElement).render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

render(<h1 />, document.getElementById("app"))