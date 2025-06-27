import { useRef } from "react"

export const UseRef=()=>{
    const userName=useRef(null)
    const password=useRef(null)

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(userName.current.value,password.current.value)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>

        <input type="text" ref={userName} className="border-red-400 border-2">
            
        </input>

        <input type="password" ref={password} className="border-blue-400 border-2"/>

        <button >Submit</button>
        </form>
        </>
    )
}