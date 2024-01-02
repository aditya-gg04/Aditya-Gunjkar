import React from "react";
import Navbar1 from "../HomePage/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
function Layout() {
    return ( 
        <>
            <Navbar1 />
            <Outlet />
            <Footer />
        </>
     );
}

export default Layout;
