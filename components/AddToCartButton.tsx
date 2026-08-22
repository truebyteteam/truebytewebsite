"use client";

import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

type AddToCartButtonProps = {
  product: {
    id: number;
    name: string;
    price?: number;
    image: string;
  };
};

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price ?? 0,
      image: product.image,
    });

    toast.success(`${product.name} added to cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-4 w-full md:w-auto bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 hover:scale-105 transition-all duration-300 shadow-lg"
    >
      🛒 Add to Cart
    </button>
  );
}