import React, { useState } from "react";
import 'react-photo-view/dist/react-photo-view.css';
import ProductGallery from "../components/products/ProductGallery.jsx";

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

function ProductPage() {
  const [quantity, setQuantity] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [mainImage, setMainImage] = useState(images[0].image_big);

  return (
    <div className="max-h-screen">

      {/* Section produit */}
      <ProductGallery mainImage={mainImage} images={images} setQuantity={setQuantity} quantity={quantity} setCartCount={setCartCount} cartCount={cartCount} setMainImage={setMainImage} />
    </div>
  );
}

export default ProductPage;
