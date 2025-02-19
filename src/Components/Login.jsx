import React, { useState, useEffect } from "react";
import { Navbar } from "./index.js"; // Ensure this import is correct
import styles from "../styles.js";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase-client.js";
import { motion } from "framer-motion"; // Import Framer Motion for animation

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Check for session on component mount
  useEffect(() => {
    const session = supabase.auth.session(); // Get the current session
    if (session) {
      setUser(session.user);
      navigate("/login.jsx");
    }
  }, [navigate, setUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset previous error messages

    // Convert user input
    const formattedEmail = email.toLowerCase();
    const formattedPassword = password.toUpperCase(); // Ensuring case-insensitive comparison for matric

    // Query Supabase for user credentials (case-insensitive)
    const { data, error } = await supabase
      .from("pairings")
      .select("*")
      .ilike("email", formattedEmail) // Case-insensitive email check
      .ilike("matric", formattedPassword) // Case-insensitive password check
      .single(); // Ensure only one record is returned

    if (error || !data) {
      setError("Invalid email or password");
      return;
    }

    // Store user session
    setUser(data);

    // Redirect to the data page
    navigate("/data.jsx");
  };

  return (
    // 🌈 Animated Gradient Background
    <div className="h-screen w-full bg-rose-200 animate-gradient flex flex-col justify-center items-center">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      {/* Login Header */}
      <div className="mt-10 text-center">
        <h1 className="text-4xl font-bold text-white">Login</h1>
      </div>

      {/* ✨ Animated Login Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-xl mt-10 max-w-sm w-full"
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 focus:outline-none"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
