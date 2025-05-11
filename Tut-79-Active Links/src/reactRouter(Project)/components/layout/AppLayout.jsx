import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

const AppLayout=()=>{
    return(
        <>
        <Header />
        {/* Outlet contains the dynamic children components */}
        <Outlet />
        <Footer />
        </>
    )
}

export default AppLayout