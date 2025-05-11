import { useLoaderData } from "react-router"
import { Card } from "../components/UI/Card"

export const Movie=()=>{
    const moviesData=useLoaderData()
    console.log(moviesData)

    return(
        <>
            <ul>
                {moviesData && moviesData.Search.map((currData)=>(
                    <Card moviesData={currData} key={currData.imdbId}/>
                ))}
                I am from movie
            </ul>
        </>
    )
}