import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Method1,Method2,Method3,Method4} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Method1 />
    <Method2 />
    <Method3 />
    <Method4 />
  </StrictMode>,
)
