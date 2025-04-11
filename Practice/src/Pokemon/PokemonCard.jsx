export const PokemonCard=({detailedData})=>{
    return(
        <>
        {detailedData.map((currData,index)=>(
            <div className="flex flex-wrap gap-6 pl-4" key={index}>
     
                 <div className="border-2 h-[35dvh] w-[25dvw] rounded-xl flex justify-center items-center flex-col gap-3">
                     <figure className="h-22 w-22 border-2 p-2 bg-blue-200 rounded-md border-blue-50">
                         <img src="../../public/vite.svg" alt="" className="h-18"/>
                     </figure>
                     <p>Name: {currData.name}</p>
                     <button>Type: Grass, Postion</button>
     
                     <div className="flex gap-2">
                         <p>Height: 24</p>
                         <p>Weight:</p>
                         <p>Speed: </p>
                     </div>
     
                     <div className="flex">
                         <p>Experience: </p>
                         <p>Attack: </p>
                         <p>Ability:</p>
                     </div>
                 </div>
               
             </div>

        ))}
        </>
    )
}