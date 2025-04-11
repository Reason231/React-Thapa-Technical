import { useEffect, useState } from "react"
import { PokemonCard } from "./PokemonCard"

export const Pokemon=()=>{
    const API = "https://pokeapi.co/api/v2/pokemon?limit=30"

    const [detailedData,setDetailedData]=useState([])
    const [searchData,setSearchedData]=useState("")

    useEffect(()=>{
        const fetchData=async()=>{
            try{

                const data=await fetch(API)
                const res=await data.json()
                // console.log(res)

                const detailedResponse=res.results.map(async(currDetailedData)=>{
                    const detailedDataUrl=currDetailedData.url
                    const data=await fetch(detailedDataUrl)
                    const res=await data.json()
                    return res
                })
                
                const allDetailedData=await Promise.all(detailedResponse)
                setDetailedData(allDetailedData)
            }
            catch(e){
                console.log(e)
            }
        }
        fetchData()
    },[])

    
    console.log(detailedData)

    // Search functionality 
        const searchedData=detailedData.filter((filteredData)=>{
           return filteredData.name.toLowerCase().includes(searchData.toLowerCase())
        })
    
    return(
        <>
          <div className="bg-blue-100 min-h-screen flex flex-col items-center gap-4">
            <h1 className="mt-4">Let's Catch Pokemon</h1>
            <input type="text" placeholder="Enter Pokemon" className="border-3 rounded-md border-blue-500" onChange={(e)=>setSearchedData(e.target.value)} value={searchData}/>
          <PokemonCard detailedData={searchedData}/>
          </div>
        </>
    )
}