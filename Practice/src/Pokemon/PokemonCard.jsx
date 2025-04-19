export const PokemonCard = ({ tasks }) => {
    // console.log(detailedTask)
  return (
    <>
      {tasks.map((currData, index) => (
        <div
          className="border-2 w-[40dvw] h-[30dvh] flex justify-center items-center flex-col"
          key={index}
        >
          <figure className="border-2 w-[20dvw] h-[10dvh]"></figure>
          <div>
            <p>{currData.name}</p>
            <button>Type: grass, poison</button>
          </div>

          <div className="flex gap-2 w-[30dvw]">
            <span>Height: 7</span>
            <span>Weight: 69</span>
            <span>Speed: 45</span>
          </div>

          <div className="flex gap-2 w-[30dvw]">
            <span>Experience: 7</span>
            <span>Attack: 69</span>
            <span>Ability: 45</span>
          </div>
        </div>
      ))}
    </>
  );
};
