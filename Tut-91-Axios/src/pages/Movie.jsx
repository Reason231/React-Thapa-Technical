import {getMovie} from "../services/GetService"
import { useEffect } from "react";

export const Movie = () => {


  const getMovieData = async () => {
    try {
      const res = await getMovie();
      console.log(res.data.Search)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <>
      <h1>Hello Movie</h1>
    </>
  );
};
