"use client";

import { useState } from "react";

export default function VoteButtons({ model }: { model: string }) {
  const [rating, setRating] = useState<number | null>(null);

  const vote = async (value: number) => {
    setRating(value);

    await fetch("http://localhost:8000/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        rating: value,
      }),
    });
  };

  return (
    <div className="flex justify-center gap-2 mt-3">
      {[1, 2, 3, 4, 5].map((v) => (
        <button
          key={v}
          onClick={() => vote(v)}
          className={`px-3 py-1 rounded-md text-sm border transition
            ${
              rating === v
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100"
            }
          `}
        >
          {v}⭐
        </button>
      ))}
    </div>
  );
}
