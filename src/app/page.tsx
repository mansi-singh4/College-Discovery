export default async function Home() {
  const res = await fetch(
    "http://localhost:3000/api/colleges",
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        College Discovery
      </h1>

      <div className="grid gap-4">
        {data.data.map((college: any) => (
          <div
            key={college.id}
            className="border rounded-xl p-4"
          >
            <h2 className="text-xl font-semibold">
              {college.name}
            </h2>

            <p>{college.location}</p>

            <p>₹{college.fees}</p>

            <p>⭐ {college.rating}</p>
          </div>
        ))}
      </div>
    </main>
  );
}