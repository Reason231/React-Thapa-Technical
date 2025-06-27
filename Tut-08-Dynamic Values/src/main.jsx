import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {DynamicUserInput,DynamicVariables,DynamicExpression,DynamicFunctionCall} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <DynamicUserInput />
    <hr />
    <DynamicVariables/>
    <hr></hr>
    <DynamicExpression />
    <hr />
    <DynamicFunctionCall />
  </StrictMode>,
)
