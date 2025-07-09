import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate(); // <-- Add this line
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  const handleLogout = () => {
    localStorage.removeItem("token");
    if (window.showToast) {
      showToast("Logged out successfully!");
    //   setTimeout(() => { window.location.href = "/"; }, 1200);
      setTimeout(() => { navigate("/"); }, 1200);
    } else {
      navigate("/")
    }
  };
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700 tracking-tight">Worko</Link>
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link to="/metrics" className="text-gray-700 hover:text-blue-600 font-medium">Metrics</Link>
          {isLoggedIn ? (
            <>
              <button onClick={handleLogout} className="text-red-600 hover:underline font-semibold">Logout</button>
              <Link to="/dashboard" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 font-semibold">Dashboard</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-blue-600 hover:underline font-semibold">Login</Link>
              <Link to="/signup" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 font-semibold">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
