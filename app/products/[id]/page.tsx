"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "../../../data/products";
import AddToCartButton from "../../../components/AddToCartButton";
import { useCart } from "../../../context/CartContext";
import toast from "react-hot-toast";

export default function ProductPage() {
  const params = useParams();
  const id = Number(params?.id);

  const product = products.find((p) => p.id === id);

  const { addToCart } = useCart();

  if (!product) {
    return (
      <main className="min-h-screen bg-green-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Product Not Found</h1>

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

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price ?? 0,
    });

    // cart context already shows a toast; optional additional toast:
    // toast.success(`${product.name} added to cart`);
  };

  return (
    <main className="bg-green-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/products" className="text-green-700 font-semibold hover:underline">
          ← Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <span className="text-green-700 font-semibold">{product.category}</span>

            <h1 className="text-5xl font-bold mt-3">{product.name}</h1>

            {product.rating && (
              <div className="flex items-center mt-4">
                <span className="text-yellow-500 text-xl">★★★★★</span>
                <span className="ml-2 text-gray-600">{product.rating}/5</span>
              </div>
            )}

            {product.weight && <p className="mt-4 text-lg text-gray-600">Weight: {product.weight}</p>}

            {product.price && <p className="text-4xl font-bold text-green-700 mt-3">₹{product.price}</p>}

            {product.description && <p className="mt-8 text-gray-600 leading-8">{product.description}</p>}

            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-green-700 text-white py-4 rounded-full text-lg font-semibold hover:bg-green-800 transition"
            >
              🛒 Add to Cart
            </button>

            <a
              href="https://wa.me/919490653790"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 w-full text-center border-2 border-green-700 text-green-700 px-8 py-4 rounded-full hover:bg-green-700 hover:text-white transition"
            >
              Order on WhatsApp
            </a>

            <AddToCartButton
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              }}
            />

            {product.ingredients && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">🌿 Ingredients</h2>
                <ul className="space-y-2">
                  {product.ingredients.map((item) => (
                    <li key={item} className="text-gray-700">
                      ✔ {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.benefits && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">💚 Health Benefits</h2>
                <ul className="space-y-2">
                  {product.benefits.map((item) => (
                    <li key={item} className="text-gray-700">
                      ⭐ {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.storage && (
              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">📦 Storage</h2>
                <p className="text-gray-700 leading-7">{product.storage}</p>
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>

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
                    <p className="text-green-700 text-sm font-semibold">{item.category}</p>

                    <h3 className="text-xl font-bold mt-2">{item.name}</h3>

                    <p className="text-green-700 font-bold mt-2">₹{item.price}</p>
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