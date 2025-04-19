import { useEffect, useState } from "react"
import { PokemonCard } from "./PokemonCard"


export const Pokemon =() =>{
    const [detailedTask,setDetailedTask]=useState([])

    useEffect(()=>{
            const fetchAPI=async()=>{
                const res=await fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
                const data=await res.json()
                // console.log(data)
                
                const detailedData=data.results.map(async(detailedData)=>{
                    const res= await fetch (detailedData.url)
                    const data=await res.json()
                    return data
                })

                const allDetailedData=await Promise.all(detailedData)

                setDetailedTask(allDetailedData)
            }
            fetchAPI()
        },[])

        console.log(detailedTask)
    return(
        <>
            <h1>Let's catch Pokemon</h1>
            <input type="text" className="border-2" placeholder="Enter Pokemon"/>

            <PokemonCard tasks={detailedTask}/>
        </>
    )
}