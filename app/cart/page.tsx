"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CartItem from "../../components/CartItem";
import OrderSummary from "../../components/OrderSummary";
import CheckoutForm from "../../components/CheckoutForm";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [orderSuccess, setOrderSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = (details: {
    name: string;
    phone: string;
    address: string;
    city: string;
    pincode: string;
  }) => {
    let message = "Hello True Byte!%0A%0A";

    message += "I'd like to place the following order:%0A%0A";

    message += `Customer Name: ${details.name}%0A`;
    message += `Phone: ${details.phone}%0A`;
    message += `Address: ${details.address}%0A`;
    message += `City: ${details.city}%0A`;
    message += `Pincode: ${details.pincode}%0A%0A`;

    message += "--------------------%0A%0A";

    cart.forEach((item) => {
      message += `• ${item.name} × ${item.quantity} = ₹${item.price * item.quantity}%0A`;
    });

    message += `%0A--------------------%0A`;
    message += `Total: ₹${total}%0A%0A`;
    message += "Please confirm my order. Thank you!";

    window.open("https://wa.me/919490653790?text=" + message, "_blank");

    clearCart();
    setOrderSuccess(true);
  };

  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen bg-green-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

          {orderSuccess ? (
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6 text-center">
              <h2 className="text-2xl font-semibold">Order placed successfully ✅</h2>
              <p className="text-gray-600 mt-2">We'll contact you shortly to confirm the details.</p>
            </div>
          ) : cart.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md p-10 text-center">
              <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
              <p className="text-gray-600 mt-3">Add some healthy snacks to get started.</p>
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </div>

              <OrderSummary total={total} totalItems={cart.length} />

              <CheckoutForm onSubmit={handleCheckout} />
            </>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}