import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import CollegeCard from "@/components/CollegeCard";
import FilterPanel from "@/components/FilterPanel";
import Pagination from "@/components/Pagination";

export default async function Home({
  searchParams,
}: {
 searchParams: Promise<{
  search?: string;
  sort?: string;
}>;


}) {
  const params = await searchParams;
  const search = params.search || "";
  const sort = params.sort || "";
  
  
  const res = await fetch(
  `http://localhost:3000/api/colleges?search=${search}&sort=${sort}`,
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
  {data.data.length === 0 ? (
    <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
      <h2 className="text-2xl font-semibold text-slate-900 mb-2">
        No colleges found
      </h2>

      <p className="text-slate-500">
        Try searching with a different keyword.
      </p>
    </div>
  ) : (
    data.data.map((college: any) => (
      <CollegeCard
        key={college.id}
        college={college}
      />
    ))
  )}
</div>

            <Pagination />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}