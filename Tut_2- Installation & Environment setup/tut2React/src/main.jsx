import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {FirstTime} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstTime />
  </StrictMode>,
)
