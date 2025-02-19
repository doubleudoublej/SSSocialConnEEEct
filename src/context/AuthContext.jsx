import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Ensure React Router is installed

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const API_URL = import.meta.env.VITE_API_URL; // Use import.meta.env for Vite
  console.log("API_URL:", API_URL); // Debug log

  const handleLogin = async (email, password) => {
    try {
      console.log("Attempting login with:", email, password); // Debug log
      const response = await axios.post(
        API_URL,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            mode: "cors",
          },
        }
      );

      const data = response.data;

      if (data.success) {
        setUser(data.userDetails); // Store user data in state
        localStorage.setItem("userData", JSON.stringify(data.userDetails));
        console.log("Login successful"); // Debug log
        navigate("/data.jsx"); // Navigate to /data.jsx
        return true;
      } else {
        setError("Invalid email or password");
        console.log("Login failed: Invalid email or password"); // Debug log
        return false;
      }
    } catch (err) {
      setError("Error connecting to server");
      console.log("Login failed: Error connecting to server", err); // Debug log
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, error }}>
      {children}
    </AuthContext.Provider>
  );
};
