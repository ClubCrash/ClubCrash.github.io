import React from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'

//
document.addEventListener('DOMContentLoaded', initApp)
function initApp() {
  const appRoot = createRoot(document.querySelector('#root'))
  appRoot.render(<App />)
}
