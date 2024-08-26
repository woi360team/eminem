import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/css/bootstrap.min.css'
import './assets/css/mdb.min.css'
import './assets/css/plugins.css'
import './assets/css/coloring.css'
import './assets/css/colors/scheme-01.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
