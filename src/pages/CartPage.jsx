// src/pages/CartPage.jsx
import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Votre panier est vide 🛒</h2>
        <p>Ajoutez des produits pour commencer vos achats.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Votre Panier</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.price} €</p>
                <p>Quantité : {item.quantity}</p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total : {totalPrice.toFixed(2)} €</h2>
        <button
          onClick={clearCart}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Vider le panier
        </button>
      </div>

      <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600">
        Passer à la commande
      </button>
    </div>
  );
}
