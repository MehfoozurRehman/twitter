import LoginButton from "@/components/login-button";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const cookie = await cookies();

  const userId = cookie.get("user-id");

  if (userId) redirect("/dashboard");

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 sm:p-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-[1000px] mx-auto w-full">
        <div className="flex items-center justify-center shrink-0">
          <svg
            viewBox="0 0 24 24"
            className="w-20 h-20 sm:w-36 sm:h-36 lg:w-64 lg:h-64 fill-white"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>

        <div className="flex flex-col items-start max-w-[400px] w-full">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 sm:mb-10">
            Happening now
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Join today.
          </h2>

          <div className="w-full">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
}
