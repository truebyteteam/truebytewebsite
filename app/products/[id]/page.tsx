
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { products } from "../../../data/products";
import { useCart } from "../../../context/CartContext";

export default function ProductPage() {
  const params = useParams();
  const id = Number(params?.id);

  const product = products.find((p) => p.id === id);

  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("Small");

  if (!product) {
    return (
      <main className="min-h-screen bg-green-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Product Not Found
          </h1>

          <Link
            href="/products"
            className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-full"
          >
            ← Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const isComingSoon = product.category === "True Cookies";

  const sizes = "sizes" in product ? product.sizes : undefined;

  const selectedVariant = sizes?.find(
    (size) => size.label === selectedSize
  );

  const currentPrice = sizes
    ? selectedVariant?.price ?? 0
    : product.price ?? 0;

  const relatedProducts = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id
    )
    .slice(0, 3);

  const handleAddToCart = () => {
    if (isComingSoon) return;

    const cartName = sizes
      ? `${product.name} (${selectedSize})`
      : product.name;

    addToCart({
      id: product.id,
      name: cartName,
      image: product.image,
      price: currentPrice,
    });
  };

  return (
    <main className="bg-green-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        <Link
          href="/products"
          className="text-green-700 font-semibold hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mt-8">

          {/* PRODUCT IMAGE */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-3xl shadow-xl"
            />

            {isComingSoon && (
              <span className="absolute top-5 left-5 bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-sm">
                COMING SOON
              </span>
            )}
          </div>

          {/* PRODUCT INFORMATION */}
          <div>

            <span className="text-green-700 font-semibold">
              {product.category}
            </span>

            <h1 className="text-5xl font-bold mt-3">
              {product.name}
            </h1>

            {product.rating && (
              <div className="flex items-center mt-4">
                <span className="text-yellow-500 text-xl">
                  ★★★★★
                </span>

                <span className="ml-2 text-gray-600">
                  {product.rating}/5
                </span>
              </div>
            )}

            {product.weight && (
              <p className="mt-4 text-lg text-gray-600">
                Weight: {product.weight}
              </p>
            )}

            {/* CHOCOLATE SIZE SELECTION */}
            {sizes && !isComingSoon && (
              <div className="mt-6">

                <h2 className="font-bold text-lg mb-3">
                  Select Chocolate Size
                </h2>

                <div className="flex flex-wrap gap-3">

                  {sizes.map((size) => (
                    <button
                      key={size.label}
                      onClick={() => setSelectedSize(size.label)}
                      className={`px-6 py-3 rounded-full border-2 font-semibold transition ${
                        selectedSize === size.label
                          ? "bg-green-700 text-white border-green-700"
                          : "bg-white text-green-700 border-green-700 hover:bg-green-100"
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}

                </div>

                <p className="text-gray-600 mt-3">
                  Selected: {selectedSize}
                </p>

              </div>
            )}

            {/* PRICE */}
            {!isComingSoon && (
              <p className="text-4xl font-bold text-green-700 mt-5">
                ₹{currentPrice}
              </p>
            )}

            {product.description && (
              <p className="mt-8 text-gray-600 leading-8">
                {product.description}
              </p>
            )}

            {/* COMING SOON MESSAGE */}
            {isComingSoon ? (

              <div className="mt-8 bg-orange-50 border-2 border-orange-300 rounded-2xl p-6">

                <h2 className="text-orange-600 text-xl font-bold">
                  Coming Soon!
                </h2>

                <p className="text-gray-600 mt-2">
                  Our delicious True Cookies are getting ready.
                  Stay tuned for the launch!
                </p>

                <button
                  disabled
                  className="mt-5 w-full bg-orange-500 text-white py-4 rounded-full font-bold cursor-not-allowed opacity-80"
                >
                  Coming Soon
                </button>

              </div>

            ) : (

              <>
                {/* ADD TO CART */}
                <button
                  onClick={handleAddToCart}
                  className="mt-8 w-full bg-green-700 text-white py-4 rounded-full text-lg font-semibold hover:bg-green-800 transition"
                >
                  🛒 Add to Cart - ₹{currentPrice}
                </button>

                {/* WHATSAPP ORDER */}
                <a
                  href={`https://wa.me/919490653790?text=${encodeURIComponent(
                    `Hi, I would like to order ${product.name}${
                      sizes ? ` (${selectedSize})` : ""
                    } for ₹${currentPrice}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 w-full text-center border-2 border-green-700 text-green-700 px-8 py-4 rounded-full hover:bg-green-700 hover:text-white transition"
                >
                  Order on WhatsApp
                </a>
              </>

            )}

            {/* INGREDIENTS */}
            {"ingredients" in product && product.ingredients && (
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

            {/* BENEFITS */}
            {"benefits" in product && product.benefits && (
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

            {/* STORAGE */}
            {"storage" in product && product.storage && (
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

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">

            <h2 className="text-3xl font-bold mb-8">
              You May Also Like
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-5">

                    <p className="text-green-700 text-sm font-semibold">
                      {item.category}
                    </p>

                    <h3 className="text-xl font-bold mt-2">
                      {item.name}
                    </h3>

                    {item.id === 17 ? (
                      <p className="text-green-700 font-bold mt-2">
                        From ₹21
                      </p>
                    ) : item.price !== undefined ? (
                      <p className="text-green-700 font-bold mt-2">
                        ₹{item.price}
                      </p>
                    ) : null}

                    {item.category === "True Cookies" && (
                      <span className="inline-block mt-3 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold">
                        Coming Soon
                      </span>
                    )}

                  </div>

                </Link>
              ))}

            </div>
          </div>
        )}

      </div>
    </main>
  );
}
