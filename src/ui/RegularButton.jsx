import { useCart } from "../context/CartContext";

export default function RegularButton({ quantity, setQuantity }) {
  const { cartCount, setCartCount } = useCart();

  return (
    <button
      onClick={() => {
        if (quantity > 0) {
          setCartCount(cartCount + quantity);
          setQuantity(0); // remet à 0 la quantité après ajout
        }
      }}
      className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md w-full sm:w-64 transition"
    >
      <img src="/images/icon-cart.svg" alt="panier" className="mr-3 w-5" />
      <p>Add to cart</p>
    </button>
  );
}
