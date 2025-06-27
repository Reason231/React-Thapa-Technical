import { useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage=()=>{
    const error=useRouteError()
    console.log(error)

    const navigate=useNavigate()

    function handleGoBack(){
        navigate(-1)
    }

    if(error.status==404){
        return(
            <>
        <button onClick={handleGoBack}>Go back</button>
        
        </>
    )
}
}