import React, { useState } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { 
  EnvelopeIcon,
  LockClosedIcon
} from '@heroicons/react/24/solid'
import loginImage from "../assets/login-image.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAuth = async () => {
    setLoading(true);
    setError("");

    try {
      // Try login
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        try {
          // If user doesn't exist, create new account
          await createUserWithEmailAndPassword(auth, email, password);
        } catch (signupErr) {
          setError(signupErr.message);
        }
      } else {
        setError(err.message);
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex gap-2 items-center justify-center bg-[#790424] shadow-lg rounded-lg w-[650px] h-[500px]">
      <div>
        <p>YareeS</p>
      </div>
      <div>
        <p className="text-2xl font-semibold mb-4 text-center">Login / Signup</p>
        <label className="block text-left ml-2 mb-2 text-sm font-medium opacity-80">Email Address</label>
        <div className="flex items-center relative mb-3">
          <EnvelopeIcon className="h-full bg-[#F4EBD0] rounded-3xl text-[#80013F] p-2 absolute left-0 top-1/2 transform -translate-y-1/2" />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label className="block text-left ml-2 mb-2 text-sm font-medium opacity-80">Password</label>
        <div className="flex items-center relative mb-5">
          <LockClosedIcon className="h-full bg-[#F4EBD0] rounded-3xl text-[#80013F] p-2 absolute left-0 top-1/2 transform -translate-y-1/2" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-3xl focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleAuth}
          disabled={loading}
          className="w-full bg-[#F4EBD0] hover:bg-[#EADBB5] rounded-3xl text-[#80013F] font-semibold py-2 px-4"
        >
          {loading ? "Loading..." : "Login / Sign Up"}
        </button>

        {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
