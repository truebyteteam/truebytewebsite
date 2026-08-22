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
  description?: string;
  ingredients?: string[];
  benefits?: string[];
  storage?: string;
};

export default function ProductDetails({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price ?? 0,
    });

  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-12 mt-8">

        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-3xl shadow-xl"
          />
        </div>

        {/* Product Information */}
        <div>

          <span className="text-green-700 font-semibold">
            {product.category}
          </span>

          <h1 className="text-5xl font-bold mt-3">
            {product.name}
          </h1>

          {product.weight && (
            <p className="mt-4 text-lg text-gray-600">
              Weight: {product.weight}
            </p>
          )}

          {product.price && (
            <p className="text-4xl font-bold text-green-700 mt-3">
              ₹{product.price}
            </p>
          )}

          <p className="mt-8 text-gray-600 leading-8">
            {product.description}
          </p>

          {/* Add To Cart */}
          <button
            onClick={handleAddToCart}
            className="mt-8 w-full md:w-auto bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition shadow-lg"
          >
            🛒 Add to Cart
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919490653790"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block w-full md:w-auto text-center bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition"
          >
            Order on WhatsApp
          </a>

          {/* Ingredients */}
          {product.ingredients && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">
                🌿 Ingredients
              </h2>

              <ul className="space-y-2">
                {product.ingredients.map((item) => (
                  <li key={item} className="text-gray-700">
                    ✔ {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          {product.benefits && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">
                💚 Health Benefits
              </h2>

              <ul className="space-y-2">
                {product.benefits.map((item) => (
                  <li key={item} className="text-gray-700">
                    ⭐ {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Storage */}
          {product.storage && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">
                📦 Storage
              </h2>

              <p className="text-gray-700 leading-7">
                {product.storage}
              </p>
            </div>
          )}

        </div>
      </div>
    </>
  );
}