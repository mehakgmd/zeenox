
import React from 'react';
import SignupForm from '../components/Sign-Up';

const Signup = () => {
  return (
    <div className="relative pt-4 pb-4 min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Signup form */}
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md z-10">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;

