export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <img
              src="/about.jpg"
              alt="About True Byte"
              className="rounded-3xl shadow-xl w-full"
            />
          </div>

          {/* Right */}
          <div>

            <p className="uppercase tracking-widest text-green-700 font-semibold">
              Our Story
            </p>

            <h2 className="text-5xl font-bold text-green-800 mt-4">
              Healthy Homemade Goodness
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              True Byte was born with a simple vision — to make healthy snacks
              that taste amazing. Every laddu, cookie, and chocolate is prepared
              using premium ingredients without compromising on quality.
            </p>

            <p className="text-gray-600 mt-6 leading-8">
              From carefully selected dry fruits to wholesome grains and
              naturally sweet dates, every product is handcrafted with love for
              families who want nutritious and delicious treats.
            </p>

            <button className="mt-10 bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}