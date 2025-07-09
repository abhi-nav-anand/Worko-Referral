import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</p>
      <a href="/" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">Go Home</a>
    </div>
  );
}
