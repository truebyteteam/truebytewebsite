"use client";

import Link from "next/link";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { cart } = useCart();

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Top Bar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-2xl md:text-3xl font-bold tracking-wide"
          >
            TRUE BYTE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="hover:text-green-200 transition"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="hover:text-green-200 transition"
            >
              Products
            </Link>

            <Link
              href="/about"
              className="hover:text-green-200 transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="hover:text-green-200 transition"
            >
              Contact
            </Link>

            <Link
              href="/cart"
              className="relative"
            >
              <FaShoppingCart className="text-2xl" />

              {mounted && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-5 md:hidden">

            {/* Mobile Cart */}
            <Link
              href="/cart"
              className="relative"
            >
              <FaShoppingCart className="text-2xl" />

              {mounted && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              className="text-2xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden mt-5 border-t border-green-600 pt-4">

            <div className="flex flex-col gap-4">

              <Link
                href="/"
                onClick={closeMenu}
                className="hover:text-green-200 transition"
              >
                Home
              </Link>

              <Link
                href="/products"
                onClick={closeMenu}
                className="hover:text-green-200 transition"
              >
                Products
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="hover:text-green-200 transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="hover:text-green-200 transition"
              >
                Contact
              </Link>

              <Link
                href="/cart"
                onClick={closeMenu}
                className="hover:text-green-200 transition"
              >
                🛒 Cart
                {mounted && totalItems > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {totalItems}
                  </span>
                )}
              </Link>

            </div>

          </nav>
        )}

      </div>
    </header>
  );
}