import React from 'react'
import { render, hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'

import App from './App'
import theme from './libs/theme'
import configureStore from './store/configureStore'

import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const rootElement = document.getElementById('root')

rootElement.hasChildNodes()
  ? hydrate(
      <Provider store={configureStore()}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>,
      document.getElementById('root')
    )
  : render(
      <Provider store={configureStore()}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>,
      document.getElementById('root')
    )
