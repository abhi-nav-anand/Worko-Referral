import React, { useRef, useState } from "react";

export default function ReferralForm({ onSubmit, loading }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    resume: null,
  });
  const [error, setError] = useState("");
  const fileInput = useRef();

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm(f => ({ ...f, resume: files[0] }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.phone || !form.jobTitle) {
      setError("All fields except resume are required.");
      return;
    }
    if (form.resume && form.resume.type !== "application/pdf") {
      setError("Resume must be a PDF file.");
      return;
    }
    onSubmit(form, () => {
      setForm({ name: "", email: "", phone: "", jobTitle: "", resume: null });
      if (fileInput.current) fileInput.current.value = "";
    });
  };

  return (
    <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 border border-gray-100" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-2">Refer a Candidate</h2>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <input
        className="border rounded px-3 py-2"
        name="name"
        placeholder="Candidate Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        className="border rounded px-3 py-2"
        name="email"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        className="border rounded px-3 py-2"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        className="border rounded px-3 py-2"
        name="jobTitle"
        placeholder="Job Title"
        value={form.jobTitle}
        onChange={handleChange}
      />
      <input
        className="border rounded px-3 py-2"
        name="resume"
        type="file"
        accept="application/pdf"
        ref={fileInput}
        onChange={handleChange}
      />
      <button
        className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 disabled:opacity-50"
        type="submit"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Referral"}
      </button>
    </form>
  );
}
