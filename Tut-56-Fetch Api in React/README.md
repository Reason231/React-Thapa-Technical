### Main Note
- We have divided this video into two folders
1. Tut56.FetchApi.jsx is to explain how to fetch the data
2. Tut56.PokemonCard.jsx is to create the pokemon website from another api.


## Fetching the API data in react
- Fetch Api Link => https://jsonplaceholder.typicode.com/posts
- Pokemon Api Link => https://pokeapi.co/api/v2/pokemon/pikachu


## Note1 of FetchApi.jsx. We should use useEffect when fetching data because:

🚫 If we **don't** use useEffect:
- The fetch call would run on every render.
- Updating state with the fetched data causes a re-render.
- That re-render triggers the fetch again... causing an infinite loop! 🔁
- You can observe this in the browser’s **Network tab** — requests keep firing non-stop!

✅ But when we wrap the fetch inside useEffect with an empty dependency array `[]`:
- It runs **only once**, when the component is mounted.
- This prevents the infinite request loop.


## Note2 FetchApi.jsx. Why should we use two await while fetching the data
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();  // Parses the body into usable JSON

 1. await fetch(...)
This line waits for the network request to complete and gives you the raw response object (res):

{
  ok: true,
  status: 200,
  json: function() { ... } // this returns a Promise
  text: function() { ... }
  ...
}
So it's just the HTTP response, but not the actual data yet.


2. await res.json()
- The response body (e.g. the JSON data) is streamed, and needs to be parsed.
- .json() is an asynchronous function that returns a Promise, so you need to await it too:
- Wait until all the data from the response body has been completely read and parsed into a usable JavaScript object or array


## Read the notion notes for the comparision between the modern and traditional async promises.


