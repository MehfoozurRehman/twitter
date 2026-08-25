"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
      <div className="w-full max-w-[400px] flex flex-col items-center">
        <Link href="/" className="mb-6 hover:opacity-80 transition" aria-label="X Logo">
          <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </Link>

        <div className="w-full bg-black sm:border sm:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-100 mb-6 text-center sm:text-left">
            Sign in to X
          </h1>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => router.push("/")}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-neutral-200 active:scale-[0.99] text-black font-semibold text-sm py-2.5 px-4 rounded-full transition cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Sign in with Google</span>
            </button>

            <button
              onClick={() => router.push("/")}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-neutral-200 active:scale-[0.99] text-black font-semibold text-sm py-2.5 px-4 rounded-full transition cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.82 1.11-1.96.99-3.1-.96.04-2.18.64-2.87 1.45-.6.69-1.13 1.83-1 2.95 1.08.08 2.22-.52 2.88-1.3" />
              </svg>
              <span>Sign in with Apple</span>
            </button>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-neutral-800" />
            <span className="px-3 text-xs text-neutral-500 font-medium">or</span>
            <div className="flex-1 h-px bg-neutral-800" />
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="border border-neutral-800 focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500 rounded-xl px-3 py-2 transition">
              <label className="text-xs text-neutral-500 block font-medium">
                Phone, email, or username
              </label>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder=""
                className="w-full bg-transparent text-neutral-100 text-base outline-none pt-0.5"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white hover:bg-neutral-200 active:scale-[0.99] text-black font-bold py-2.5 px-4 rounded-full transition cursor-pointer text-sm shadow"
            >
              Next
            </button>

            <button
              type="button"
              onClick={() => router.push("/")}
              className="w-full border border-neutral-700 hover:bg-neutral-900 active:scale-[0.99] text-white font-bold py-2.5 px-4 rounded-full transition cursor-pointer text-sm"
            >
              Forgot password?
            </button>
          </form>

          <div className="mt-8 text-neutral-500 text-sm">
            <span>Don&apos;t have an account? </span>
            <Link href="/" className="text-sky-500 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
