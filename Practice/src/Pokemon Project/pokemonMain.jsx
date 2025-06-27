import { useEffect, useState } from "react";
import { PokemonCardList } from "./pokemonCardList";
import { PokemonInput } from "./pokemonInput";

export const PokemonProject = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detailData, setDetailData] = useState([]);
  const [searchInput,setSearchInput]=useState("")


  const apiFetch = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");

      if (!res.ok) {
        throw new Error(`Error ${res.statusText}`);
      }

      const data = await res.json();

      const pokemonDetails = await Promise.all(
        data.results.map(async (poke) => {
          const res = await fetch(poke.url);
          return await res.json();
        })
      );

      setDetailData(pokemonDetails)
      setPokemon(data.results);
      console.log(data.results);
    } catch (e) {
      console.error(e);
      setError("Error while fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    apiFetch();
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <>
      {loading ? (
        <h1>Data is loading please wait</h1>
      ) : (
        <div className="flex flex-col justify-center items-center bg-blue-100 gap-2">
          <PokemonInput searchInput={searchInput} setSearchInput={setSearchInput}/>
          <PokemonCardList pokemon={pokemon} detailData={detailData} searchInput={searchInput}/>
        </div>
      )}
    </>
  );
};
