## Fetch Api Data
- We are going to fetch the data without using the useEffect()
- Load and useLoaderData() hook

## Steps
- Creating the api folder under the src file.
- Getting the api url from the OMDb API website
https://www.omdbapi.com/
- Click on the API key button
- Key => e4873ffc
- Example fetch => https://www.omdbapi.com/?i=tt3896198&apikey=e4873ffc&s=titanic&page=1
- Go the App.jsx file, and use the loader hook in the movie, so that it can only fetch the api when the movie route is loaded.
- To use the api data in the movie component, we use the useLoaderData()


## Creating the Card UI Layout
- Create the Card UI Layout under the UI folder of components folder