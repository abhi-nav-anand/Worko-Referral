import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Metrics from "./pages/Metrics";
import Dashboard from "./pages/Dashboard";
import ReferralForm from "./components/ReferralForm";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import './index.css';
import Toast from "./components/Toast";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"; // Backend base URL

export default function App() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });
  const navigate = useNavigate();
  const showToast = message => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 2000);
  };

  // Signup handler
  const handleSignup = async (form, setError, setLoading) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.error || "Signup failed");
      showToast("Account created successfully! You can now log in.");
      setTimeout(() => { navigate("/"); }, 1200);
    } catch (err) {
      setError("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  // Login handler
  const handleLogin = async (form, setError, setLoading) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.error || "Login failed");
      localStorage.setItem("token", data.token);
      showToast("Login successful!");
      setTimeout(() => { navigate("/dashboard"); }, 1200);
    } catch (err) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleReferral = async (form, resetForm) => {
    setLoading(true);
    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("jobTitle", form.jobTitle);
    if (form.resume) data.append("resume", form.resume);
    try {
      const res = await fetch(`${API_BASE_URL}/candidates`, {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (!res.ok) {
        showToast(result.error || "Error submitting referral. Please try again.");
        setLoading(false);
        return;
      }
      showToast("Candidate referred successfully!");
      if (typeof resetForm === 'function') resetForm();
      setTimeout(() => window.location.reload(), 1200);
    } catch (err) {
      alert("Error submitting referral. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Expose showToast globally for Navbar logout
  React.useEffect(() => {
    window.showToast = showToast;
    return () => { window.showToast = undefined; };
  }, [showToast]);

  const [metrics, setMetrics] = useState({ total: 0, pending: 0, reviewed: 0, hired: 0 });
  React.useEffect(() => {
    fetch(`${API_BASE_URL}/api/metrics`).then(res => res.json()).then(setMetrics).catch(() => {});
  }, []);

  return (
    <>
      <Toast message={toast.message} show={toast.show} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/metrics" element={<Metrics stats={metrics} />} />
          <Route path="/dashboard" element={
            <div className="min-h-screen bg-gray-50 p-4 md:p-8">
              <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Dashboard apiBaseUrl={API_BASE_URL} />
                </div>
                <div>
                  <ReferralForm onSubmit={handleReferral} loading={loading} />
                </div>
              </div>
            </div>
          } />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  );
}
