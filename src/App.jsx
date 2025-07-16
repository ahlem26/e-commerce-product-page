import React, { useState } from "react";
import 'react-photo-view/dist/react-photo-view.css';
import ProductItem from "./composents/ProductItem";

const images = [
  {
    image_min: "/images/image-product-1-thumbnail.jpg",
    image_big: "/images/image-product-1.jpg"
  },
  {
    image_min: "/images/image-product-2-thumbnail.jpg",
    image_big: "/images/image-product-2.jpg"
  },
  {
    image_min: "/images/image-product-3-thumbnail.jpg",
    image_big: "/images/image-product-3.jpg"
  },
  {
    image_min: "/images/image-product-4-thumbnail.jpg",
    image_big: "/images/image-product-4.jpg"
  }
];

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [mainImage, setMainImage] = useState(images[0].image_big);

  return (
    <div className="max-h-screen">
      {/* Menu */}
      <nav className="bg-white">
        <div className="max-w-6xl mx-auto px-4 pb-5 pt-3 border-b border-gray-200">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-12">
              <div className="text-2xl font-bold">
                <img src="/images/logo.svg" alt="logo" />
              </div>
              <div className="space-x-6 hidden md:flex">
                <a href="#collections" className="text-gray-400 hover:text-black">Collections</a>
                <a href="#men" className="text-gray-400 hover:text-black">Men</a>
                <a href="#women" className="text-gray-400 hover:text-black">Women</a>
                <a href="#about" className="text-gray-400 hover:text-black">About</a>
                <a href="#contact" className="text-gray-400 hover:text-black">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="relative">
                <img
                  src="/images/icon-cart.svg"
                  alt="Panier"
                  className="w-5 h-5 cursor-pointer"
                />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>

              <img src="/images/image-avatar.png" alt="Avatar" className="w-9 h-9 rounded-full cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Section produit */}
      <ProductItem mainImage={mainImage} images={images} setQuantity={setQuantity} quantity={quantity} setCartCount={setCartCount} cartCount={cartCount} setMainImage={setMainImage} />
    </div>
  );
}

export default App;
