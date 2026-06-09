"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const router = useRouter();

const handleSearch = () => {
  router.push(
    `/?search=${search}&sort=${sort}`
  );
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
<select
  value={sort}
  onChange={(e) => setSort(e.target.value)}
  className="w-full pl-12 pr-10 py-3 bg-surface-container-lowest card-border rounded-xl"
>
  <option value="">Sort By</option>
  <option value="rating">Rating: High to Low</option>
  <option value="fees-low">Fees: Low to High</option>
  <option value="fees-high">Fees: High to Low</option>
</select>

      <button
        onClick={handleSearch}
        className="bg-black text-white px-6 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}