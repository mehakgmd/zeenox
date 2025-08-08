// components/SubscriptionCard.jsx

import React from 'react';

const SubscriptionCard = ({ icon, title, price, benefits = [] }) => {
  return (
    <div className=" border border-gray-300 rounded-xl p-4 flex flex-col justify-between h-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl">{icon}</div>
        <h3 className="text-lg font-semibold text-black">{title}</h3>
      </div>

      <p className="text-sm text-black">Investment:</p>
      <p className="text-black font-bold mb-2">{price}</p>

      {benefits.map((benefit, index) => (
        <p key={index} className="text-sm text-green-400 mb-1">{benefit}</p>
      ))}

      <button className="mt-auto bg-blue-500 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition-all duration-300">
        ✓ PAY NOW
      </button>
    </div>
  );
};

export default SubscriptionCard;
