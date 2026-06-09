type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  overview: string;
};

export default function CompareTable({
  colleges,
}: {
  colleges: College[];
}) {
  if (colleges.length === 0) {
    return (
      <div className="text-center py-20">
        No colleges selected for comparison.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-xl border">
      <table className="w-full">
        <tbody>
          <tr>
            <th className="p-4 text-left">Name</th>
            {colleges.map((college) => (
              <td key={college.id} className="p-4">
                {college.name}
              </td>
            ))}
          </tr>

          <tr>
            <th className="p-4 text-left">Location</th>
            {colleges.map((college) => (
              <td key={college.id} className="p-4">
                {college.location}
              </td>
            ))}
          </tr>

          <tr>
            <th className="p-4 text-left">Fees</th>
            {colleges.map((college) => (
              <td key={college.id} className="p-4">
                ₹{college.fees.toLocaleString()}
              </td>
            ))}
          </tr>

          <tr>
            <th className="p-4 text-left">Rating</th>
            {colleges.map((college) => (
              <td key={college.id} className="p-4">
                ⭐ {college.rating}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}