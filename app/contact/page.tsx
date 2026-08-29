import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-green-50 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-green-700 font-semibold tracking-wide">
            GET IN TOUCH
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Contact True Byte
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
            Have a question about our healthy homemade products or want to
            place an order? We would love to hear from you.
          </p>

          <div className="mt-12 bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold">
              Order or Enquiry
            </h2>

            <p className="mt-4 text-gray-600">
              Contact us directly on WhatsApp for product enquiries and orders.
            </p>

            <a
              href="https://wa.me/919490653790"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}