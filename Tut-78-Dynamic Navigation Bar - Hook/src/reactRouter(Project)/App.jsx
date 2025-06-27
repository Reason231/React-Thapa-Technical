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

export const App = () => {
  // Old Method
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     It is the parent element which has the AppLayout that covers the children
  //     <Route path="/" element={<AppLayout />}>
  //         <Route index element={<Home />} />             {/* for "/" */}
  //       <Route path="about" element={<About />} />       {/* for "/about" */}
  //       <Route path="movie" element={<Movie />} />       {/* for "/movie" */}
  //       <Route path="contact" element={<Contact />} />   {/* for "/contact" */}
  //     </Route>
  //   )
  // );

  // New Method
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
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
