import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/index.css"
import { UseStateMain } from './Hooks/1.useState(Tut46-51)/useStateMain'
import { UseEffectMain } from './Hooks/2.useEffect(Tut52-Tut60)/useEffectMain'
import { UseRefMain } from './Hooks/3.useRef(Tut61-62)/useRefMain'
import { Tut63UseIdHook } from './Hooks/4.useId(Tut63)/useId'
import { Tut65PropsDrill } from "./Hooks/5.contextHook(Tut64)/PropsDrilling"
import { BioProvider } from './Hooks/5.contextHook(Tut64)/1.useContext'
import { Tut64ContextMain } from './Hooks/5.contextHook(Tut64)/2.useContextMain'
import {ThemeProvider} from "./Hooks/5.contextHook(Tut64)/ContextPractice/App"
import { ThemeToggler } from './Hooks/5.contextHook(Tut64)/ContextPractice/useContextMain'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      {/* <UseStateMain /> */}
      {/* <UseEffectMain /> */}
      {/* <UseRefMain /> */}
      {/* <Tut63UseIdHook /> */}
      {/* <Tut65PropsDrill /> */}

      {/* We need to wrap it */}
      {/* <BioProvider>
        <Tut64ContextMain />
      </BioProvider> */}

      {/* Context Practice */}
      <ThemeProvider>
        <ThemeToggler />
      </ThemeProvider>
    </>
  </StrictMode>
)
