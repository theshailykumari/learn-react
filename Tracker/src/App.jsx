import { useState } from "react";

import { Card } from "./component/Card";
import { ExpenseForm } from "./component/ExpenseForm";

function App() {
  const [transactions, setTransactions] = useState([]);

  function addTransaction(transaction) {
    setTransactions((prev) => [...prev, transaction]);
  }

  const income = transactions
    .filter((item) => item.type === "Income")
    .reduce((total, item) => total + item.amount, 0);

  const expenses = transactions
    .filter((item) => item.type === "Expense")
    .reduce((total, item) => total + item.amount, 0);

  const balance = income - expenses;

  return (
    <div className="min-h-screen w-full bg-amber-50">

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-3xl font-bold text-gray-700">
            Expense tracker
          </h1>

          <p className="text-gray-600 mt-1">
            Log transactions and see where your money goes.
          </p>
        </div>


        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">

          <Card
            type="Income"
            balance={income.toFixed(2)}
          />

          <Card
            type="Expenses"
            balance={expenses.toFixed(2)}
          />

          <Card
            type="Balance"
            balance={balance.toFixed(2)}
          />

        </div>


        {/* Expense Form */}
        <div className="flex justify-center">
          <ExpenseForm
            onAddTransaction={addTransaction}
          />
        </div>


        {/* Chart / Empty Message */}
        <div className="mt-10 text-center">

          {transactions.length === 0 ? (
            <p className="text-gray-500">
              No expenses to chart yet.
            </p>
          ) : (
            <div className="bg-white rounded-xl p-6 border border-gray-200">

              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Transactions
              </h2>

              <div className="space-y-3">

                {transactions.map((transaction, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b pb-3"
                  >
                    <div className="text-left">
                      <p className="font-medium">
                        {transaction.category}
                      </p>

                      <p className="text-sm text-gray-500">
                        {transaction.note || "No note"}
                      </p>
                    </div>

                    <p
                      className={`font-semibold ${
                        transaction.type === "Income"
                          ? "text-blue-500"
                          : "text-red-500"
                      }`}
                    >
                      {transaction.type === "Income" ? "+" : "-"}$
                      {transaction.amount.toFixed(2)}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default App;