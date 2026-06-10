"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompareTable from "@/components/CompareTable";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  overview: string;
};

export default function ComparePage() {
  const [colleges, setColleges] =
    useState<College[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function fetchCompared() {
      try {
        const res = await fetch(
          "/api/compare"
        );

        const data = await res.json();

        const comparedColleges = data.map(
          (item: any) => item.college
        );

        setColleges(comparedColleges);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCompared();
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-8 py-8 w-full">
        <h1 className="text-3xl font-bold mb-8">
          Compare Colleges
        </h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <CompareTable colleges={colleges} />
        )}
      </main>

      <Footer />
    </>
  );
}