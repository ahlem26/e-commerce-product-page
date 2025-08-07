import { PhotoProvider, PhotoView } from 'react-photo-view';
import RegularButton from '../../ui/RegularButton';

export default function ProductGallery({ mainImage, images, setQuantity, quantity, setCartCount, cartCount, setMainImage }) {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-12 p-8 bg-white mt-10">
            {/* Images */}
            <div className="max-w-md">
                <div className="mb-4 rounded-lg overflow-hidden shadow-md">
                    <PhotoProvider>
                        <PhotoView src={mainImage}>
                            <img
                                src={mainImage}
                                alt="Produit principal"
                                className="w-full object-cover cursor-pointer"
                            />
                        </PhotoView>
                    </PhotoProvider>
                </div>

                {/* Miniatures cliquables */}
                <div className="flex justify-between gap-2">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img.image_min}
                            alt={`thumb${index + 1}`}
                            className={`w-20 h-20 rounded-lg cursor-pointer hover:ring-2 ${mainImage === img.image_big ? "ring-2 ring-orange-500" : ""
                                }`}
                            onClick={() => setMainImage(img.image_big)}
                        />
                    ))}
                </div>
            </div>

            {/* Détails */}
            <div className="max-w-md text-left space-y-4">
                <p className="uppercase text-orange-500 font-semibold tracking-widest">Sneaker Company</p>
                <h1 className="text-3xl font-bold text-gray-800 leading-tight">Fall Limited Edition Sneakers</h1>
                <p className="text-gray-600">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>

                {/* Prix */}
                <div className="flex items-center gap-4">
                    <p className="text-2xl font-bold text-gray-800">$125.00</p>
                    <span className="bg-orange-100 text-orange-600 font-semibold px-2 py-1 rounded">50%</span>
                </div>
                <p className="text-gray-400 line-through">$250.00</p>

                {/* Quantité et panier */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-6">
                    <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md w-full sm:w-40">
                        <img
                            src="/images/icon-minus.svg"
                            alt="moins"
                            className="cursor-pointer w-3"
                            onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}
                        />
                        <p className="font-medium">{quantity}</p>
                        <img
                            src="/images/icon-plus.svg"
                            alt="plus"
                            className="cursor-pointer w-3"
                            onClick={() => setQuantity((prev) => prev + 1)}
                        />
                    </div>

                    <RegularButton cartCount={cartCount} quantity={quantity} setCartCount={setCartCount} setQuantity={setQuantity} />
                </div>
            </div>
        </section>
    );
}