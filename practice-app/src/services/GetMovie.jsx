export const getMovieDetailsData=async({params})=>{
    const id=params.movieID
    try{
        const res=await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`)
        const data=res.json()
        return data
    }
    catch(e){
        console.log(e)
    }
}