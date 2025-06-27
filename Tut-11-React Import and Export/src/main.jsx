import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ImportedFile from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImportedFile />
  </StrictMode>,
)
