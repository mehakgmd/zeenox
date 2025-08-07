
import React from 'react';
import SignupForm from '../components/Sign-Up';

const Signup = () => {
  return (
    <div className="relative pt-4 pb-4 min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Dotted background pattern */}
      {/* <div className="hidden md:block absolute top-5 left-96 w-32 h-32 opacity-70 pointer-events-none">
      <img 
      src='/yellow-dotted.svg'
      alt='Dots-Image'
      />
      </div> */}
      {/* Dotted background pattern */}
      {/* <div className="hidden md:block absolute bottom-5 right-96 w-32 h-32 opacity-70 pointer-events-none">
      <img 
      src='/blue-dotted.svg'
      alt='Dots-Image'
      />
      </div> */}

      {/* Signup form */}
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md z-10">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;

