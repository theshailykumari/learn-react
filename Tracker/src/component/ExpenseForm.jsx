import { useState } from "react";

export function ExpenseForm({ onAddTransaction }) {
  const [type, setType] = useState("Expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [note, setNote] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!amount) {
      alert("Please enter amount");
      return;
    }

    onAddTransaction({
      type,
      amount: Number(amount),
      category,
      note,
    });

    setAmount("");
    setNote("");
  }

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      
      {/* Expense / Income Buttons */}
      <div className="flex gap-4 mb-5">
        <button
          type="button"
          onClick={() => setType("Expense")}
          className={`flex-1 py-3 rounded-lg font-medium transition ${
            type === "Expense"
              ? "bg-red-400 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Expense
        </button>

        <button
          type="button"
          onClick={() => setType("Income")}
          className={`flex-1 py-3 rounded-lg font-medium transition ${
            type === "Income"
              ? "bg-blue-400 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          Income
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>

        {/* Amount and Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none"
            >
              <option>Food</option>
              <option>Travel</option>
              <option>Shopping</option>
              <option>Education</option>
              <option>Bills</option>
              <option>Entertainment</option>
              <option>Other</option>
            </select>
          </div>

        </div>

        {/* Note */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Note (optional)
          </label>

          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Groceries, rent, etc."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Add Transaction */}
        <button
          type="submit"
          className="w-full mt-5 bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-lg font-medium transition"
        >
          Add transaction
        </button>

      </form>
    </div>
  );
}