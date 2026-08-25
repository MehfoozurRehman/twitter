"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleSignIn = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between p-6 sm:p-12">
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-[1200px] mx-auto w-full">
        <div className="flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-20 h-20 sm:w-40 sm:h-40 lg:w-72 lg:h-72 fill-white">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>

        <div className="flex flex-col items-start max-w-[440px] w-full">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-8 sm:mb-12">
            Happening now
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Join today.
          </h2>

          <div className="w-full space-y-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-neutral-200 active:scale-[0.99] text-black font-semibold text-base py-3 px-6 rounded-full transition cursor-pointer shadow"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
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

            <p className="text-xs text-neutral-500 leading-relaxed px-1">
              By signing up, you agree to the <span className="text-sky-500 hover:underline cursor-pointer">Terms of Service</span> and <span className="text-sky-500 hover:underline cursor-pointer">Privacy Policy</span>, including <span className="text-sky-500 hover:underline cursor-pointer">Cookie Use</span>.
            </p>
          </div>
        </div>
      </div>

      <footer className="text-xs text-neutral-500 flex flex-wrap justify-center gap-x-4 gap-y-2 py-4">
        <span className="hover:underline cursor-pointer">About</span>
        <span className="hover:underline cursor-pointer">Download the X app</span>
        <span className="hover:underline cursor-pointer">Help Center</span>
        <span className="hover:underline cursor-pointer">Terms of Service</span>
        <span className="hover:underline cursor-pointer">Privacy Policy</span>
        <span className="hover:underline cursor-pointer">Cookie Policy</span>
        <span className="hover:underline cursor-pointer">Accessibility</span>
        <span className="hover:underline cursor-pointer">Ads info</span>
        <span className="hover:underline cursor-pointer">Blog</span>
        <span className="hover:underline cursor-pointer">Careers</span>
        <span className="hover:underline cursor-pointer">Brand Resources</span>
        <span className="hover:underline cursor-pointer">Advertising</span>
        <span className="hover:underline cursor-pointer">Marketing</span>
        <span className="hover:underline cursor-pointer">X for Business</span>
        <span className="hover:underline cursor-pointer">Developers</span>
        <span className="hover:underline cursor-pointer">Directory</span>
        <span className="hover:underline cursor-pointer">Settings</span>
        <span>© 2026 X Corp.</span>
      </footer>
    </div>
  );
}
