// It will be loaded in the movie route only, see App.jsx
export const getMoviesData=async() => {
    try{
        const response=await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=e4873ffc&s=titanic&page=1")
        const data=await response.json()
        return data
    }
    catch(error){
        console.log(error)
    }
}