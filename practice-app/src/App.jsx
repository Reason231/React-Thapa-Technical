import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom"
import { AppLayout } from "./components/Layout/AppLayout"
import { Home } from "./pages/home"
import { Movie } from "./pages/movie"
import { ErrorPage } from "./pages/ErrorPage"
import { getMoviesData } from "./services/GetAPI"
import { MovieDetails } from "./components/UI/MovieDetails"
import { getMovieDetailsData } from "./services/GetMovie"

function App(){
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      errorElement:<ErrorPage />,
      children:[
        {
          path:"/home",
          element:<Home />
        },
        {
          path:"/movie",
          loader:getMoviesData,
          element:<Movie />
        },
        {
          path:"/movie/:movieID",
          loader:getMovieDetailsData,
          element:<MovieDetails />
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
