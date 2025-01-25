


  export function DynamicVaraibles(){
    const name="Dynamic Varaible"
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


