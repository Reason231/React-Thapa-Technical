import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CardList from './components/CardList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList/>
  </StrictMode>,
)
