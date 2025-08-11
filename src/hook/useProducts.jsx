import React, { useEffect, useState } from "react";
import axios from "axios";
export function useProducts() {
   const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
            // Charger uniquement les catégories mens-shoes et womens-shoes
            const fetchProducts = async () => {
                try {
                    const [mensRes, womensRes] = await Promise.all([
                        axios.get("https://dummyjson.com/products/category/mens-shoes"),
                        axios.get("https://dummyjson.com/products/category/womens-shoes"),
                    ]);
    
                    const combined = [...mensRes.data.products, ...womensRes.data.products];
                    setAllProducts(combined); // on garde une copie complète
                } catch (err) {
                    console.error("Erreur lors de la récupération des produits :", err);
                }
            };
    
            fetchProducts();
        }, []);
        return { allProducts};
}