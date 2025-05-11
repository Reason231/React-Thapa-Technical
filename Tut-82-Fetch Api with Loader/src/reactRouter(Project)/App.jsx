import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import AppLayout from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "../api/GetAPIData";

export const App = () => {


  // New Method
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, // this means path="/"
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "movie",
          loader:getMoviesData,
          element: <Movie />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
