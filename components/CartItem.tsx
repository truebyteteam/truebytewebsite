"use client";

type CartItemProps = {
  item: {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
  };

  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

export default function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}: CartItemProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-6">

      <img
        src={item.image}
        alt={item.name}
        className="w-28 h-28 rounded-xl object-cover"
      />

      <div className="flex-1">

        <h2 className="text-2xl font-bold">
          {item.name}
        </h2>

        <p className="text-green-700 mt-2 font-semibold">
          ₹{item.price}
        </p>

        <div className="flex items-center gap-3 mt-4">

          <button
            onClick={() => decreaseQuantity(item.id)}
            className="w-8 h-8 rounded-full bg-red-500 text-white"
          >
            −
          </button>

          <span className="font-bold">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="w-8 h-8 rounded-full bg-green-700 text-white"
          >
            +
          </button>

          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-6 text-red-600 font-semibold"
          >
            Remove
          </button>

        </div>

      </div>

    </div>
  );
}