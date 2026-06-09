import { prisma } from "@/lib/prisma";

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
    return <h1>College not found</h1>;
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        {college.name}
      </h1>

      <p className="text-gray-600 mb-4">
        📍 {college.location}
      </p>

      <p className="mb-4">
        ⭐ {college.rating}
      </p>

      <p className="mb-4">
        Fees: ₹{college.fees.toLocaleString()}
      </p>

      <p>{college.overview}</p>
    </main>
  );
}