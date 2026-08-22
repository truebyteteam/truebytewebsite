export default function Categories() {
  const categories = [
    {
      title: "True Laddus",
      subtitle: "8 Healthy Varieties",
      image: "/categories/laddus.jpg",
      color: "bg-green-700",
    },
    {
      title: "True Cookies",
      subtitle: "6 Delicious Flavours",
      image: "/categories/cookies.jpg",
      color: "bg-amber-700",
    },
    {
      title: "True Choco's",
      subtitle: "3 Premium Treats",
      image: "/categories/chocos.jpg",
      color: "bg-stone-700",
    },
  ];

  return (
    <section className="py-24 bg-green-50">

      <div className="text-center mb-16">

        <p className="uppercase tracking-[5px] text-green-700 font-semibold">
          Browse Collection
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Shop by Category
        </h2>

        <p className="text-gray-600 mt-4">
          Discover our handcrafted healthy snacks.
        </p>

      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-8">

        {categories.map((category) => (
          <div
            key={category.title}
            data-aos="zoom-in"
            data-aos-delay={100}
            className="group relative overflow-hidden rounded-3xl shadow-xl"
          >

            <img
              src={category.image}
              alt={category.title}
              className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/35"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">

              <span
                className={`${category.color} px-4 py-2 rounded-full text-sm`}
              >
                {category.subtitle}
              </span>

              <h3 className="text-4xl font-bold mt-5">
                {category.title}
              </h3>

              <button className="mt-6 bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-700 hover:text-white transition">
                Explore →
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}