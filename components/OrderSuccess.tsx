"use client";

import Link from "next/link";

export default function OrderSuccess() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

      <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl">
        ✓
      </div>

      <h2 className="text-3xl font-bold mt-6">
        Order Sent Successfully!
      </h2>

      <p className="text-gray-600 mt-3 max-w-lg mx-auto">
        Thank you for ordering from True Byte.
        Your order details have been sent to WhatsApp.
      </p>

      <p className="text-gray-500 mt-2">
        We will contact you shortly to confirm your order.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">

        <Link
          href="/products"
          className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition"
        >
          Continue Shopping
        </Link>

        <Link
          href="/"
          className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-700 hover:text-white transition"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
}