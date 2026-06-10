
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  setLoading(true);
  setError("");

  try {
    const result = await signIn("credentials", {
  email,
  password,
  redirect: false,
});

if (result?.error) {
  setError(result.error);
  return;
}

router.push("/");
router.refresh();
  } catch {
    setError("Something went wrong");
  } finally {
    setLoading(false);
  }
}
  return (
    <>
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-12 bg-background">
        <div className="w-full max-w-md">
          
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-indigo-100 flex items-center justify-center text-3xl">
                🎓
              </div>

              <h1 className="text-3xl font-bold text-slate-900">
                Welcome Back
              </h1>

              <p className="text-slate-500 mt-2">
                Sign in to continue exploring colleges
              </p>
            </div>

            <form
  onSubmit={handleSubmit}
  className="space-y-5"
>
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">
      Email Address
    </label>

    <input
      type="email"
      value={email}
      onChange={(e) =>
        setEmail(e.target.value)
      }
      placeholder="you@example.com"
      className="w-full px-4 py-3 border border-slate-200 rounded-xl"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">
      Password
    </label>

    <input
      type="password"
      value={password}
      onChange={(e) =>
        setPassword(e.target.value)
      }
      placeholder="Enter your password"
      className="w-full px-4 py-3 border border-slate-200 rounded-xl"
      required
    />
  </div>

  {error && (
    <p className="text-red-500 text-sm">
      {error}
    </p>
  )}

  <button
    type="submit"
    disabled={loading}
    className="w-full bg-black text-white py-3 rounded-xl font-semibold"
  >
    {loading
      ? "Signing In..."
      : "Sign In"}
  </button>
</form>

            <div className="relative my-6">
              <div className="border-t border-slate-200"></div>

              <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm text-slate-500">
                OR
              </span>
            </div>

            <button className="w-full border border-slate-200 py-3 rounded-xl font-medium hover:bg-slate-50 transition-all">
              Continue with Google
            </button>

            <p className="text-center text-sm text-slate-600 mt-6">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-indigo-600 font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}