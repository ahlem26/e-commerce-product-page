import React, { useState, useMemo } from "react";
import { useProducts } from "../hook/useProducts";
import { ProductItem } from "../components/products/ProductItem";
import { EnTete } from "../components/EnTete";
import { SidebarShop } from "../components/SidebarShop";
import { HeaderDeTriShop } from "../components/HeaderDeTriShop";
import Pagination from "../components/Pagination";

export default function Shop() {
    const { allProducts } = useProducts();

    // États de filtres
    const [category, setCategory] = useState("all");
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const [maxPrice, setMaxPrice] = useState(1000);

    // États de pagination
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

    // Marques uniques
    const allBrands = useMemo(() => {
        return [...new Set(allProducts.map(p => p.brand))];
    }, [allProducts]);

    // Application des filtres et tri
    const filteredProducts = useMemo(() => {
        let filtered = allProducts;

        if (category !== "all") {
            filtered = filtered.filter(p => p.category === category);
        }

        if (selectedBrands.length > 0) {
            filtered = filtered.filter(product =>
                selectedBrands.includes(product.brand)
            );
        }

        filtered = filtered.filter(
            p => p.price <= maxPrice && p.title.toLowerCase().includes(search.toLowerCase())
        );

        if (sortBy === "low") {
            filtered = [...filtered].sort((a, b) => a.price - b.price);
        } else if (sortBy === "high") {
            filtered = [...filtered].sort((a, b) => b.price - a.price);
        }

        return filtered;
    }, [allProducts, category, selectedBrands, search, sortBy, maxPrice]);

    // Pagination
    const totalItems = filteredProducts.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredProducts.slice(start, start + itemsPerPage);
    }, [filteredProducts, currentPage, itemsPerPage]);

    // Gestion filtres
    const handleCategoryFilter = (cat) => {
        setCategory(cat);
        setCurrentPage(1);
    };

    const handleBrandChange = (brand) => {
        const updatedBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter(b => b !== brand)
            : [...selectedBrands, brand];
        setSelectedBrands(updatedBrands);
        setCurrentPage(1);
    };

    return (
        <div>
            {/* En-tête */}
            <EnTete image={'/images/bg-about.jpg'} texte1={"SHOP"} texte2={"Home / Shop"} />

            {/* Contenu principal */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 px-4 py-12">
                
                {/* Sidebar */}
                <SidebarShop
                    handleCategoryFilter={handleCategoryFilter}
                    handleBrandChange={handleBrandChange}
                    category={category}
                    selectedBrands={selectedBrands}
                    allBrands={allBrands}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                />

                {/* Main content */}
                <main className="w-full lg:w-3/4 space-y-6">
                    
                    {/* Header de tri avec recherche */}
                    <HeaderDeTriShop
                        products={filteredProducts}
                        search={search}
                        setSearch={setSearch}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        itemsPerPage={itemsPerPage}
                        setItemsPerPage={setItemsPerPage}
                    />

                    {/* Grille de produits */}
                    <ProductItem products={paginatedProducts} />

                    {/* Pagination */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </main>
            </div>
        </div>
    );
}
