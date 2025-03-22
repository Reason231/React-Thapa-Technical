  export function DynamicUserInput(){
    const number=Number(prompt("Write a number")) // This runs twice in development due to react double render
    return(
      <>
      <h1>The dynamic number of user is {number}</h1>
      </>
    )
  }

  export function DynamicVariables(){
    const name="Dynamic Varaibles"
    const example="Example 1"
    return (
      <>
      <h1>{name}</h1>
      <p>{example}</p>
    </>
  )
}

export const DynamicExpression=()=>{
  const name="Dynamic Expression"
  const rating=5
  return(
    <>
    <h1>{name}</h1>
    <p>{rating + 5}</p>
    </>
  )
}

export const DynamicFunctionCall=()=>{
  const name="Dynamic Function Call"
  const valueFunction=()=>{
    const value="This is the Function Value"
    return value
  }

  return (
    <>
    <h1>{name}</h1>
    <p>{valueFunction()}</p>
    </>
  )
}



