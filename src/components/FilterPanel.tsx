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
  return (
    <aside className="w-full md:w-72 flex-shrink-0">
<div className="bg-surface-container-lowest card-border rounded-xl p-6 sticky top-24">
<div className="flex justify-between items-center mb-6">
<h2 className="font-headline-md text-headline-md text-on-surface">Filters</h2>
<button className="text-primary text-label-sm font-label-sm hover:underline">Reset All</button>
</div>
{/* <!-- Filter Section: Categories --> */}
<div className="mb-8">
<h3 className="text-label-md font-label-md text-on-surface-variant mb-4 uppercase tracking-wider">Stream</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input defaultChecked className="w-4 h-4 rounded border-outline text-secondary focus:ring-secondary" type="checkbox"/>
<span className="text-body-md font-body-md text-on-surface group-hover:text-primary transition-colors">Engineering</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 rounded border-outline text-secondary focus:ring-secondary" type="checkbox"/>
<span className="text-body-md font-body-md text-on-surface group-hover:text-primary transition-colors">Management</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 rounded border-outline text-secondary focus:ring-secondary" type="checkbox"/>
<span className="text-body-md font-body-md text-on-surface group-hover:text-primary transition-colors">Medicine</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 rounded border-outline text-secondary focus:ring-secondary" type="checkbox"/>
<span className="text-body-md font-body-md text-on-surface group-hover:text-primary transition-colors">Law</span>
</label>
</div>
</div>

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
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-label-sm font-label-sm hover:bg-secondary-fixed transition-colors">Undergrad</button>
<button className="px-3 py-1 bg-secondary text-on-secondary rounded-full text-label-sm font-label-sm">Postgrad</button>
<button className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-label-sm font-label-sm hover:bg-secondary-fixed transition-colors">PhD</button>
<button className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-label-sm font-label-sm hover:bg-secondary-fixed transition-colors">Diploma</button>
</div>
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