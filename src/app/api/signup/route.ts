import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    console.log("SIGNUP ROUTE HIT");

    const { name, email, password } =
      await req.json();

    const existingUser =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (existingUser) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = uuid();

    await prisma.verificationToken.create({
      data: {
        token,
        userId: user.id,
        expiresAt: new Date(
          Date.now() + 1000 * 60 * 60 * 24
        ),
      },
    });

    console.log(
      "VERIFICATION LINK:",
      `http://localhost:3000/verify-email?token=${token}`
    );

    console.log(
      "RESEND KEY EXISTS:",
      !!process.env.RESEND_API_KEY
    );

    console.log("ABOUT TO SEND EMAIL");

    try {
      const emailResult =
        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: email,
          subject:
            "Verify your EduDiscovery account",
          html: `
            <h2>Welcome to EduDiscovery</h2>

            <p>Please verify your email.</p>

            <a href="http://localhost:3000/verify-email?token=${token}">
              Verify Email
            </a>
          `,
        });

      console.log(
        "EMAIL RESULT:",
        emailResult
      );
    } catch (emailError) {
      console.error(
        "RESEND ERROR:",
        emailError
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Account created. Please verify your email.",
    });
  } catch (error) {
    console.error(
      "SIGNUP ERROR:",
      error
    );

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}