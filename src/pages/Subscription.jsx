
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SubscriptionList() {
  const navigate = useNavigate();

  const plans = [
    { id: 1, name: "Regular Subscription", amount: 1000 },
    { id: 2, name: "Silver Subscription", amount: 2000 },
    { id: 3, name: "Bronze Subscription", amount: 5000 },
    { id: 4, name: "Gold Subscription", amount: 10000 },
    { id: 5, name: "Diamond Subscription", amount: 20000 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-blue-800 text-2xl font-bold text-center mb-6">All Subscriptions</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white p-4 rounded-xl shadow text-center"
          >
            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p className="mt-2">
              Investment: <span className="font-bold">Rs{plan.amount}</span>
            </p>
            <p className="text-green-500 mt-1">+ Attay Rides</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() =>
                navigate("/deposit", { state: { selectedPlan: plan } })
              }
            >
              ✓ PAY NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
