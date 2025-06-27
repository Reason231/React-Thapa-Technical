import { useEffect, useState } from "react"

export const Tut56ApiFetch=()=>{
const [apiData,setApiData]=useState({})
    const apiFetch=async() =>{
        const res=await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        const data=await res.json()
        console.log(data)
        setApiData(data)
    }

    useEffect(()=>{
        apiFetch()
    },[])

    return(
        <>
        <img src={apiData?.sprites?.front_default
} alt="" />
        </>
    )
}