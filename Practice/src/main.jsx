import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Todo } from './Project/Todo'
import {LogicalOperator} from "./Short-Circuit-Project/Logical"
import {Tut46useState} from "./tut46-useStateProject/React"
import { Tut48Form } from './Form Project/Tut48'
import { Tut52useEffect } from './useEffect/TUT53useEffect'
import {Tut54useEffectChallenge} from "./useEffect/Tut54Challange"
import {Tut56ApiFetch} from "./useEffect/Tut56ApiFetch"
import {Tut57Loading} from "./useEffect/Tut57Loading"
import  {PokemonProject} from "./Pokemon Project/pokemonMain"
import {UseRef} from "./useRef/useRef"
import {Tut75ReactRouter} from "./React Router/Tut-75"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Todo /> */}
    {/* <LogicalOperator /> */}
    {/* <Tut46useState /> */}
    {/* <Tut48Form /> */}
    {/* <Tut52useEffect /> */}
    {/* <Tut54useEffectChallenge /> */}
    {/* <Tut56ApiFetch /> */}
    {/* <Tut57Loading /> */}
    {/* <PokemonProject /> */}
    {/* <UseRef /> */}
    <Tut75ReactRouter />
  </StrictMode>,
)
