import React, { useState } from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Admin cblueentials
  const ADMIN_EMAIL = "admin@foodie.com";
  const ADMIN_PASSWORD = "admin123";

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      toast.success("Welcome Admin 🍔");
      navigate("/dashboard"); // ✅ blueirect
    } else {
      toast.error("Invalid admin cblueentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT IMAGE */}
        <div className="hidden md:flex items-center justify-center bg-blue-100">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Food Delivery"
            className="w-4/5 rounded-xl object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
            Admin Login
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Manage orders & restaurants 🍕
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex items-center border rounded-lg p-3">
              <FiUser className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Admin Email"
                className="outline-none w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center border rounded-lg p-3">
              <FiLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="outline-none w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
