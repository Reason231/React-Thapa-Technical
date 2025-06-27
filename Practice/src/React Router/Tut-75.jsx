import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Movie } from "./pages/Movie"
import { Home } from "./pages/Home"
import { AppLayout } from "./components/layout/AppLayout"
import { ErrorPage } from "./pages/errorPage"

export const Tut75ReactRouter=()=>{
       const router=createBrowserRouter([
        {
            path:"/",
            element:<AppLayout />,
            errorElement:<ErrorPage />,
            children:[
                {
                    index:true,
                    element:<Home />
                },
                {
                    path:"movie",
                    element:<Movie />
                }
            ]
        }
       ])
        return (
            <>
        <RouterProvider router={router}/>
            </>
        )
}