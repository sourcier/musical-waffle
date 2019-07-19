import React from "react"
import { render, hydrate } from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "bootstrap/dist/css/bootstrap.min.css"
import configureStore from "./store/configureStore"

const rootElement = document.getElementById("root")

rootElement.hasChildNodes()
    ? hydrate(
        <Provider store={configureStore()}>
            <App />
        </Provider>,
        document.getElementById("root")
    )
    : render(
        <Provider store={configureStore()}>
            <App />
        </Provider>,
        document.getElementById("root")
    )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
