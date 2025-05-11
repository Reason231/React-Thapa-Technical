export const getAPIData=async()=>{
    try{

        const res=await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=e4873ffc&s=titanic&page=1")
        const data= await res.json()
        return data
    }
   
    catch(error){
        console.log(error)
    }

}