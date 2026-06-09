"use client";

import { useRouter, useSearchParams } from "next/navigation";

import React from "react";


const FilterPanel = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleLocationChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const params = new URLSearchParams(
    searchParams.toString()
  );

  if (e.target.value) {
    params.set("location", e.target.value);
  } else {
    params.delete("location");
  }

  router.push(`/?${params.toString()}`);
};
const updateFilter = (
  key: string,
  value: string
) => {
  const params = new URLSearchParams(
    searchParams.toString()
  );

  if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }

  params.set("page", "1");

  router.push(`/?${params.toString()}`);
};
  return (
    <aside className="w-full md:w-72 flex-shrink-0">
<div className="bg-surface-container-lowest card-border rounded-xl p-6 sticky top-24">
<div className="flex justify-between items-center mb-6">
<h2 className="font-headline-md text-headline-md text-on-surface">Filters</h2>
<button className="text-primary text-label-sm font-label-sm hover:underline">Reset All</button>
</div>
{/* <!-- Filter Section: Categories --> */}
<label className="flex items-center gap-3 cursor-pointer">
  <input
    type="radio"
    name="stream"
    checked={
      searchParams.get("stream") === "Engineering"
    }
    onChange={() =>
      updateFilter("stream", "Engineering")
    }
  />
  <span>Engineering</span>
</label>

<label className="flex items-center gap-3 cursor-pointer">
  <input
    type="radio"
    name="stream"
    checked={
      searchParams.get("stream") === "Management"
    }
    onChange={() =>
      updateFilter("stream", "Management")
    }
  />
  <span>Management</span>
</label>

<label className="flex items-center gap-3 cursor-pointer">
  <input
    type="radio"
    name="stream"
    checked={
      searchParams.get("stream") === "Medicine"
    }
    onChange={() =>
      updateFilter("stream", "Medicine")
    }
  />
  <span>Medicine</span>
</label>

<label className="flex items-center gap-3 cursor-pointer">
  <input
    type="radio"
    name="stream"
    checked={
      searchParams.get("stream") === "Law"
    }
    onChange={() =>
      updateFilter("stream", "Law")
    }
  />
  <span>Law</span>
</label>
<div className="mb-8">
  <h3 className="text-label-md font-label-md text-on-surface-variant mb-4 uppercase tracking-wider">
    Location
  </h3>

  <input
    type="text"
    placeholder="Enter city..."
    defaultValue={searchParams.get("location") || ""}
    onChange={handleLocationChange}
    className="w-full border border-slate-200 rounded-lg px-3 py-2"
  />
</div>
{/* <!-- Filter Section: Program Type --> */}
<div className="mb-8">
<h3 className="text-label-md font-label-md text-on-surface-variant mb-4 uppercase tracking-wider">Course Level</h3>
<button
  onClick={() =>
    updateFilter("courseLevel", "Undergraduate")
  }
  className={`px-3 py-1 rounded-full text-label-sm font-label-sm transition-colors ${
    searchParams.get("courseLevel") ===
    "Undergraduate"
      ? "bg-secondary text-white"
      : "bg-surface-container-low text-on-surface-variant hover:bg-secondary-fixed"
  }`}
>
  Undergrad
</button>

<button
  onClick={() =>
    updateFilter("courseLevel", "PhD")
  }
  className={`px-3 py-1 rounded-full text-label-sm font-label-sm transition-colors ${
    searchParams.get("courseLevel") === "PhD"
      ? "bg-secondary text-white"
      : "bg-surface-container-low text-on-surface-variant hover:bg-secondary-fixed"
  }`}
>
  PhD
</button>



<button
  onClick={() =>
    updateFilter("courseLevel", "Diploma")
  }
  className={`px-3 py-1 rounded-full text-label-sm font-label-sm transition-colors ${
    searchParams.get("courseLevel") ===
    "Diploma"
      ? "bg-secondary text-white"
      : "bg-surface-container-low text-on-surface-variant hover:bg-secondary-fixed"
  }`}
>
  Diploma
</button>
</div>
{/* <!-- Filter Section: Fee Range --> */}
<div className="mb-8">
<h3 className="text-label-md font-label-md text-on-surface-variant mb-4 uppercase tracking-wider">Fee Range (Annual)</h3>
<input className="w-full h-1 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-secondary" type="range"/>
<div className="flex justify-between mt-2 text-label-sm font-label-sm text-on-surface-variant">
<span>₹50K</span>
<span>₹10L+</span>
</div>
</div>
{/* <!-- Ad Banner --> */}

</div>
</aside>
  )
}

export default FilterPanel