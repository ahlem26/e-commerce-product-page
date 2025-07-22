import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Blog() {
  const [cartCount, setCartCount] = useState(0);
      return (
          <div className="max-h-screen">
              {/* Menu */}
              <Navbar cartCount={cartCount}/>
              blog
          </div>
      );
}
