import React from "react";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Reviewed: "bg-blue-100 text-blue-800",
  Hired: "bg-green-100 text-green-800",
};

export default function CandidateCard({ candidate, onStatusChange }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-2 border border-gray-100">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">{candidate.name}</h2>
          <p className="text-gray-500 text-sm">{candidate.jobTitle}</p>
        </div>
        <span className={`px-2 py-1 rounded text-xs font-bold ${statusColors[candidate.status] || "bg-gray-100 text-gray-800"}`}>
          {candidate.status}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="status" className="text-xs text-gray-400">Update Status:</label>
        <select
          id="status"
          className="border rounded px-2 py-1 text-xs"
          value={candidate.status}
          onChange={e => onStatusChange(candidate._id, e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Hired">Hired</option>
        </select>
      </div>
    </div>
  );
}
