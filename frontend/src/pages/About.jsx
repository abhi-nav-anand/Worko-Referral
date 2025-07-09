import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Navbar />
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow mt-10">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">About Worko Referral System</h1>
        <p className="text-gray-700 mb-2">
          Welcome to Worko, where opportunity meets connection.

We’re on a mission to redefine the job search experience by tapping into the power of professional networks. Our platform is built around one simple idea: the best job opportunities often come through referrals. That’s why we created a smarter, faster, and more trusted way for candidates to land their dream jobs — with a little help from those who know them best.

Whether you’re a job seeker looking for your next big opportunity, or a professional ready to refer great talent to your company, [Your App Name] makes the process seamless. We connect applicants to current employees across companies, enabling real-time referral requests, transparent communication, and increased chances of success.

</p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Why choose us?</li>
          <li>Verified Referrals: Boost your chances of getting hired with trusted internal endorsements.</li>
          <li>Faster Hiring: Skip the long queues and get noticed quicker by hiring managers.</li>
          <li>Rewards for Referrers: Help others and earn recognition or incentives for successful referrals.</li>
          <li>We believe in empowering people — not just with job listings, but with real connections that open real doors.</li>
          <li>Join us in building a future where your next job is just one trusted referral away.</li>
        </ul>
        <p className="text-gray-500 text-sm">&copy; 2025 Worko. All rights reserved.</p>
      </div>
    </div>
  );
}
