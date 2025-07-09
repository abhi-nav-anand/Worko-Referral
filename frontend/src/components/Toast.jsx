import React from "react";

export default function Toast({ message, show }) {
  return show ? (
    <div className="fixed top-14 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded shadow-lg transition-all animate-fade-in">
      {message}
    </div>
  ) : null;
}
