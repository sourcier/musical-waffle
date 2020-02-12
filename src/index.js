import React from 'react'
import { render, hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configureStore'

const rootElement = document.getElementById('root')

rootElement.hasChildNodes()
    ? hydrate(
          <Provider store={configureStore()}>
              <App />
          </Provider>,
          document.getElementById('root')
      )
    : render(
          <Provider store={configureStore()}>
              <App />
          </Provider>,
          document.getElementById('root')
      )
