import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

export default function Navbar({ cartCount }) {
    return (
        <nav className="bg-white">
            <div className="max-w-6xl mx-auto px-4 pb-5 pt-3 border-b border-gray-200">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-12">
                        <div className="text-2xl font-bold">
                            <img src="/images/logo.svg" alt="logo" />
                        </div>
                        <div className="space-x-6 hidden md:flex">
                            <a href="/" className="text-gray-500 hover:text-black">Home</a>
                            <a href="/shop" className="text-gray-500 hover:text-black">Shop</a>
                            <a href="/about" className="text-gray-500 hover:text-black">About</a>
                            <a href="/blog" className="text-gray-500 hover:text-black">Blog</a>
                            <a href="/contact" className="text-gray-500 hover:text-black">Contact</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-8">
                        <div className="relative">
                            <img
                                src="/images/icon-cart.svg"
                                alt="Panier"
                                className="w-5 h-5 cursor-pointer"
                            />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </div>

                        <div>
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

