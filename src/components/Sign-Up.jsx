import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="John Doe"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="+92XXXXXXXXXX"
        />
      </div>

      {/* CNIC */}
      <div>
        <label className="block text-sm font-medium text-gray-700">CNIC</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="12345-1234567-1"
        />
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Street, City, Country"
        />
      </div>

      {/* Selfie */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Upload Selfie</label>
        <input
          type="file"
          accept="image/*"
          className="mt-1 block w-full text-sm text-gray-500"
        />
      </div>

      {/* CNIC Front */}
      <div>
        <label className="block text-sm font-medium text-gray-700">CNIC Front Picture</label>
        <input
          type="file"
          accept="image/*"
          className="mt-1 block w-full text-sm text-gray-500"
        />
      </div>

      {/* CNIC Back */}
      <div>
        <label className="block text-sm font-medium text-gray-700">CNIC Back Picture</label>
        <input
          type="file"
          accept="image/*"
          className="mt-1 block w-full text-sm text-gray-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="you@example.com"
        />
      </div>

      {/* WhatsApp Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
        <input
          type="tel"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="+92XXXXXXXXXX"
        />
      </div>

      {/* Bank Account Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Bank Account Number</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
        {/* Account Holder Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Account Holder Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {/* Bank Account Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Bank Account Title</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

    

      {/* Register Button */}
      <div className="flex justify-center mt-2">
        <Link
          to="/dashboard"
          className="block w-full mt-2 text-center bg-blue-500 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md"
        >
          Register
        </Link>
      </div>

      {/* Sign In Link */}
      <div className="text-sm text-center mt-3 text-gray-600">
        Already have an account?{' '}
        <Link to="/sign-in" className="text-indigo-600 hover:underline font-medium">
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
