export function Card({ type, balance }) {
  return (
    <div className="flex-1 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <div className="text-sm font-semibold text-gray-600">
        {type}
      </div>

      <div
        className={`text-2xl font-semibold pt-2 ${
          type === "Expenses"
            ? "text-red-500"
            : type === "Income"
            ? "text-blue-500"
            : "text-gray-800"
        }`}
      >
        ₹{balance}
      </div>
    </div>
  );
}