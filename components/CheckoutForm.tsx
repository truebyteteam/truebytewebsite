"use client";

import { useState } from "react";

type CheckoutFormProps = {
  onSubmit: (details: {
    name: string;
    phone: string;
    address: string;
    city: string;
    pincode: string;
  }) => void;
};

export default function CheckoutForm({
  onSubmit,
}: CheckoutFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    address?: string;
    city?: string;
    pincode?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: {
      name?: string;
      phone?: string;
      address?: string;
      city?: string;
      pincode?: string;
    } = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number.";
    }

    if (!address.trim()) {
      newErrors.address = "Please enter your delivery address.";
    }

    if (!city.trim()) {
      newErrors.city = "Please enter your city.";
    }

    if (!pincode.trim()) {
      newErrors.pincode = "Please enter your pincode.";
    } else if (!/^\d{6}$/.test(pincode.trim())) {
      newErrors.pincode = "Pincode must be exactly 6 digits.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    onSubmit({
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
      city: city.trim(),
      pincode: pincode.trim(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mt-8 border border-green-100"
    >
      {/* Header */}
      <div className="mb-8">
        <p className="text-green-700 font-semibold text-sm">
          CHECKOUT
        </p>

        <h2 className="text-3xl font-bold mt-1">
          Customer Details
        </h2>

        <p className="text-gray-500 mt-2">
          Enter your delivery details before placing your order.
        </p>
      </div>

      <div className="space-y-6">

        {/* Name */}
        <div>
          <label className="block font-semibold mb-2">
            👤 Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);

              if (errors.name) {
                setErrors((prev) => ({
                  ...prev,
                  name: undefined,
                }));
              }
            }}
            className={`w-full border rounded-xl px-4 py-3 outline-none transition ${
              errors.name
                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-100"
            }`}
          />

          {errors.name && (
            <p className="text-red-600 text-sm mt-2">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-2">
            📱 Phone Number
          </label>

          <input
            type="tel"
            inputMode="numeric"
            placeholder="Enter 10-digit phone number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);

              if (errors.phone) {
                setErrors((prev) => ({
                  ...prev,
                  phone: undefined,
                }));
              }
            }}
            className={`w-full border rounded-xl px-4 py-3 outline-none transition ${
              errors.phone
                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-100"
            }`}
          />

          {errors.phone && (
            <p className="text-red-600 text-sm mt-2">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block font-semibold mb-2">
            🏠 Delivery Address
          </label>

          <textarea
            placeholder="Enter your complete delivery address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);

              if (errors.address) {
                setErrors((prev) => ({
                  ...prev,
                  address: undefined,
                }));
              }
            }}
            rows={4}
            className={`w-full border rounded-xl px-4 py-3 outline-none transition resize-none ${
              errors.address
                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-100"
            }`}
          />

          {errors.address && (
            <p className="text-red-600 text-sm mt-2">
              {errors.address}
            </p>
          )}
        </div>

        {/* City + Pincode */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* City */}
          <div>
            <label className="block font-semibold mb-2">
              📍 City
            </label>

            <input
              type="text"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);

                if (errors.city) {
                  setErrors((prev) => ({
                    ...prev,
                    city: undefined,
                  }));
                }
              }}
              className={`w-full border rounded-xl px-4 py-3 outline-none transition ${
                errors.city
                  ? "border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-100"
              }`}
            />

            {errors.city && (
              <p className="text-red-600 text-sm mt-2">
                {errors.city}
              </p>
            )}
          </div>

          {/* Pincode */}
          <div>
            <label className="block font-semibold mb-2">
              📮 Pincode
            </label>

            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="6-digit pincode"
              value={pincode}
              onChange={(e) => {
                setPincode(e.target.value);

                if (errors.pincode) {
                  setErrors((prev) => ({
                    ...prev,
                    pincode: undefined,
                  }));
                }
              }}
              className={`w-full border rounded-xl px-4 py-3 outline-none transition ${
                errors.pincode
                  ? "border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-100"
              }`}
            />

            {errors.pincode && (
              <p className="text-red-600 text-sm mt-2">
                {errors.pincode}
              </p>
            )}
          </div>

        </div>

      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-8 w-full bg-green-700 text-white py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-green-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
      >
        Continue to WhatsApp →
      </button>

      <p className="text-center text-gray-500 text-sm mt-4">
        🔒 Your details are only used to process your order.
      </p>
    </form>
  );
}