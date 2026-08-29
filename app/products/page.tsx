"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Read category from URL
  useEffect(() => {
    const category = searchParams.get("category");

    if (category === "Laddus") {
      setSelectedCategory("True Laddus");
    } else if (category === "Cookies") {
      setSelectedCategory("True Cookies");
    } else if (category === "Chocos") {
      setSelectedCategory("True Choco's");
    } else {
      setSelectedCategory("All");
    }
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "az") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "low") {
      return (a.price ?? 0) - (b.price ?? 0);
    }

    if (sortBy === "high") {
      return (b.price ?? 0) - (a.price ?? 0);
    }

    return 0;
  });

  return (
    <>
      <Navbar />

      <main className="pt-24 bg-green-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="uppercase tracking-[4px] text-green-700 font-semibold">
              Premium Collection
            </p>

            <h1 className="text-5xl font-bold mt-3">
              Our Products
            </h1>

            <p className="text-gray-600 mt-5">
              Discover our handcrafted healthy snacks made with premium
              ingredients.
            </p>
          </div>

          {/* Search */}
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              placeholder="🔍 Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-lg px-5 py-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              "All",
              "True Laddus",
              "True Cookies",
              "True Choco's",
            ].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? "bg-green-700 text-white"
                    : "bg-white text-green-700 border border-green-700 hover:bg-green-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Count + Sort */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-bold">
                {sortedProducts.length}
              </span>{" "}
              products
            </p>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="default">Sort By</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="az">Name: A-Z</option>
            </select>
          </div>

          {/* Products */}
          {sortedProducts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-gray-700">
                No products found 😔
              </h2>

              <p className="text-gray-500 mt-3">
                Try searching with another keyword.
              </p>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}