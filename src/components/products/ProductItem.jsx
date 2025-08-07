import { useProducts } from "../../hook/useProducts";
import { FaStar } from "react-icons/fa";
export function ProductItem() {
    const { products} = useProducts();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(product => (
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
    );
}