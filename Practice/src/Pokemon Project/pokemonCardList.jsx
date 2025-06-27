
export const PokemonCardList = ({ pokemon, detailData, searchInput}) => {
  return (
    <div className="grid grid-cols-3 gap-1 p-4">
         {pokemon
        .filter((currData) =>
          currData.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((currData, index) => {
        const details = detailData[index];  // get the matching detail object
        return (
          <div
            className="border-2 bg-white rounded-md flex flex-col justify-center items-center h-[40dvh] gap-2 pt-6"
            key={index}
          >
            <div className="bg-blue-50">
              <img
                src={details.sprites.front_default}
                alt={currData.name}
                className="h-[20dvh] w-[13dvw]"
              />
            </div>
            <div>
              <p>Name: {currData.name}</p>
              <button className="bg-green-400 p-2 rounded-lg text-white">
                Type: {details.types.map((type) => type.type.name).join(", ")}
              </button>
            </div>

            <div className="grid grid-cols-3 p-4">
              <span>Height: {details.height}</span>
              <span>Weight: {details.weight}</span>
              <span>Speed: {details.stats[5].base_stat}</span>

              <span>Experience: {details.base_experience}</span>
              <span>Attack: {details.stats[1].base_stat}</span>
              <span>Ability: {details.abilities[0].ability.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
