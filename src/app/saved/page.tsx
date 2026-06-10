"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollegeCard from "@/components/CollegeCard";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  overview: string;
  stream: string;
  courseLevel: string;
};

export default function SavedPage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSaved() {
      try {
        const res = await fetch("/api/saved");

        const data = await res.json();

        const savedColleges = data.map(
          (item: any) => item.college
        );

        setColleges(savedColleges);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchSaved();
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-8 py-8 w-full">
        <h1 className="text-3xl font-bold mb-8">
          Saved Colleges
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : colleges.length === 0 ? (
          <p className="text-slate-500">
            No saved colleges yet.
          </p>
        ) : (
          <div className="space-y-6">
            {colleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}