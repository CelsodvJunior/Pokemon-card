import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global-styles.css'
import Home from './pages/home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
