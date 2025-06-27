import { useLoaderData } from "react-router-dom"

export const MovieDetails=()=>{
    const movieDetails=useLoaderData()
    console.log(movieDetails)

    const {Title,Year,Rated}=movieDetails
    return(
        <>
        <p>{Title}</p>
        <p>{Year}</p>
        <p>{Rated}</p>
        </>
    )
}