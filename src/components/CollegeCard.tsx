"use client";

import Link from "next/link";
import { useSavedStore } from "@/store/savedStore";
import { useCompareStore } from "@/store/compareStore";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  overview: string;
  stream: string;
};

export default function CollegeCard({
  college,
}: {
  college: College;
}) {
  const saved = useSavedStore((state) => state.saved);
  const toggleSaved = useSavedStore((state) => state.toggleSaved);

  const compared = useCompareStore((state) => state.compared);
  const toggleCompare = useCompareStore((state) => state.toggleCompare);

  const isSaved = saved.includes(college.id);
  const isCompared = compared.includes(college.id);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all group flex flex-col md:flex-row items-start md:items-center gap-6">
      
      <div className="w-20 h-20 bg-surface-container rounded-lg flex items-center justify-center p-2 flex-shrink-0">
        <div className="w-full h-full rounded bg-surface-container-high flex items-center justify-center">
          🎓
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex items-center gap-3 mb-1">
          <span className="bg-surface-container-low text-slate-500 text-label-sm font-label-sm px-2 py-0.5 rounded">
            {college.stream}
          </span>

          <span className="flex items-center gap-1 text-indigo-600 text-label-sm font-label-sm">
            ⭐ {college.rating}
          </span>
        </div>

        <h2 className="font-headline-md text-headline-md text-slate-900 group-hover:text-indigo-600 transition-colors">
          {college.name}
        </h2>

        <p className="text-body-sm font-body-sm text-slate-500 flex items-center gap-1 mt-1">
          📍 {college.location}
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <div>
            <p className="text-label-sm font-label-sm text-slate-500 uppercase">
              Course Fees
            </p>

            <p className="text-body-md font-body-md font-semibold text-slate-900">
              ₹{college.fees.toLocaleString()}
            </p>
          </div>

          <div className="border-l border-slate-200 h-8 hidden sm:block"></div>

          <div>
            <p className="text-label-sm font-label-sm text-slate-500 uppercase">
              Overview
            </p>

            <p className="text-body-sm text-indigo-600 max-w-sm truncate">
              {college.overview}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto">
        
        <button
          onClick={() => toggleCompare(college.id)}
          className={`px-6 py-2.5 rounded-lg transition-all ${
            isCompared
              ? "bg-indigo-600 text-white"
              : "border border-slate-200 text-slate-900 hover:bg-slate-100"
          }`}
        >
          {isCompared ? "Comparing ✓" : "Compare"}
        </button>

        <button
          onClick={() => toggleSaved(college.id)}
          className={`px-6 py-2.5 rounded-lg transition-all ${
            isSaved
              ? "bg-green-600 text-white"
              : "border border-slate-200 text-slate-900 hover:bg-slate-100"
          }`}
        >
          {isSaved ? "Saved ✓" : "Save"}
        </button>

        <Link
          href={`/colleges/${college.id}`}
          className="bg-white text-black-600 border border-black-600 hover:bg-black-100 px-6 py-2.5 rounded-lg text-center"
        >
          Details
        </Link>

      </div>
    </div>
  );
}