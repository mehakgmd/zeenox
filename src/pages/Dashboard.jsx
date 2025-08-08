
import React from 'react';
import { AiOutlineSearch, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import Sidebar from '../layout/SideBar';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">

      <div className="flex flex-col flex-1 overflow-y-auto">
       {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">ZEENOX EQUITY</h1>

      <p className="mb-4">
        <strong>ZEENOX EQUITY</strong> is not a traditional company — it is a forward-looking institution built to empower individuals, support ideas, and build a sustainable economic future. We offer an alternative model to investment: an equity-based system where people become partners, not just customers.
      </p>

      <p className="mb-4">
        We are creating an ecosystem where:
        <br />– If you have money – you can become an equity participant and receive monthly profit.
        <br />– If you have a powerful idea but no capital – ZEENOX EQUITY will analyze, evaluate, and potentially fund your idea through partnership.
      </p>

      <p className="font-semibold mb-8">Our mission is clear: build people, grow ideas, share success.</p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">🔁 How ZEENOX EQUITY Works</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          <strong>Equity Participation:</strong> Partner with ZEENOX EQUITY by contributing funds and receiving monthly profit under a profit-sharing model.
        </li>
        <li>
          <strong>Idea Funding Partnership:</strong> If your scalable business idea qualifies, ZEENOX EQUITY will fund and partner with you.
        </li>
        <li>
          <strong>Strategic Business Agreements:</strong> We collaborate with multiple companies to ensure stable and diversified equity ventures.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">🧠 Why Choose ZEENOX EQUITY?</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Save Time, Earn Smart – We manage the complexities; you benefit.</li>
        <li>Low Capital, High Potential – Even small investors can earn.</li>
        <li>20-Year Master Plan – Structured, long-term vision.</li>
        <li>Multi-Channel Earnings – Profit phases, resale, digital services (coming soon).</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">🌟 Our Vision</h2>
      <p className="mb-6">
        To empower individuals across Pakistan by giving them the chance to become entrepreneurs — either by funding real businesses or by contributing ideas that lead to equity-based success. <br />
        <br />
        We believe a strong nation begins with strong individuals. Our model creates a new class of contributors who become rightful profit participants.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">🎯 Our Mission</h2>
      <p className="mb-6">
        To establish a functional, ethical, and inclusive equity system that helps ordinary citizens move towards financial freedom through real business involvement — not empty promises or risky speculation. <br />
        <br />
        We are on a mission to transform the economic landscape of Pakistan, one equity-partner at a time.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">🛠️ What We Offer</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Equity-based participation in active businesses</li>
        <li>Idea-based funding and business partnership</li>
        <li>Collaboration with real companies and service providers</li>
        <li>Transparent profit sharing</li>
        <li>Phase-wise returns</li>
        <li>Digital platforms and tools (coming soon)</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">📢 Join the Movement</h2>
      <p>
        Whether you're someone who wants to invest your savings into real business activity…
        <br />
        Or someone who wants their brilliant idea to come to life with the right backing…
        <br />
        <strong>ZEENOX EQUITY</strong> is the platform for you.
        <br />
        <br />
        Together, we’re building a movement of empowered individuals. Together, we build Pakistan.
      </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
