import Link from "next/link";
const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

export default function Gallery() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-green-700 font-semibold">
            Product Gallery
          </p>

          <h2 className="text-5xl font-bold text-green-800 mt-3">
            Fresh • Healthy • Homemade
          </h2>

          <p className="text-gray-600 mt-4">
            Take a look at some of our delicious handmade products.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg group"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

        <div className="text-center mt-12">
          <Link
  href="/products"
  className="inline-block bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition"
>
  View More Products →
</Link>
        </div>

      </div>
    </section>
  );
}