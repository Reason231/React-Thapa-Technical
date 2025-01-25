import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let age=18

// This method is inefficient because we copy and paste the code
export function Method1() {

  if(age>=18){
    return (
      <>
    <h1>Method 1: Age 18 shows</h1>
    <button>You can watch this show</button>
    </>
  )
} else{
    return (
      <>
    <h1>Method 1: Age 18 shows so</h1>
    <button>You can't watch this show</button>
    </>
    )
}
}

// Method 2 using ternary operator
export const Method2=()=>{
  return(
    <>
    <h1>Method 2: Age 18 shows</h1>
    <button>{age >=18 ? "You can watch this show" : "You can't watch this show"}</button>
    </>
  )
} 

// Method 3 through value change
let canWatch="You can't watch this show"
// It changes the value if the age is greater than 18
if (age>=18) canWatch="You can watch this show"

export const Method3=()=>{
  return(
    <>
    <h1>Method 3: Age 18 shows</h1>
    <button>{canWatch}</button>
    </>
  )
} 

// Method 4 through functional call
const ageChecker=()=>{
  // If age 18 cha vane return first ko garcha natra tala ko
  if(age>=18) return "You can watch this show"
  return "You can't watch this show"
}

export const Method4=()=>{
  return(
    <>
    <h1>Method 4: Age 18 shows</h1>
    <button>{ageChecker()}</button>
    </>
  )
} 

