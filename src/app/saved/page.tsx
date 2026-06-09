"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollegeCard from "@/components/CollegeCard";
import { useSavedStore } from "@/store/savedStore";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  overview: string;
};

export default function SavedPage() {
  const saved = useSavedStore((state) => state.saved);

  const [colleges, setColleges] = useState<College[]>([]);

  useEffect(() => {
    async function fetchColleges() {
      const res = await fetch("/api/colleges");
      const data = await res.json();

      const savedColleges = data.data.filter(
        (college: College) => saved.includes(college.id)
      );

      setColleges(savedColleges);
    }

    fetchColleges();
  }, [saved]);

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-8 py-8 w-full">
        <h1 className="text-3xl font-bold mb-8">
          Saved Colleges
        </h1>

        <div className="space-y-6">
          {colleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}