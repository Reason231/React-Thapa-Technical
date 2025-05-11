import { createBrowserRouter, RouterProvider } from "react-router";
import { AppLayout } from "./components/layout/AppLayout";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
import { ErrorPage } from "./pages/errorPage";
import { Movie } from "./pages/movie";
import { getAPIData} from "./api/GetAPIData";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage />,
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />}
          ,
          {

            path: "/contact",
            element: <Contact />
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path:"/movie",
            element:<Movie />,
            loader:getAPIData
          }
        ]
      }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
