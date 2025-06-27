import { NavLink } from "react-router-dom"

 export const Card=({currData})=>{
    const {Poster,imdbID,Title}=currData
    return(
        <div className="flex gap-3">
            <div className="flex flex-col">
            <img src={Poster} alt="" />
            <p>{Title}</p>
            <NavLink to={`/movie/${imdbID}`} className="bg-red-500">Watch Now</NavLink>
            </div>
        </div>
    )
 }