import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Shop() {
    const [cartCount, setCartCount] = useState(0);
    return (
        <div className="max-h-screen">
            {/* Menu */}
            <Navbar cartCount={cartCount}/>
            shop
        </div>
    );
}
