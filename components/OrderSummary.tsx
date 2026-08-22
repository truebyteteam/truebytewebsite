"use client";

type OrderSummaryProps = {
  total: number;
  totalItems: number;
};

export default function OrderSummary({
  total,
  totalItems,
}: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md mt-10 p-6">

      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="flex justify-between mb-3">
        <span>Total Items</span>
        <span className="font-semibold">
          {totalItems}
        </span>
      </div>

      <div className="flex justify-between text-2xl font-bold border-t pt-4">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

    </div>
  );
}