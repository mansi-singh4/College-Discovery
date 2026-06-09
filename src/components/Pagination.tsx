"use client";

import Link from "next/link";

export default function Pagination({
  currentPage,
  totalPages,
  search,
  sort,
}: {
  currentPage: number;
  totalPages: number;
  search: string;
  sort: string;
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-3 mt-10">
      {currentPage > 1 && (
        <Link
          href={`/?search=${search}&sort=${sort}&page=${currentPage - 1}`}
          className="px-4 py-2 border rounded-lg"
        >
          Previous
        </Link>
      )}

      <span className="px-4 py-2 font-semibold">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link
          href={`/?search=${search}&sort=${sort}&page=${currentPage + 1}`}
          className="px-4 py-2 border rounded-lg"
        >
          Next
        </Link>
      )}
    </div>
  );
}