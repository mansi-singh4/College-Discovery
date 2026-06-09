
import Link from "next/link";
type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  overview: string;
};



export default function CollegeCard({
  college,
}: {
  college: College;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all group flex flex-col md:flex-row items-start md:items-center gap-6">
      
      <div className="w-20 h-20 bg-surface-container rounded-lg flex items-center justify-center p-2 flex-shrink-0">
        <div className="w-full h-full rounded bg-surface-container-high flex items-center justify-center">
          🎓
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex items-center gap-3 mb-1">
          <span className="bg-surface-container-low ttext-slate-500 text-label-sm font-label-sm px-2 py-0.5 rounded">
            Engineering
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

          <div className="border-l border-outline-variant h-8 hidden sm:block"></div>

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
        <button className="border border-slate-200 text-slate-900 font-label-md text-label-md px-6 py-2.5 rounded-lg hover:bg-surface-container-low transition-all">
          Compare
        </button>

        <button className="border border-slate-200 text-slate-900 font-label-md text-label-md px-6 py-2.5 rounded-lg hover:bg-surface-container-low transition-all">
          Save
        </button>

        <Link
          href={`/colleges/${college.id}`}
          className="bg-black text-white px-6 py-2.5 rounded-lg text-center"
        >
          Details
        </Link>
              </div>
    </div>
  );
}