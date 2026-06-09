"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/?search=${search}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        className="flex-1 border rounded-lg px-4 py-3"
      />

      <button
        onClick={handleSearch}
        className="bg-black text-white px-6 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}