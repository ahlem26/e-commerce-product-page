import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AiOutlineBars } from "react-icons/ai";
import { TiThLargeOutline } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function Shop() {
    const [cartCount, setCartCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState("all");

    useEffect(() => {
        // Charger uniquement les catégories mens-shoes et womens-shoes
        const fetchProducts = async () => {
            try {
                const [mensRes, womensRes] = await Promise.all([
                    axios.get("https://dummyjson.com/products/category/mens-shoes"),
                    axios.get("https://dummyjson.com/products/category/womens-shoes"),
                ]);

                const combined = [...mensRes.data.products, ...womensRes.data.products];
                setProducts(combined);
                setFilteredProducts(combined);
            } catch (err) {
                console.error("Erreur lors de la récupération des produits :", err);
            }
        };

        fetchProducts();
    }, []);

    const handleCategoryFilter = (cat) => {
        setCategory(cat);
        if (cat === "all") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(p => p.category === cat));
        }
    };

    return (
        <div className="max-h-screen">
            {/* Menu */}
            <Navbar cartCount={cartCount} />

            {/* En-tête */}
            <div
                className="text-center py-40 bg-cover bg-center"
                style={{ backgroundImage: "url('public/images/bg-about.jpg')" }}
            >
                <h1 className="text-5xl font-bold text-white">SHOP</h1>
                <p className="text-white mt-6">Home / Shop</p>
            </div>

            {/* Contenu principal */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 px-4 py-12">
                {/* Sidebar */}
                <aside className="w-full lg:w-1/4 space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Product Categories</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li onClick={() => handleCategoryFilter("mens-shoes")} className={`flex justify-between items-center hover:text-orange-500 cursor-pointer ${category === "mens-shoes" && "text-orange-600 font-semibold"}`}>
                                <span>Men's Shoes</span>
                                <HiOutlineChevronRight />
                            </li>
                            <li onClick={() => handleCategoryFilter("womens-shoes")} className={`flex justify-between items-center hover:text-orange-500 cursor-pointer ${category === "womens-shoes" && "text-orange-600 font-semibold"}`}>
                                <span>Women's Shoes</span>
                                <HiOutlineChevronRight />
                            </li>
                            <li onClick={() => handleCategoryFilter("all")} className={`flex justify-between items-center hover:text-orange-500 cursor-pointer ${category === "all" && "text-orange-600 font-semibold"}`}>
                                <span>All</span>
                                <HiOutlineChevronRight />
                            </li>
                        </ul>
                    </div>

                    {/* Les autres filtres peuvent rester comme ils sont */}

                </aside>

                {/* Main content */}
                <main className="w-full lg:w-3/4 space-y-6">
                    {/* Header de tri */}
                    <div className="flex justify-between items-center text-sm text-gray-600 border border-gray-300 rounded-full pb-3 py-3 pl-3 pr-3">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <div className="flex items-center">
                                <button className="w-9 h-9 flex items-center justify-center">
                                    <TiThLargeOutline className="text-xl text-orange-500" />
                                </button>
                                <button className="w-9 h-9 flex items-center justify-center">
                                    <AiOutlineBars className="text-xl" />
                                </button>
                            </div>
                            <p className="text-sm text-gray-500">Showing <span className="font-medium text-black">1–{filteredProducts.length}</span> of <span className="font-medium text-black">{filteredProducts.length}</span> item(s)</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <span>Sort by:</span>
                            <select className="bg-gray-100 rounded-full px-2 py-1">
                                <option>Default</option>
                                <option>Price (Low to High)</option>
                                <option>Price (High to Low)</option>
                            </select>
                            <span>Show:</span>
                            <select className="bg-gray-100 rounded-full px-2 py-1">
                                <option>10</option>
                                <option>12</option>
                                <option>24</option>
                            </select>
                        </div>
                    </div>

                    {/* Grille de produits */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="hover:border border-amber-500 rounded-lg shadow-sm p-4 hover:shadow-lg transition">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-full h-64 object-cover rounded mb-4"
                                />
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-black">{product.title}</h3>
                                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                        <FaStar className="text-base" />
                                        <span className="text-gray-500">({product.rating})</span>
                                    </div>
                                </div>
                                <p className="text-orange-500 font-bold">${product.price}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
