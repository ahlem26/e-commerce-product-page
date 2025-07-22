import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";
import Footer from "../components/Footer";

export default function About() {
    const [cartCount, setCartCount] = useState(0);
    return (
        <div className="max-h-screen">
            {/* Menu */}
            <Navbar cartCount={cartCount} />

            {/* En-tête */}
            <div className="text-center py-40 bg-cover bg-center" style={{ backgroundImage: "url('public/images/bg-about.jpg')" }}>
                <h1 className="text-5xl font-bold text-white">ABOUT</h1>
                <p className="text-white mt-6">Home / Shop</p>
            </div>

            <div className="mx-auto pt-20">
                <h1 className="text-3xl font-bold ml-20 mb-12 text-black">Our Story</h1>

                <div className="flex flex-col lg:flex-row items-center gap-10 bg-gray-100">

                    <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
                        {/* Image gauche */}
                        <img
                            src="public/images/nike-1.jpg"
                            alt="Nike"
                            className="w-full lg:w-[300px] rounded-lg shadow-lg object-cover lg:ml-20"
                        />

                        {/* Texte */}
                        <div className="flex flex-col space-y-6 text-center lg:text-left max-w-xl">
                            <h2 className="text-5xl font-semibold text-black">Our Sneaker Journey</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Sneaker Story began with a love for sneakers. We've evolved into a hub for innovation and community,
                                uniting enthusiasts globally with our curated selection and passion-driven approach.
                            </p>
                            <button className="self-center lg:self-start bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow transition">
                                Let's Go
                            </button>
                        </div>


                    </div>
                    {/* Image droite */}
                    <img
                        src="public/images/shoes-2.jpg"
                        alt="Shoes"
                        className="w-full lg:w-[700px] lg:h-[500px] object-cover"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-around lg:flex-row items-center gap-10 min-h-[700px]">

                {/* Colonne gauche avec les deux images l'une au-dessus de l'autre */}
                <div className="relative w-[300px] h-[400px]">
                    {/* Image du dessous */}
                    <img
                        src="public/images/shoes-3.jpg"
                        alt=""
                        className="absolute top-0 left-0 w-full h-full object-cover rounded shadow z-0"
                    />

                    {/* Image du dessus (à droite en bas) */}
                    <img
                        src="public/images/nike-4.jpg"
                        alt=""
                        className="absolute bottom-0 right-0 w-full h-full object-cover rounded shadow-lg z-10 translate-x-50 translate-y-30"
                    />
                </div>

                {/* Colonne droite avec le texte */}
                <div className="flex flex-col space-y-6 text-center lg:text-left max-w-xl">
                    <h2 className="text-4xl font-semibold text-black">
                        Our Commitment To Sneaker Culture
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Sneaker Story began with a love for sneakers. We've evolved into a hub for innovation and community,
                        uniting enthusiasts globally with our curated selection and passion-driven approach.
                    </p>
                    <button className="self-center lg:self-start bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow transition">
                        Let's Go
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Sous-titre */}
                <p className="text-gray-400 text-sm font-semibold uppercase mb-2">
                    Our Customers Say
                </p>

                {/* Titre principal + flèches */}
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-bold text-black">What Our Customers Say</h1>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                            <HiArrowLeft />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                            <HiArrowRight />
                        </button>
                    </div>
                </div>

                {/* Carte client */}
                <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 pl-0 pt-0 pb-0 rounded-lg shadow-md gap-6">
                    {/* Image du client */}
                    <img
                        src="public/images/shoes-6.jpg"
                        alt="Customer testimonial"
                        className="w-full max-w-[500px] max-h-[400px] object-cover"
                    />

                    {/* Témoignage texte */}
                    <div className="space-y-3 text-center md:text-left">
                        <p className="text-black leading-relaxed text-2xl">
                            As a sneaker enthusiast, I appreciate the attention to detail and quality
                            of Sneak Haven's collection. Each pair feels like a work of art!
                        </p>
                        <p className="text-gray-500">10/10 recommend</p>
                        <p className="text-orange-500 font-bold text-lg">Jason M.</p>
                        <p className="text-sm text-gray-500">Marker Analytics</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
