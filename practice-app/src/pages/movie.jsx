import { useLoaderData } from "react-router-dom"
import { Card } from "../components/UI/Card"

export const Movie=()=>{
    const movieData=useLoaderData()
    return(
        <>
        {movieData && movieData.Search?.map((currData) => (
            <Card currData={currData} key={currData.imdbID}/>
        ))}
        </>
    )
}