import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-12 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#3B82F6"/><text x="16" y="22" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">W</text></svg>
          <span className="font-bold text-lg tracking-tight">Worko</span>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="/about" className="hover:underline">About</a>
          <a href="/metrics" className="hover:underline">Metrics</a>
          <a href="mailto:support@worko.com" className="hover:underline">Contact</a>
        </div>
        <div className="text-xs text-blue-100">&copy; {new Date().getFullYear()} Worko. All rights reserved.</div>
      </div>
    </footer>
  );
}
