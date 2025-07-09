import React from "react";
import Navbar from "../components/Navbar";

export default function Metrics({ stats }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Navbar />
      <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 border border-gray-100 mt-8 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-2 text-blue-700">Referral Metrics</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 min-w-[120px] bg-blue-50 rounded p-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-700">{stats.total}</span>
            <span className="text-gray-600">Total Candidates</span>
          </div>
          <div className="flex-1 min-w-[120px] bg-yellow-50 rounded p-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-yellow-600">{stats.pending}</span>
            <span className="text-gray-600">Pending</span>
          </div>
          <div className="flex-1 min-w-[120px] bg-blue-100 rounded p-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-blue-800">{stats.reviewed}</span>
            <span className="text-gray-600">Reviewed</span>
          </div>
          <div className="flex-1 min-w-[120px] bg-green-50 rounded p-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-green-700">{stats.hired}</span>
            <span className="text-gray-600">Hired</span>
          </div>
        </div>
      </div>
    </div>
  );
}
