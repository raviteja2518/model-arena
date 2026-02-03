"use client";
import { useState } from "react";

export default function PromptInput({ setResults }: any) {
  const [prompt, setPrompt] = useState("");

  const submit = async () => {
    const res = await fetch("http://localhost:8000/compare", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    setResults(await res.json());
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow border mb-6">
    <textarea
      className="w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
      rows={3}
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      placeholder="Enter a prompt to compare models..."
    />

    <div className="flex justify-end mt-3">
      <button
        onClick={submit}
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
      >
        Compare
      </button>
    </div>
  </div>
  );
}
