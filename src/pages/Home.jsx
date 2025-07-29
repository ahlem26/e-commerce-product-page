import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
    const [cartCount, setCartCount] = useState(0);
    return (
        <div className="max-h-screen">
            {/* Menu */}
            <Navbar cartCount={cartCount}/>
            
            <div>

            </div>

            <div>
                <h1>Trending Products</h1>
                <div>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
