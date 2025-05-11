import { NavLink } from "react-router"
import { Home } from "../../pages/home"
import { Contact } from "../../pages/contact"
import { About } from "../../pages/about"
import { Movie } from "../../pages/movie"


export const Header=()=>{
    const getNavStyle=({isActive})=>{
        return `${isActive ? "text-blue-600" : "text-white"}`
    }
    return(
        <>
            <div className="flex justify-between bg-black text-white">
                <div>
                    <p>E-Commerce Website</p>
                </div>
                <div className="flex gap-3">
                    <NavLink to={"/"} content={<Home />} className={({isActive}) => `${isActive ? "text-blue-600" : "text-white"}`}>Home</NavLink>
                    <NavLink to={"/contact"} content={<Contact />} className={getNavStyle}>Contact</NavLink>
                    <NavLink to={"/movie"} content={<Movie />} className={getNavStyle}>Movie</NavLink>
                    <NavLink to={"/about"} content={<About />}>About</NavLink>
                </div>
            </div>
        </>
    )
}