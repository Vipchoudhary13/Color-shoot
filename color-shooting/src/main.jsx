import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CircleProvider } from './context/circleContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CircleProvider>
      <App />
    </CircleProvider>
  </React.StrictMode>
)
