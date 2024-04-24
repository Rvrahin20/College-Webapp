import React from "react";
import { Link,Outlet } from "react-router-dom";
import Navbar1 from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div>
         <header ><Navbar1/></header>   
            
            <Outlet />{}
            <Footer/>
        </div>
    )

}