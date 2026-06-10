// import { prisma } from "@/lib/prisma";

// export default async function VerifyEmail({
//   searchParams,
// }: {
//   searchParams: Promise<{
//     token?: string;
//   }>;
// }) {
//   const { token } = await searchParams;

//   if (!token) {
//     return <h1>Invalid token</h1>;
//   }

//   const verificationToken =
//     await prisma.verificationToken.findUnique({
//       where: {
//         token,
//       },
//     });

//   if (!verificationToken) {
//     return <h1>Invalid token</h1>;
//   }

//   if (
//     verificationToken.expiresAt <
//     new Date()
//   ) {
//     return <h1>Token expired</h1>;
//   }

//   await prisma.user.update({
//     where: {
//       id: verificationToken.userId,
//     },
//     data: {
//       emailVerified: true,
//     },
//   });

//   await prisma.verificationToken.delete({
//     where: {
//       id: verificationToken.id,
//     },
//   });

//   return (
//     <main className="max-w-xl mx-auto p-8">
//       <h1 className="text-3xl font-bold">
//         Email Verified 🎉
//       </h1>

//       <p className="mt-4">
//         You can now sign in.
//       </p>
//     </main>
//   );
// }