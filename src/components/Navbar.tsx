"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <header className="bg-surface-container-lowest border-b border-outline-variant top-100 w-full z-50">
<nav className="flex justify-between items-center h-16 w-full px-margin-desktop max-w-container-max mx-auto">
<div className="flex items-center gap-8">
<span className="text-headline-md font-headline-xl text-primary">EduDiscovery</span>
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
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Courses</a>
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
<button className="text-on-surface-variant font-label-md text-label-md px-4 py-2 hover:bg-surface-container-low transition-colors duration-200 rounded">Sign In</button>
<button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2 rounded-lg hover:opacity-90 transition-opacity active:scale-95 duration-150">Get Started</button>
</div>
</nav>
</header>
    </>
  );
}