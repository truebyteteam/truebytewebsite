import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaLeaf,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">

      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <FaLeaf className="text-green-300 text-3xl" />
            <h2 className="text-3xl font-bold">
              True Byte
            </h2>
          </div>

          <p className="text-gray-300 leading-7">
            Homemade healthy snacks made with premium ingredients.
            Every bite is nutritious, delicious, and crafted with care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-5">
            Contact
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <FaPhone />
              <span>94906 53790</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>truebyteteam@gmail.com</span>
            </div>

          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-5 text-3xl">

            <a href="#">
              <FaInstagram className="hover:text-pink-400 transition" />
            </a>

            <a href="#">
              <FaFacebook className="hover:text-blue-400 transition" />
            </a>

            <a
              href="https://wa.me/919490653790"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:text-green-400 transition" />
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-green-800 py-6 text-center text-gray-400">
        © 2025 True Byte. All Rights Reserved.
      </div>

    </footer>
  );
}