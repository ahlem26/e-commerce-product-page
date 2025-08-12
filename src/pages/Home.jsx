import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useProducts } from "../hook/useProducts";
import { Link } from "react-router-dom";

export default function Home() {
    const { allProducts } = useProducts();
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300; // px à scroller
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="space-y-16">
            {/* Hero */}
            <section className="flex flex-col lg:flex-row items-center gap-8 max-w-7xl mx-auto px-6 py-12">
                <div className="flex-1 space-y-6">
                    <h1 className="text-4xl font-bold">Shoes Collect !</h1>
                    <p className="text-gray-600 max-w-md">
                        Discover our stylish and comfortable shoes, perfect for every occasion and need.
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                        Shop Now
                    </button>
                </div>
                <div className="flex-1">
                    <img
                        src="images/istockphoto-1620926852-1024x1024.jpg"
                        alt="Shoes"
                        className="rounded-lg shadow-lg w-full"
                    />
                </div>
            </section>

            {/* Trending Products */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Trending Products</h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                {/* Conteneur scrollable */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 no-scrollbar"
                >
                    {allProducts.map((product) => (
                        <Link // <-- Ajout du lien
                            to={`/product/${product.id}`} // redirige vers la page produit
                            key={product.id}
                            className="min-w-[200px] bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
                        >
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4 flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        ({product.rating} Reviews)
                                    </p>
                                    <h3 className="font-semibold">{product.title}</h3>
                                    <p className="text-sm text-gray-600">${product.price}</p>
                                </div>
                                <MdOutlineShoppingCart className="text-xl cursor-pointer hover:text-gray-600" />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* New Collection */}
            <section className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">See Our New Collection</h2>
                        <div className="flex gap-2">
                            <FaArrowLeft />
                            <FaArrowRight />
                        </div>
                    </div>
                    <img src="images/nike-5020608_1280.jpg" alt="Collection" className="rounded-lg shadow-lg" />
                </div>
                <div className="flex-1 space-y-6">
                    <img src="images/nike-5128118_1280.jpg" alt="Nike" className="rounded-lg shadow" />
                    <p className="text-gray-600">
                        Discover our new collection now! Experience fresh styles and designs, perfect for updating your wardrobe with the latest trends.
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                        Buy Now
                    </button>
                </div>
            </section>

            {/* Best Seller */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Best Seller</h2>
                    <div className="flex gap-2">
                        <FaArrowLeft />
                        <FaArrowRight />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="grid grid-cols-2 gap-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
                                <img src="images/sneaker-5408068_1280.jpg" alt="Sneaker" className="w-full h-32 object-cover" />
                                <div className="p-2">
                                    <h3 className="font-semibold">Cloudnova Sneaker</h3>
                                    <p className="text-sm text-gray-600">$52.00 <span className="line-through">$45.00</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white shadow rounded-lg overflow-hidden lg:col-span-2">
                        <img src="images/feet-1840619_1280.jpg" alt="Best Seller" className="w-full h-100 object-cover" />
                        <div className="p-4">
                            <h3 className="font-semibold">Concrete Cruiser</h3>
                            <p className="text-sm text-gray-600">$69.00 <span className="line-through">$59.00</span></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <div className="bg-gray-50 py-16">
                <h3 className="text-amber-500 text-sm font-bold uppercase tracking-widest text-center mb-2">
                    Technology
                </h3>
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
                    Details Down To Sneaker Level
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <img
                        src="images/wave-sneakers-8801658_1280.jpg"
                        alt=""
                        className="w-72 h-72 object-cover rounded-xl shadow-md hover:scale-105 transition"
                    />
                    <img
                        src="images/wave-sneakers-8801658_1280.jpg"
                        alt=""
                        className="w-72 h-72 object-cover rounded-xl shadow-md hover:scale-105 transition"
                    />
                    <img
                        src="images/wave-sneakers-8801658_1280.jpg"
                        alt=""
                        className="w-72 h-72 object-cover rounded-xl shadow-md hover:scale-105 transition"
                    />
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="flex flex-col md:flex-row gap-10 py-16 px-6 bg-white items-center max-w-5xl mx-auto">
                <div className="relative">
                    <img
                        src="images/man-5582507_1280.jpg"
                        alt=""
                        className="w-full md:w-[400px] rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 flex justify-between items-center px-4">
                        <FaArrowLeft className="bg-white rounded-full p-2 shadow cursor-pointer hover:bg-amber-500 hover:text-white transition" size={40} />
                        <FaArrowRight className="bg-white rounded-full p-2 shadow cursor-pointer hover:bg-amber-500 hover:text-white transition" size={40} />
                    </div>
                </div>
                <div className="max-w-lg">
                    <h1 className="text-3xl font-bold mb-4">Why Choose Us?</h1>
                    <p className="text-gray-600 mb-6">
                        The LuxeState Difference — our products are crafted to order in small batches and shipped directly to you.
                        There's never unsold inventory, no middlemen, and no high markups to cover costs.
                    </p>
                    <button className="bg-amber-500 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-600 transition">
                        Shop Now
                    </button>
                    <img
                        src="images/shoes-852170_1280.jpg"
                        alt=""
                        className="w-full mt-8 rounded-xl shadow-md"
                    />
                </div>
            </div>

            {/* Latest Blog Posts */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-10">
                        <h1 className="text-3xl font-bold">Latest Blog Posts</h1>
                        <p className="text-gray-600 mt-4 md:mt-0 md:w-1/2">
                            Step into style with our latest shoe arrivals! Explore trendy sneakers, elegant heels, and comfortable boots.
                            Find your perfect pair and walk confidently with our curated collection.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Main Blog Image */}
                        <div className="relative">
                            <img
                                src="images/lebron-5048790_1280.jpg"
                                alt=""
                                className="w-full h-80 object-cover rounded-2xl shadow-lg"
                            />
                            <div className="absolute inset-0 flex justify-between items-center px-4">
                                <FaArrowLeft className="bg-white rounded-full p-2 shadow cursor-pointer hover:bg-amber-500 hover:text-white transition" size={40} />
                                <FaArrowRight className="bg-white rounded-full p-2 shadow cursor-pointer hover:bg-amber-500 hover:text-white transition" size={40} />
                            </div>
                        </div>

                        {/* Side Images */}
                        <div className="flex flex-col gap-4">
                            <img src="images/shoes-1011596_1280.jpg" alt="" className="w-full h-36 object-cover rounded-xl shadow" />
                            <img src="images/sneakers-5979353_1280.jpg" alt="" className="w-full h-36 object-cover rounded-xl shadow" />
                        </div>

                        {/* Titles */}
                        <div className="flex flex-col justify-center gap-4">
                            <h1 className="text-lg font-semibold hover:text-amber-500 cursor-pointer">Nike Air Max</h1>
                            <h1 className="text-lg font-semibold hover:text-amber-500 cursor-pointer">Adidas Superstar</h1>
                            <h1 className="text-lg font-semibold hover:text-amber-500 cursor-pointer">Jordan Retro</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
