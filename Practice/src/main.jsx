import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Circuit } from './Circuit.jsx'
import { StateManipulation } from './StateManipulation.jsx'
import { UseStateChallenge } from './useStateChallange.jsx'
import { Pokemon } from './Pokemon/Pokemon.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  {/* <Circuit /> */}
  {/* <StateManipulation /> */}
  {/* <UseStateChallenge /> */}
  <Pokemon />


  </StrictMode>,
)
