import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Navbar />
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-20 px-4">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 leading-tight">Refer Top Talent, <span className="text-blue-500">Get Rewarded</span></h1>
          <p className="text-lg text-gray-700 mb-6">Welcome to Worko's Candidate Referral Management System. Easily refer candidates, track their status, and help build great teams!</p>
          <div className="flex gap-4">
            <Link to="/signup" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">Get Started</Link>
            <Link to="/about" className="text-blue-600 font-semibold hover:underline">Learn More</Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-6">
          <img src="/referral-hero.svg" alt="Referral" className="w-80 max-w-full" onError={e => e.target.style.display='none'} />
          <img src="/teamwork.svg" alt="Teamwork" className="w-60 max-w-full rounded-xl shadow-lg" onError={e => e.target.style.display='none'} />
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Why Refer with Worko?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Help your friends and colleagues find great opportunities.</li>
          <li>Track every referral and its status in real time.</li>
          <li>Earn rewards for successful hires.</li>
          <li>Contribute to building high-performing teams.</li>
        </ul>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2 border border-gray-100">
            <h3 className="text-lg font-semibold text-blue-600 mb-1">How It Works</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-1">
              <li>Sign up and log in to your account.</li>
              <li>Refer a candidate using our simple form.</li>
              <li>Track the progress of your referrals on the dashboard.</li>
              <li>Get notified when your referral is hired!</li>
            </ol>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2 border border-gray-100">
            <h3 className="text-lg font-semibold text-blue-600 mb-1">What Makes Us Different?</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Modern, user-friendly interface for easy referrals.</li>
              <li>Transparent status updates for every candidate.</li>
              <li>Secure and private data handling.</li>
              <li>Fast, responsive support team.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
