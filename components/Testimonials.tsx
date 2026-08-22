import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Priya S.",
    review:
      "The Classic Dry Fruit Laddu is absolutely delicious. Healthy and tasty at the same time!",
  },
  {
    name: "Rahul K.",
    review:
      "Workout Laddus have become part of my daily routine. Highly recommended!",
  },
  {
    name: "Aishwarya M.",
    review:
      "The cookies are crispy, fresh, and made with quality ingredients. Loved every bite!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-green-700 font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold text-green-800 mt-3">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-4">
            Thousands of customers trust True Byte for healthy homemade snacks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="flex text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 italic">
                "{review.review}"
              </p>

              <div className="mt-6 flex items-center">

                <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center text-lg font-bold">
                  {review.name.charAt(0)}
                </div>

                <div className="ml-4">
                  <h4 className="font-bold">
                    {review.name}
                  </h4>

                  <span className="text-gray-500 text-sm">
                    Verified Customer
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}