"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompareTable from "@/components/CompareTable";
import { useCompareStore } from "@/store/compareStore";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  overview: string;
};

export default function ComparePage() {
  const compared = useCompareStore((state) => state.compared);

  const [colleges, setColleges] = useState<College[]>([]);

  useEffect(() => {
    async function fetchColleges() {
      const res = await fetch("/api/colleges");
      const data = await res.json();

      const comparedColleges = data.data.filter(
        (college: College) => compared.includes(college.id)
      );

      setColleges(comparedColleges);
    }

    fetchColleges();
  }, [compared]);

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-8 py-8 w-full">
        <h1 className="text-3xl font-bold mb-8">
          Compare Colleges
        </h1>

        <CompareTable colleges={colleges} />
      </main>

      <Footer />
    </>
  );
}