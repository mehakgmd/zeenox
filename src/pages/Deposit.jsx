// DepositFunds.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function DepositFunds() {
  const location = useLocation();
  const planFromList = location.state?.selectedPlan || {
    name: "No Plan Selected",
    amount: 0,
  };

  const [paymentMethod, setPaymentMethod] = useState("PKR");
  const [screenshot, setScreenshot] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setScreenshot(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className=" text-black rounded-2xl shadow-lg w-full max-w-md p-5">
        <h2 className="text-xl font-bold mb-4">💰 Deposit Funds</h2>
        <p className="text-green-500 font-semibold mb-4">
          Selected Plan: {planFromList.name.toLocaleString()}
        </p>
        <p>
          Selected Plan Amount:{" "}
          <span className="font-semibold">
            {paymentMethod === "PKR"
              ? `PKR ${planFromList.amount}`
              : `USDT ${(planFromList.amount / 280).toFixed(2)}`}
          </span>
        </p>

        {/* Payment Method */}
        <label className="block mt-4 mb-2 font-medium">Select Payment Method</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-3 rounded-lg text-black"
        >
          <option value="PKR">Send in PKR</option>
          <option value="USDT">Send in USDT</option>
        </select>

        {/* Bank Details */}
        <div className="mt-4 bg-green-300 text-black p-3 rounded-md text-sm">
          📌 Please send the subscription amount to the following account:
        </div>
        <div className="mt-2 p-3 rounded-lg text-sm">
          <p><strong>🏦 Bank:</strong> Meezan Bank</p>
          <p><strong>👤 Account Title:</strong> Zeenox Equity</p>
          <p><strong>🔢 Account Number:</strong> 03486716994</p>
          <p><strong>🏦 IBAN:</strong> PK10MEZN0002840112094554</p>
        </div>

            {/* Upload Screenshot */}
        <label className="block mt-6 font-medium mb-2">
          Upload Payment Screenshot
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-300 transition">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer text-gray-300">
            {screenshot ? (
              <span className="text-blue-700">✅ File Selected: {screenshot.name}</span>
            ) : (
              "📤 Tap to upload pay slip image"
            )}
          </label>
        </div>

        {/* Submit */}
        <button className="mt-6 w-full bg-blue-500 hover:bg-indigo-700 text-white py-3 rounded-lg font-bold transition">
          Submit
        </button>
      </div>
    </div>
  );
}