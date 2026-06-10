import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import type { Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";


export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
     GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },

        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (
          !credentials?.email ||
          !credentials?.password
        ) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const validPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!validPassword) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt" as const,
  },

  callbacks: {
    async jwt({
  token,
  user,
}: {
  token: JWT;
  user: any;
}) {
  if (user) {
    token.id = user.id;
  }

      return token;
    },

   async session({
  session,
  token,
}: {
  session: Session;
  token: JWT;
}) {

   if (session.user) {
    session.user.id = token.id as string;
  }
      return session;
    },
  },

  pages: {
    signIn: "/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };