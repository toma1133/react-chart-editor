import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ResetStyle, GlobalStyle } from './globalStyle'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
