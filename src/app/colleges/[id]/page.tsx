import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function CollegeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id,
    },
  });

  if (!college) {
    return (
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold">
          College not found
        </h1>
      </main>
    );
  }

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-8 py-10 w-full">
        
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          
          <div className="flex flex-col md:flex-row gap-8">
            
            <div className="w-32 h-32 bg-surface-container rounded-2xl flex items-center justify-center text-5xl flex-shrink-0">
              🎓
            </div>

            <div className="flex-1">
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                  {college.stream}
                </span>

                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                  {college.courseLevel}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                {college.name}
              </h1>

              <p className="text-slate-500 text-lg mb-4">
                📍 {college.location}
              </p>

              <div className="flex flex-wrap gap-8 mt-6">
                
                <div>
                  <p className="text-sm uppercase text-slate-500">
                    Rating
                  </p>

                  <p className="text-2xl font-bold text-amber-500">
                    ⭐ {college.rating}
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase text-slate-500">
                    Annual Fees
                  </p>

                  <p className="text-2xl font-bold text-slate-900">
                    ₹{college.fees.toLocaleString()}
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="md:col-span-2 bg-white border border-slate-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              About College
            </h2>

            <p className="text-slate-600 leading-8">
              {college.overview}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              Quick Facts
            </h2>

            <div className="space-y-5">
              
              <div>
                <p className="text-sm text-slate-500">
                  Stream
                </p>

                <p className="font-semibold">
                  {college.stream}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Course Level
                </p>

                <p className="font-semibold">
                  {college.courseLevel}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Location
                </p>

                <p className="font-semibold">
                  {college.location}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Rating
                </p>

                <p className="font-semibold">
                  ⭐ {college.rating}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Fees
                </p>

                <p className="font-semibold">
                  ₹{college.fees.toLocaleString()}
                </p>
              </div>

            </div>
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}