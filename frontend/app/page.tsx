"use client";
import { useState } from "react";
import PromptInput from "../components/PromptInput";
import ResponseCard from "../components/Responsecard";
import Loader from "../components/Loader";

export default function Home() {
  const [results, setResults] = useState<any>(null);

  return (
    <main className="p-6">
      <PromptInput setResults={setResults} />
      {results && (
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {Object.entries(results).map(([model, data]: any) => (
            <ResponseCard key={model} model={model} data={data} />
          ))}
        </div>
      )}
    </main>
  );
}
