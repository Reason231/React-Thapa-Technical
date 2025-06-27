import axios from "axios";

const api=axios.create({
    baseURL:`https://www.omdbapi.com/`,
})

// creating a get request function
export const getMovie=()=>{
    // It automatically contains the baseURL and need to append the rest url
    return api.get(`?s=batman&apikey=${
    import.meta.env.VITE_API_KEY
  }&page=1`)
}