"use client";

import { useState } from "react";
import Link from "next/link";
import EditProfileModal from "@/components/EditProfileModal";

export default function DashboardProfilePage() {
  const [profileTab, setProfileTab] = useState<"posts" | "replies" | "highlights" | "media" | "likes">("posts");
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  return (
    <div>
      <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-neutral-800 flex items-center gap-6 px-4 h-[53px]">
        <Link
          href="/dashboard"
          className="p-2 hover:bg-neutral-900 rounded-full transition cursor-pointer text-white"
          aria-label="Back to Dashboard"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <div className="flex flex-col">
          <h2 className="font-bold text-lg text-neutral-100 flex items-center gap-1.5 leading-tight">
            Mehfooz
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-sky-400 shrink-0">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </h2>
          <span className="text-xs text-neutral-500">142 posts</span>
        </div>
      </div>

      <div className="h-44 sm:h-52 bg-gradient-to-r from-sky-900 via-indigo-950 to-neutral-900 relative">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="px-4 pb-4 border-b border-neutral-800">
        <div className="flex justify-between items-end relative -mt-16 sm:-mt-20 mb-3">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-black bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-3xl sm:text-4xl text-white shadow-xl">
            MR
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditProfileOpen(true)}
              className="border border-neutral-700 hover:bg-neutral-900 active:scale-95 font-bold text-sm text-neutral-200 px-4 py-1.5 rounded-full transition cursor-pointer"
            >
              Edit profile
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-xl text-neutral-100 flex items-center gap-1.5">
            Mehfooz
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sky-400 shrink-0">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </h1>
          <span className="text-sm text-neutral-500">@mehfooz_dev</span>
          
          <p className="text-neutral-200 text-sm mt-3 leading-normal">
            Building modern web experiences & AI interfaces ⚡️ | Full-Stack Developer | Next.js, React & TypeScript enthusiast 🚀
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-neutral-500 mt-3">
            <div className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>San Francisco, CA</span>
            </div>

            <div className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
              <a href="https://github.com/mehfooz" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">github.com/mehfooz</a>
            </div>

            <div className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <span>Joined March 2021</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs mt-3">
            <span className="text-neutral-400">
              <strong className="text-neutral-100 font-bold">348</strong> Following
            </span>
            <span className="text-neutral-400">
              <strong className="text-neutral-100 font-bold">4.2K</strong> Followers
            </span>
          </div>
        </div>
      </div>

      <div className="flex border-b border-neutral-800 text-sm overflow-x-auto no-scrollbar">
        {(["posts", "replies", "highlights", "media", "likes"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setProfileTab(tab)}
            className="flex-1 min-w-[80px] py-3.5 hover:bg-neutral-900/60 transition text-center cursor-pointer capitalize font-medium relative"
          >
            <span className={profileTab === tab ? "font-bold text-neutral-100" : "text-neutral-500 hover:text-neutral-300"}>
              {tab}
            </span>
            {profileTab === tab && (
              <div className="absolute bottom-0 left-4 right-4 h-1 bg-sky-500 rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="divide-y divide-neutral-800">
        <Link href="/dashboard/post/4" className="block p-4 hover:bg-neutral-950/70 transition duration-200 cursor-pointer">
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2 ml-7 font-bold">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M16 4v4H8V4h8m2-2H6v8h12V2zm-4 10v6l-2 4-2-4v-6h4z" />
            </svg>
            <span>Pinned</span>
          </div>

          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shrink-0 text-sm shadow">
              MR
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-bold text-neutral-100 hover:underline">Mehfooz</span>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-sky-400 shrink-0">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-neutral-500 text-sm">@mehfooz_dev</span>
                  <span className="text-neutral-500 text-sm">·</span>
                  <span className="text-neutral-500 text-sm hover:underline">1d</span>
                </div>

                <button className="text-neutral-500 hover:text-sky-500 hover:bg-sky-500/10 p-1.5 rounded-full transition">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <circle cx="5" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="19" cy="12" r="2" />
                  </svg>
                </button>
              </div>

              <p className="text-neutral-200 text-[15px] mt-1 leading-normal">
                Shipped the full Twitter/X clone UI in pure Tailwind CSS and Next.js! Clean architecture, zero bloat, and pixel perfect ✨
              </p>

              <div className="flex justify-between items-center text-neutral-500 mt-3 max-w-md text-xs">
                <div className="flex items-center gap-1.5 hover:text-sky-400 group transition">
                  <div className="p-2 group-hover:bg-sky-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.54 1.107.31 1.68l-.707 1.768a.75.75 0 0 0 .963.963l2.073-.83a1.442 1.442 0 0 1 1.258.077c1.11.59 2.378.912 3.73.912Z" />
                    </svg>
                  </div>
                  <span>24</span>
                </div>

                <div className="flex items-center gap-1.5 hover:text-green-500 group transition">
                  <div className="p-2 group-hover:bg-green-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M4.5 12l3 3m-3-3 3-3m15 0-3 3m3-3-3-3" />
                    </svg>
                  </div>
                  <span>115</span>
                </div>

                <div className="flex items-center gap-1.5 hover:text-pink-600 group transition">
                  <div className="p-2 group-hover:bg-pink-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <span>842</span>
                </div>

                <div className="flex items-center gap-1.5 hover:text-sky-400 group transition">
                  <div className="p-2 group-hover:bg-sky-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125-1.125V4.125Z" />
                    </svg>
                  </div>
                  <span>12.4K</span>
                </div>

                <div className="flex items-center">
                  <div className="p-2 hover:bg-sky-500/10 hover:text-sky-400 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                  </div>
                  <div className="p-2 hover:bg-sky-500/10 hover:text-sky-400 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
      />
    </div>
  );
}
