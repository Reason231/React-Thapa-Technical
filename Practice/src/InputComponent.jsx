import { useState } from "react"


export const InputComponent=({handleSubmitBtn})=>{
    let [inputValue,setInputValue] = useState("")

    function onSubmit(e){
        e.preventDefault()
        if(inputValue == "") return
        handleSubmitBtn(inputValue)
        setInputValue("")
    }
    
    
    return(
        <>
    <div className="flex">
        <form onSubmit={onSubmit}>
          <input type="text" className="bg-white h-10 rounded-xs text-black" value={inputValue} onChange={(event)=>setInputValue(event.target.value)}/>
          <button className="bg-blue-600 text-white p-2" type="submit">Add Task</button>
        </form>
          </div>
        </>
    )
}



