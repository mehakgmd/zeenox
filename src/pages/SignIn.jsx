
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


{/* Dotted background pattern */}
      {/* <div className="hidden md:block absolute top-24 left-96 w-32 h-32 opacity-70 pointer-events-none">
      <img 
      src='/yellow-dotted.svg'
      alt='Dots-Image'
      />
      </div> */}
      {/* Dotted background pattern */}
      {/* <div className="hidden md:block absolute bottom-24 right-96 w-32 h-32 opacity-70 pointer-events-none">
      <img 
      src='/blue-dotted.svg'
      alt='Dots-Image'
      />
      </div> */}