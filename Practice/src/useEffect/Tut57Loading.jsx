import { useEffect, useState } from "react"

export const Tut57Loading=()=>{
    const [pikachu,setPikachu]=useState("")
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    async function apiFetch(){
        try{
            const res=await fetch("https://pokeapi.co/api/v2/pokemon/pikach")
            
            if(!res.ok){
                throw new Error(`Error ${res.statusText}`)
            }

            const data=await res.json()
            setPikachu(data)
        }
        catch(e){
            console.error(e)
            setError("Failed to fetch data")
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        apiFetch()
    },[])

    if(error) return <h1>{error}</h1>

    return(
        <>
            {loading ? (<h1>Data is still loading</h1>) : (
                <div>
                    {pikachu?.species?.name}
                </div>
            )}
        </>
    )
}