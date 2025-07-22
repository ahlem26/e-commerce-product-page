import { LuFacebook } from "react-icons/lu";
import { RiInstagramLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoPinterestAlt } from "react-icons/bi";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="flex justify-between max-w-7xl mx-auto px-6 gap-10 items-center">

                {/* Bloc gauche : texte principal */}
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                        ARE YOU INTERESTED ?
                    </h1>
                    <p className="text-orange-400 text-lg md:text-xl">Shopping Now</p>
                </div>

                {/* Bloc droit : liens + réseaux */}
                <div className="flex flex-col md:items-start">
                    <h2 className="text-2xl font-semibold mb-4">Sneaker</h2>

                    <ul className="space-y-2 mb-6 text-sm text-gray-300">
                        <li><a href="/" className="hover:text-orange-400">Home</a></li>
                        <li><a href="/shop" className="hover:text-orange-400">Shop</a></li>
                        <li><a href="/about" className="hover:text-orange-400">About</a></li>
                        <li><a href="/contact" className="hover:text-orange-400">Contact</a></li>
                    </ul>

                    <div className="flex space-x-4">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-400 transition duration-300">
                            <LuFacebook className="text-white text-xl" />
                        </div>
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-400 transition duration-300">
                            <RiInstagramLine className="text-white text-xl" />
                        </div>
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-400 transition duration-300">
                            <FaXTwitter className="text-white text-xl" />
                        </div>
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-400 transition duration-300">
                            <BiLogoPinterestAlt className="text-white text-xl" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bas du footer */}
            <div className="mt-10 text-center text-gray-500 text-sm">
                &copy; Sneaker Shoes Sales {new Date().getFullYear()} — All Rights Reserved.
            </div>
        </footer>
    );
}
