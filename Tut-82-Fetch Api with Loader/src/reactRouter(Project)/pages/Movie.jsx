import { useLoaderData } from "react-router-dom"
import {Card} from "../components/UI/Card.jsx"

export const Movie=()=>{

    // It gets the api data from teh getAPIData.jsx file
    const moviesData=useLoaderData()
    console.log(moviesData)
    
    return(
        <>
        <ul className="flex flex-wrap">
          {/* If moviesData exists (i.e., it’s not undefined or null)
          → then access moviesData.Search
          Then map through the Search array */}
          {moviesData && moviesData.Search.map((currMovie) => {
            return <Card key={currMovie.imdbID} currMovie={currMovie} />;
          })}
          </ul>
        </>
    )
}