
"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-on-surface-variant">
          Welcome, {session.user?.name}
        </span>

        <button
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
          className="text-on-surface-variant font-label-md px-4 py-2 hover:bg-surface-container-low rounded transition-colors"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <>
      <Link
        href="/signin"
        className="text-on-surface-variant font-label-md px-4 py-2 hover:bg-surface-container-low rounded transition-colors"
      >
        Sign In
      </Link>

      <Link
        href="/signup"
        className="bg-primary text-on-primary font-label-md px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
      >
        Get Started
      </Link>
    </>
  );
}