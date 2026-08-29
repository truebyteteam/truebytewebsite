import ProductCard from "./ProductCard";
import { products } from "../data/products";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">

      <div className="text-center mb-16">

        <p className="text-green-700 uppercase tracking-widest font-semibold">
          Our Best Sellers
        </p>

        <p className="uppercase tracking-[4px] text-green-700 font-semibold">
  Premium Collection
</p>

<h2 className="text-5xl font-bold mt-3">
  Featured Products
</h2>

<p className="text-gray-600 mt-5 max-w-2xl mx-auto">
  Crafted with premium ingredients to nourish your body and delight your taste buds.
</p>

      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-8">

        {products.slice(0,6).map((product)=>(
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>
      <div className="text-center mt-14">
  <Link
  href="/products"
  className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
>
  View All Products →
</Link>
</div>

    </section>
  );
}