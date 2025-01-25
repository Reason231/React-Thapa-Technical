import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NetflixSeries from './components/NetflixSeries'
import {Hooks} from "./components/Hooks/0.HooksMain"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <NetflixSeries/> */}
    <Hooks />
  </StrictMode>,
)
