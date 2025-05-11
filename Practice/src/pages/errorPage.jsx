import { NavLink, useNavigate, useRouteError } from "react-router"

export const ErrorPage=()=>{
    const error=useRouteError()
    console.log(error.statusText)

    const navigate=useNavigate()

    function previousPage(){
        navigate(-1)
    }

    return(
        <div className="h-screen justify-center flex items-center flex-col">

        I am from the Error Page
        <NavLink to="/">Home Page</NavLink>
        <button onClick={previousPage}>Previous Page</button>
        </div>
    )
}