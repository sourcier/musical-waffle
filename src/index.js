import React from 'react'
import { render, hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configureStore'
import { restoreUserSession } from './store/reducers/session'

const rootElement = document.getElementById('root')

restoreUserSession().then((session) => {
    rootElement.hasChildNodes()
        ? hydrate(
              <Provider store={configureStore({ session })}>
                  <App />
              </Provider>,
              document.getElementById('root')
          )
        : render(
              <Provider store={configureStore({ session })}>
                  <App />
              </Provider>,
              document.getElementById('root')
          )
})
