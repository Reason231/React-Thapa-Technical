import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Looping} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Looping/>
  </StrictMode>,
)
