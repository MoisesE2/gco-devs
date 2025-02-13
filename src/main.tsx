import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage/>
  </StrictMode>,
)
