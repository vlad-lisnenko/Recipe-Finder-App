"use client";
// pages/index.tsx
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [maxTime, setMaxTime] = useState("");

  const isFormValid = query || cuisine || maxTime;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const params = new URLSearchParams();
    if (query) params.append("query", query);
    if (cuisine) params.append("cuisine", cuisine);
    if (maxTime) params.append("maxTime", maxTime);

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Recipe Search
        </h1>

        <input
          type="text"
          placeholder="Search recipes (e.g., pasta)"
          className="w-full p-2 border rounded-md text-gray-800"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="w-full p-2 border rounded-md text-gray-800"
        >
          <option value="">Select cuisine</option>
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
          <option value="chinese">Chinese</option>
        </select>

        <input
          type="number"
          min="1"
          placeholder="Max preparation time (minutes)"
          className="w-full p-2 border rounded-md text-gray-800"
          value={maxTime}
          onChange={(e) => setMaxTime(e.target.value)}
        />

        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
            isFormValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!isFormValid}
        >
          Next
        </button>
      </form>
    </main>
  );
}
