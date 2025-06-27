import { useEffect, useState } from "react"

export const PokemonInput=({searchInput,setSearchInput})=>{
 
    return(
        <>
        <h1 className="text-blue-700 text-2xl font-semibold">
            Let's Catch Pokemon
        </h1>

        <input type="text" className="border-2 border-blue-500 rounded-md w-[22dvw] pl-2" placeholder="Enter Pokemon" onChange={(e)=>setSearchInput(e.target.value)}/>
        </>
    )
}