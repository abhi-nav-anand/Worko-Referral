import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="border rounded px-3 py-2 w-full mb-4"
      placeholder="Search by job title or status..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
