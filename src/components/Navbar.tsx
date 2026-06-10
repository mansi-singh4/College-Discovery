"use client";

import Link from "next/link";
import AuthButtons from "@/components/AuthButton";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-surface-container-lowest border-b border-outline-variant w-full z-50">
      <nav className="flex justify-between items-center h-16 w-full px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-8">
          <span className="text-headline-md font-headline-xl text-primary">
            EduDiscovery
          </span>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-secondary border-b-2 border-secondary pb-1 font-bold"
                  : "text-on-surface-variant hover:text-primary transition-colors"
              }
            >
              Colleges
            </Link>

            <Link
              href="/compare"
              className={
                pathname === "/compare"
                  ? "text-secondary border-b-2 border-secondary pb-1 font-bold"
                  : "text-on-surface-variant hover:text-primary transition-colors"
              }
            >
              Compare
            </Link>

            <Link
              href="/saved"
              className={
                pathname === "/saved"
                  ? "text-secondary border-b-2 border-secondary pb-1 font-bold"
                  : "text-on-surface-variant hover:text-primary transition-colors"
              }
            >
              Saved
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <AuthButtons />
        </div>
      </nav>
    </header>
  );
}