
import React from 'react';
import SignInForm from '../components/Sign-In';

const SignIn = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">  
      {/* Signup form */}
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md z-10">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;


