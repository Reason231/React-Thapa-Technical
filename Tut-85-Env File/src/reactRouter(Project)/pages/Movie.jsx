import { useLoaderData } from "react-router-dom"
import {Card} from "../components/UI/Card.jsx"

export const Movie=()=>{

    // It gets the api data from the getAPIData.jsx file
    //useLoaderData() is a React Router hook that allows a component to access the data provided by its route’s loader function.

    // Since the /movie route has a loader (getMoviesData), calling useLoaderData() inside Movie.jsx gives you the result of that loader.
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