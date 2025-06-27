export const getMoviesData=async()=>{
    try{
        const response = await fetch(
      `https://www.omdbapi.com/?s=batman&apikey=${import.meta.env.VITE_API_KEY}&page=1`
    );

        const data=await response.json()
        console.log(data)
        return data
    }
    catch(e){
        console.log(`Error while fetching the movie Data ${e}`)
    }
}