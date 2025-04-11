## Handling Loading and Error State and Adding More Data

1. use of Loading state
- React tries to render before the fetch finishes, so we need to use the <Loading state> in tackle the problem.

2. use of error state
- If the occurs while fetching the data or the api link is misspelled then we need to show the error
- For example wrong api link: https://pokeapi.co/api/v2/pokemonsdf/pikachu
- Error state handling 
if (error) {
        return <h1 className="font-bold text-4xl text-red-500">{error}</h1>;
      }

3. Adding More data