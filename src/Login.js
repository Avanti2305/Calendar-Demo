import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
//import login from "login.css";

const Login = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
  
    const saveLoginActivity = async (userEmail) => {
      try {
        await addDoc(collection(db, "loginActivity"), {
          email: userEmail,
          loginTime: serverTimestamp(),
        });
      } catch (error) {
        console.error("Error saving login activity:", error);
      }
    };

    const signInWithGoogle = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        setUser(result.user);
        // Save login activity
        await saveLoginActivity(result.user.email);
        // Navigate to calendar
        navigate("/Calender");
      } catch (error) {
        console.error("Google sign-in error:", error);
      }
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {!user ? (
        <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-sm">
          <h2 className="text-2xl font-semibold mb-4">Login with Google</h2>
          <button
            onClick={signInWithGoogle}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300 w-full"
          >
            Sign in with Google
          </button>
        </div>
      ) : (
        <div className="text-center bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-green-500 text-xl font-semibold">Welcome, {user.displayName}!</h2>
          <img src={user.photoURL} alt="User" className="w-20 h-20 rounded-full mt-4 mx-auto" />
          <p className="text-gray-700 mt-2">{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
