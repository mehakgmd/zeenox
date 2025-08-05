
import React from 'react';
import { Link } from 'react-router-dom';

const SignInForm = () => {
  return (
    <form className="space-y-2">
      <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="••••••••"
        />
      </div>

      {/* Centered Sign In Button with Top Margin */}
      <div className="flex justify-center mt-2">
       <Link
  to="/dashboard"
  className="block w-full mt-2 text-center bg-blue-500 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md"
>
  Sign In
</Link>
      </div>

      <div className="text-sm text-center mt-4 text-gray-600">
        Don't have an account?{' '}
        <Link to="/" className="text-indigo-600 hover:underline font-medium">
          Register
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
