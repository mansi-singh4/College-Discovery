import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { collegeId } = await req.json();

  const existing =
    await prisma.savedCollege.findFirst({
      where: {
        userId: session.user.id,
        collegeId,
      },
    });

  if (existing) {
    return NextResponse.json({
      success: true,
    });
  }

  await prisma.savedCollege.create({
    data: {
      userId: session.user.id,
      collegeId,
    },
  });

  return NextResponse.json({
    success: true,
  });
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { collegeId } = await req.json();

  await prisma.savedCollege.deleteMany({
    where: {
      userId: session.user.id,
      collegeId,
    },
  });

  return NextResponse.json({
    success: true,
  });
}

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json([]);
  }

  const saved =
    await prisma.savedCollege.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        college: true,
      },
    });

  return NextResponse.json(saved);
}