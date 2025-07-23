import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AiOutlineMessage } from "react-icons/ai";

export default function Blog() {
    const [cartCount, setCartCount] = useState(0);

    const blogPosts = [
        {
            image: "public/images/sh-1.jpg",
            title: "Comfort and Support",
            content:
                "Experience superior cushioning and stability with our sneakers, designed for lasting comfort and support throughout your day.",
            comments: 15,
            date: "May 10, 2024",
        },
        {
            image: "public/images/sh-2.jpg",
            title: "Style Meets Function",
            content:
                "Our latest sneakers combine bold design with unmatched performance, giving you the best of both worlds.",
            comments: 8,
            date: "May 11, 2024",
        },
        {
            image: "public/images/sh-3.jpg",
            title: "The Future of Sneakers",
            content:
                "Discover innovation in every step with cutting-edge technology that keeps you moving forward.",
            comments: 23,
            date: "May 12, 2024",
        },
        {
            image: "public/images/sh-4.jpg",
            title: "Everyday Essential",
            content:
                "Simple, clean, and ultra-comfortable — perfect for your daily adventures in style.",
            comments: 12,
            date: "May 13, 2024",
        },
        {
            image: "public/images/sh-5.jpg",
            title: "Everyday Essential",
            content:
                "Simple, clean, and ultra-comfortable — perfect for your daily adventures in style.",
            comments: 12,
            date: "May 13, 2024",
        },
    ];

    const recentPosts = [
        {
            image: "public/images/post-1.jpg",
            title: "Fresh Sneaker Insights",
            date: "May 10, 2024",
            comments: 15,
        },
        {
            image: "public/images/post-2.jpg",
            title: "Style That Speaks",
            date: "May 11, 2024",
            comments: 9,
        },
        {
            image: "public/images/post-3.jpg",
            title: "Tech in Every Step",
            date: "May 12, 2024",
            comments: 21,
        },
        {
            image: "public/images/post-4.jpg",
            title: "Daily Comfort Picks",
            date: "May 13, 2024",
            comments: 7,
        },
        {
            image: "public/images/post-5.jpg",
            title: "Sneaker Fashion Tips",
            date: "May 14, 2024",
            comments: 12,
        },
    ];

    return (
        <div className="max-h-screen">
            {/* Menu */}
            <Navbar cartCount={cartCount} />

            {/* En-tête */}
            <div
                className="text-center py-40 bg-cover bg-center"
                style={{ backgroundImage: "url('public/images/bg-about.jpg')" }}
            >
                <h1 className="text-5xl font-bold text-white">BLOG</h1>
                <p className="text-white mt-6">Home / Blog</p>
            </div>

            {/* Contenu principal */}
            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-10">
                {/* Blog posts */}
                <div className="flex flex-col divide-y divide-gray-200">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row gap-6 py-6 bg-white"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-70 h-70 object-cover rounded"
                            />
                            <div className="flex flex-col justify-center gap-8 space-y-4 md:space-y-2">
                                <h2 className="text-xl font-semibold text-black">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 text-sm">{post.content}</p>
                                <div className="flex items-center gap-6 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <AiOutlineMessage className="text-gray-500 text-base" />
                                        <span>{post.comments} Comments</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-1/3 space-y-10">
                    {/* Recent posts */}
                    <div className="p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-black mb-4">RECENT POSTS</h2>
                        <div className="border-t border-gray-200 mb-6"></div>

                        {recentPosts.map((post, index) => (
                            <div key={index} className="flex gap-4 py-4 border-b border-gray-200 last:border-none">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <div className="text-sm">
                                    <h3 className="font-semibold text-black">{post.title}</h3>
                                    <p className="text-gray-500">
                                        {post.date} / {post.comments} Comments
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Categories */}
                    <div className="p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-black mb-4">CATEGORY</h2>
                        <div className="border-t border-gray-200 mb-6"></div>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="hover:text-orange-500 cursor-pointer">Running Shoes</li>
                            <li className="hover:text-orange-500 cursor-pointer">Casual Sneakers</li>
                            <li className="hover:text-orange-500 cursor-pointer">Fashion Sneakers</li>
                            <li className="hover:text-orange-500 cursor-pointer">Outdoor Sneakers</li>
                            <li className="hover:text-orange-500 cursor-pointer">Basketball Shoes</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
