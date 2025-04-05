import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Todo} from "./Projects/ToDo/1.Todo"
import {TodoTimer} from "./Projects/ToDo/2.ToDo_Timer"
import { Practice } from './Projects/ToDo/Practice'
import {Project3} from "./Projects/ToDo/3. Delete and ClearAll"
import "../src/index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <Todo /> */}
      <TodoTimer />
      {/* <Practice /> */}
  </StrictMode>,
)
