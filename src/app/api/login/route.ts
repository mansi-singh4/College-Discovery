// import { prisma } from "@/lib/prisma";
// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import { signIn } from "next-auth/react";

// export async function POST(req: Request) {
//   try {
//     const { email, password } = await req.json();

//     const user = await prisma.user.findUnique({
//       where: {
//         email,
//       },
//     });

//     if (!user) {
//       return NextResponse.json(
//         {
//           error: "Invalid credentials",
//         },
//         {
//           status: 401,
//         }
//       );
//     }

//     const validPassword = await bcrypt.compare(
//       password,
//       user.password
//     );

//     if (!validPassword) {
//       return NextResponse.json(
//         {
//           error: "Invalid credentials",
//         },
//         {
//           status: 401,
//         }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       user: {
//         id: user.id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch {
//     return NextResponse.json(
//       {
//         error: "Something went wrong",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }