
import React, { useEffect, useState } from "react";
import CandidateCard from "../components/CandidateCard";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";

export default function Dashboard({ apiBaseUrl }) {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${apiBaseUrl}/candidates`)
      .then(res => res.json())
      .then(data => setCandidates(data))
      .catch(() => setCandidates([]));
  }, [apiBaseUrl]);

  const handleStatusChange = (id, status) => {
    setLoading(true);
    fetch(`${apiBaseUrl}/candidates/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then(res => res.json())
      .then(updated => {
        setCandidates(candidates =>
          candidates.map(c => (c._id === id ? { ...c, status: updated.status } : c))
        );
      })
      .finally(() => setLoading(false));
  };

  const filtered = candidates.filter(c =>
    c.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
    c.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-4 mt-4">
        <SearchBar value={search} onChange={setSearch} />
        {filtered.length === 0 ? (
          <div className="text-gray-400 text-center">No candidates found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(candidate => (
              <CandidateCard
                key={candidate._id}
                candidate={candidate}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
