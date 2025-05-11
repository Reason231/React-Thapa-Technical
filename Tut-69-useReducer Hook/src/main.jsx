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
import {CustomHookMain} from "./Hooks/6.customHook(Tut66)/0.customHookMain"
import {Tut69UseReducer} from "./Hooks/7.useReducerHook(Tut69)/useReducer"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      {/* <UseStateMain /> */}
      {/* <UseEffectMain /> */}
      {/* <UseRefMain /> */}
      {/* <Tut63UseIdHook /> */}
      {/* <Tut65PropsDrill /> */}

      {/* We need to wrap it as they are children */}
      {/* <BioProvider>
        <Tut64ContextMain />
      </BioProvider> */}

    {/* <CustomHookMain /> */}
      <Tut69UseReducer />
    </>
    </StrictMode>
  )

