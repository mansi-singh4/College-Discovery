import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get("search") || "";
  const location = req.nextUrl.searchParams.get("location") || "";
  const sort = req.nextUrl.searchParams.get("sort") || "";

  const page = Number(req.nextUrl.searchParams.get("page")) || 1;
  const limit = Number(req.nextUrl.searchParams.get("limit")) || 10;

  const where = {
    name: {
      contains: search,
      mode: "insensitive" as const,
    },
    location: {
      contains: location,
      mode: "insensitive" as const,
    },
  };

  let orderBy = {};

if (sort === "rating") {
  orderBy = {
    rating: "desc",
  };
} else if (sort === "fees-low") {
  orderBy = {
    fees: "asc",
  };
} else if (sort === "fees-high") {
  orderBy = {
    fees: "desc",
  };
} else {
  orderBy = {
    rating: "desc",
  };
}

  const [colleges, total] = await Promise.all([
    prisma.college.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy,
    }),

    prisma.college.count({
      where,
    }),
  ]);

  return NextResponse.json({
    data: colleges,
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
  });
}