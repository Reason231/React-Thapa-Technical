import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Circuit } from './Circuit.jsx'
import { StateManipulation } from './StateManipulation.jsx'
import { UseStateChallenge } from './useStateChallange.jsx'
import {Form} from "./Form/form.jsx"
import { Form2 } from './Form2/Form2.jsx'
import {Pokemon} from "./Pokemon/Pokemon.jsx"
import { CustomHookMain } from './CustomHook/0.customHookMain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  {/* <Circuit /> */}
  {/* <StateManipulation /> */}
  {/* <UseStateChallenge /> */}
  {/* <Form /> */}
  {/* <Form2 /> */}
  {/* <Pokemon /> */}
  <CustomHookMain />


  </StrictMode>,
)
