import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {DynamicVaraibles,DynamicExpression,DynamicFunctionCall} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DynamicVaraibles />
    <hr></hr>
    <DynamicExpression />
    <hr />
    <DynamicFunctionCall />
  </StrictMode>,
)
