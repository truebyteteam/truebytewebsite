import {
  FaLeaf,
  FaSeedling,
  FaHeart,
  FaTruck,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf size={40} />,
    title: "100% Natural Ingredients",
    desc: "Made with carefully selected natural ingredients without artificial additives.",
  },
  {
    icon: <FaSeedling size={40} />,
    title: "Premium Dry Fruits",
    desc: "Rich in almonds, dates, seeds, and wholesome ingredients.",
  },
  {
    icon: <FaHeart size={40} />,
    title: "Homemade with Care",
    desc: "Prepared in small batches with love and attention to quality.",
  },
  {
    icon: <FaTruck size={40} />,
    title: "Fresh Delivery",
    desc: "Freshly prepared and delivered directly to your doorstep.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "No Preservatives",
    desc: "No chemicals or preservatives. Just pure goodness.",
  },
  {
    icon: <FaAward size={40} />,
    title: "Trusted Quality",
    desc: "Thousands of happy customers enjoy our healthy treats.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-green-700 uppercase tracking-widest font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold text-green-800 mt-3">
            Why Choose True Byte?
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Every bite is packed with nutrition, freshness, and homemade love.
            We believe healthy food should also taste amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-3xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-green-700 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}