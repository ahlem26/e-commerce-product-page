import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AiOutlineBars } from "react-icons/ai";
import { TiThLargeOutline } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function Shop() {
    const [cartCount, setCartCount] = useState(0);

    const products = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        name: "Jordan Sneaker",
        price: "$45.00",
        image: "public/images/shop-1.jpg",
    }));

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
                            <li className="flex justify-between items-center hover:text-orange-500 cursor-pointer">
                                <span>Men's Shoes</span>
                                <HiOutlineChevronRight />
                            </li>
                            <li className="flex justify-between items-center hover:text-orange-500 cursor-pointer">
                                <span>Women's Shoes</span>
                                <HiOutlineChevronRight />
                            </li>
                            <li className="flex justify-between items-center hover:text-orange-500 cursor-pointer">
                                <span>Kid's Shoes</span>
                                <HiOutlineChevronRight />
                            </li>
                            <li className="flex justify-between items-center hover:text-orange-500 cursor-pointer">
                                <span>Shop by Sport</span>
                                <HiOutlineChevronRight />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Brands</h2>
                        <ul className="space-y-1 text-gray-600">
                            <li>Nike Air Max</li>
                            <li>Adidas Superstar</li>
                            <li>Jordan Retro</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Dimensions</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>40×60CM (6)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>60×90CM (8)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>80×120CM (3)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Made In</h2>
                        <ul className="space-y-1 text-gray-600">
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>Germany</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>Japan</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>Taiwan</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>USA</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Sizes</h2>
                        <ul className="space-y-1 text-gray-600">
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>S</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>M</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>L</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>XL</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Model</h2>
                        <ul className="space-y-1 text-gray-600">
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>2021 (5)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>2022 (6)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>2023 (3)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                                <span>2024 (8)</span>
                            </li>
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
                            <p className="text-sm text-gray-500">Showing <span className="font-medium text-black">1–12</span> of <span className="font-medium text-black">15</span> item(s)</p>
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

                    {/* Grid de produits */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {products.map(product => (
                            <div key={product.id} className="hover:border border-amber-500 rounded-lg shadow-sm p-4 hover:shadow-lg transition">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover rounded mb-4"
                                />
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                                        <FaStar className="text-base" />
                                        <span className="text-gray-500">(8.6k)</span>
                                    </div>
                                </div>
                                <p className="text-orange-500 font-bold">{product.price}</p>
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
