// src/components/SocialAuth.js
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider, appleProvider } from "../firebase-config";

const SocialAuth = () => {
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        alert(`Welcome ${user.displayName}`);
      })
      .catch((error) => {
        console.error(error);
        alert("Google Sign-In failed");
      });
  };

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        alert(`Welcome ${user.displayName}`);
      })
      .catch((error) => {
        console.error(error);
        alert("Facebook Sign-In failed");
      });
  };

  const handleAppleSignIn = () => {
    signInWithPopup(auth, appleProvider)
      .then((result) => {
        const user = result.user;
        alert(`Welcome ${user.displayName}`);
      })
      .catch((error) => {
        console.error(error);
        alert("Apple Sign-In failed");
      });
  };

  return (
    <div className="mt-6 space-y-3">
      <button
        onClick={handleGoogleSignIn}
        className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none"
      >
        Continue with Google
      </button>
      <button
        onClick={handleFacebookSignIn}
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
      >
        Continue with Facebook
      </button>
      <button
        onClick={handleAppleSignIn}
        className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none"
      >
        Continue with Apple
      </button>
    </div>
  );
};

export default SocialAuth;
