import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";


// Note: Today, just change the url manually: 5173/contact
export const Tut76ReactRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(

      // One Parent Component is needed
      <Route>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/movie" element={<Movie />}/>
        <Route path="/contact" element={<Contact />}/>
      </Route>
    )
  );

  return <RouterProvider router={router}/>;
};
