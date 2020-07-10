import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './App'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app')
)
