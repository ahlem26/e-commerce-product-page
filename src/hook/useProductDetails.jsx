import { useState, useEffect } from "react";
import axios from "axios";

export default function useProductDetails(productId) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) return;

    let isMounted = true;
    setLoading(true);
    setError(null);

    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((res) => {
        if (isMounted) {
          setProduct(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || "Erreur lors du chargement du produit");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [productId]);

  return { product, loading, error };
}
