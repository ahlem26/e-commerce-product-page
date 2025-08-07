import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { TiThLargeOutline } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
import {useProducts} from "../hook/useProducts";
import { ProductItem} from "../components/products/ProductItem";
import { EnTete } from "../components/EnTete";

export default function Shop() {
    const {products,setProducts} = useProducts();
    const [category, setCategory] = useState("all");
    const [selectedBrands, setSelectedBrands] = useState([]);

    

    const handleCategoryFilter = (cat) => {
        setCategory(cat);
        applyFilters(cat, selectedBrands);
    };

    const handleBrandChange = (brand) => {
        const updatedBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter(b => b !== brand)
            : [...selectedBrands, brand];
        setSelectedBrands(updatedBrands);
        applyFilters(category, updatedBrands);
    };

    const applyFilters = (cat, brands) => {
        let filtered = products;

        if (cat !== "all") {
            filtered = filtered.filter(p => p.category === cat);
        }

        if (brands.length > 0) {
            filtered = filtered.filter(product =>
                brands.some(brand => product.title.toLowerCase().includes(brand.toLowerCase()))
            );
        }
        setProducts(filtered);
       
    };

    return (
        <div>
            {/* En-tête */}
            <EnTete image={'/images/bg-about.jpg'} texte1={"SHOP"} texte2={"Home / Shop"}/>

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

                    <div>
                        <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Brands</h2>
                        <ul className="space-y-1 text-gray-600">
                            {['Nike', 'Adidas', 'Jordan'].map((brand) => (
                                <li key={brand} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="accent-orange-500 w-4 h-4"
                                        checked={selectedBrands.includes(brand)}
                                        onChange={() => handleBrandChange(brand)}
                                    />
                                    <span>{brand}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
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
                            <p className="text-sm text-gray-500">Showing <span className="font-medium text-black">1–{products.length}</span> of <span className="font-medium text-black">{products.length}</span> item(s)</p>
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
                    <ProductItem />
                </main>
            </div>
        </div>
    );
}
