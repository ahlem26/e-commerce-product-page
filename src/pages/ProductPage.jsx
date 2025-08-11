import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../hook/useProductDetails";
import ProductGallery from "../components/products/ProductGallery";
import 'react-photo-view/dist/react-photo-view.css';

export default function ProductPage() {
  const { id } = useParams();
  const { product, loading, error } = useProductDetails(id);

  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (product?.images?.length > 0) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  if (loading) return <p className="text-center py-10">Chargement...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!product) return <p className="text-center py-10">Produit introuvable</p>;

  const images = product.images.map(img => ({
    image_min: img,
    image_big: img
  }));

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <ProductGallery
        product={product}
        mainImage={mainImage}
        images={images}
        quantity={quantity}
        setQuantity={setQuantity}
        setMainImage={setMainImage}
      />
    </div>
  );
}
