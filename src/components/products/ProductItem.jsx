import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export function ProductItem({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <Link
          key={product.id}
          to={`/product/${product.id}`} // lien vers la page détails
          className="block hover:border border-amber-500 rounded-lg shadow-sm p-4 hover:shadow-lg transition"
        >
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
        </Link>
      ))}
    </div>
  );
}
