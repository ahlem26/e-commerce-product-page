import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";



function Layout() {
    const [cartCount, setCartCount] = useState(0);
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar cartCount={cartCount} />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;