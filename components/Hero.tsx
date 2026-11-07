
"use client";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      data-aos="fade-up"
      className="relative overflow-hidden bg-gradient-to-r from-green-50 to-yellow-50 min-h-[560px] md:min-h-[620px] flex items-center py-12 md:py-16"
    >
      {/* Background Decoration */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-200 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-12 items-center w-full">

        {/* Left Content */}
        <div>
          <p className="uppercase tracking-[5px] text-green-700 font-semibold text-sm md:text-base">
            Healthy • Homemade • Natural
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-5">
            <TypeAnimation
              sequence={[
                "Welcome to True Byte",
                2500,
                "Healthy Homemade Snacks",
                2500,
                "Taste Meets Nutrition",
                2500,
              ]}
              wrapper="span"
              speed={65}
              repeat={Infinity}
              cursor={true}
            />
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mt-6 leading-8">
            Discover handcrafted laddus, cookies, and chocolates made with
            premium ingredients. Every bite is nutritious, delicious, and
            prepared with care.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-8">
            <Link
              href="/products"
              className="inline-block bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition shadow-lg"
            >
              Shop Now
            </Link>

            <a
              href="https://wa.me/919490653790"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-full hover:bg-green-700 hover:text-white hover:scale-105 transition-all duration-300"
            >
              WhatsApp Order
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex justify-center"
        >
          <img
            src="/hero.png"
            alt="True Byte Products"
            data-aos="zoom-in"
            data-aos-duration="1200"
            className="w-full max-w-[600px] rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
