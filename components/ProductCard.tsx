
"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  price?: number;
  weight?: string;
  badge?: string;
  description?: string;
  ingredients?: string[];
  benefits?: string[];
  storage?: string;
  rating?: number;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  // Identify True Cookies
  const isComingSoon =
    product.category.trim().toLowerCase() === "true cookies";

  return (
    <div
      data-aos="zoom-in-up"
      className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
        />

        {isComingSoon ? (
          <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            COMING SOON
          </span>
        ) : product.badge ? (
          <span className="absolute top-4 left-4 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="p-6">
        <span className="text-sm text-green-700 font-semibold">
          {product.category}
        </span>

        <h3 className="text-2xl font-bold mt-2">
          {product.name}
        </h3>

        {product.rating && (
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="ml-2 text-gray-600 text-sm">
              {product.rating}/5
            </span>
          </div>
        )}

        <div className="mt-3">
          {product.weight && (
            <p className="text-gray-500 text-sm">
              Weight: {product.weight}
            </p>
          )}

          {product.price !== undefined && (
            <p className="text-green-700 font-bold text-xl">
              ₹{product.price}
            </p>
          )}
        </div>

        <Link
          href={`/products/${product.id}`}
          className="mt-6 block w-full bg-green-700 text-white py-3 rounded-full hover:bg-green-800 hover:scale-105 transition-all duration-300 shadow-md text-center"
        >
          View Details →
        </Link>

        {isComingSoon ? (
          <button
            disabled
            className="mt-3 w-full border-2 border-orange-400 text-orange-500 py-3 rounded-full bg-orange-50 cursor-not-allowed font-semibold"
          >
            Coming Soon
          </button>
        ) : (
          <button
            onClick={() => {
              addToCart({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price ?? 0,
              });
            }}
            className="mt-3 w-full border-2 border-green-700 text-green-700 py-3 rounded-full hover:bg-green-700 hover:text-white transition-all duration-300"
          >
            🛒 Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
