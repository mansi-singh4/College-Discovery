import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import CollegeCard from "@/components/CollegeCard";
import FilterPanel from "@/components/FilterPanel";
import Pagination from "@/components/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const params = await searchParams;
  const search = params.search || "";

  const res = await fetch(
    `http://localhost:3000/api/colleges?search=${search}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex gap-8">
          <FilterPanel />

          <div className="flex-1">
            <SearchBar />

            <div className="space-y-6">
              {data.data.map((college: any) => (
                <CollegeCard
                  key={college.id}
                  college={college}
                />
              ))}
            </div>

            <Pagination />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}