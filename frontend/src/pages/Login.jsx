import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setLoading(true);
    // Call onLogin or API here
    if (!form.email || !form.password) {
      setError("Email and password are required.");
      setLoading(false);
      return;
    }
    await onLogin?.(form, setError, setLoading);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">Login</h2>
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <input
          className="border rounded px-3 py-2"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="border rounded px-3 py-2"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button
          className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="text-center text-sm text-gray-500">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
        </div>
      </form>
    </div>
  );
}
