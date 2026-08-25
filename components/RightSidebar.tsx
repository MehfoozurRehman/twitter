"use client";

import { useState } from "react";
import Link from "next/link";

export default function RightSidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const mockUsers = [
    { name: "Next.js", handle: "@nextjs", initial: "NX", verified: true, gradient: "from-cyan-500 to-blue-600" },
    { name: "React", handle: "@reactjs", initial: "RC", verified: true, gradient: "from-emerald-400 to-green-700" },
    { name: "Tailwind CSS", handle: "@tailwindcss", initial: "TW", verified: true, gradient: "from-sky-400 to-blue-600" },
  ];

  const mockTopics = [
    { tag: "#ArtificialIntelligence", posts: "142.8K posts" },
    { tag: "#NextJS16", posts: "98.4K posts" },
    { tag: "#TailwindCSS", posts: "45.1K posts" },
  ];

  const filteredUsers = mockUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.handle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTopics = mockTopics.filter((t) =>
    t.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="hidden lg:flex flex-col w-[350px] xl:w-[390px] px-4 py-2 gap-4 sticky top-0 h-screen overflow-y-auto no-scrollbar select-none">
      <div className="sticky top-0 bg-black pt-1 pb-1 z-30">
        <div className="relative">
          {isSearchFocused && (
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsSearchFocused(false)}
            />
          )}

          <div className="relative flex items-center bg-neutral-900 focus-within:bg-black focus-within:ring-1 focus-within:ring-sky-500 focus-within:border-sky-500 border border-transparent rounded-full transition group z-20">
            <div className="absolute left-4 text-neutral-500 group-focus-within:text-sky-500 transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search"
              className="w-full bg-transparent py-2.5 pl-12 pr-10 text-sm text-neutral-100 placeholder-neutral-500 outline-none rounded-full"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 p-1 bg-neutral-700 hover:bg-neutral-600 rounded-full text-white cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {isSearchFocused && (
            <div className="absolute top-12 left-0 right-0 bg-black border border-neutral-800 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] p-3 z-30 min-h-[140px] max-h-[360px] overflow-y-auto">
              {searchQuery.trim() === "" ? (
                <div>
                  <div className="flex justify-between items-center px-2 py-1 mb-2">
                    <span className="font-bold text-sm text-neutral-100">Recent</span>
                    <button className="text-xs text-sky-500 hover:underline cursor-pointer">Clear all</button>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between p-2 hover:bg-neutral-900 rounded-xl cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-neutral-200">Next.js 16</span>
                      </div>
                      <button className="text-neutral-500 hover:text-white p-1">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-2 hover:bg-neutral-900 rounded-xl cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-neutral-200">Tailwind CSS</span>
                      </div>
                      <button className="text-neutral-500 hover:text-white p-1">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredUsers.length > 0 && (
                    <div>
                      <span className="text-xs font-bold text-neutral-500 px-2 uppercase tracking-wider block mb-1">People</span>
                      {filteredUsers.map((u) => (
                        <div
                          key={u.handle}
                          className="flex items-center gap-3 p-2 hover:bg-neutral-900 rounded-xl cursor-pointer transition"
                        >
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${u.gradient} flex items-center justify-center font-bold text-white text-xs shrink-0 shadow`}>
                            {u.initial}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-bold text-sm text-neutral-100 truncate flex items-center gap-1">
                              {u.name}
                              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-sky-400 shrink-0">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </svg>
                            </span>
                            <span className="text-xs text-neutral-500 truncate">{u.handle}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {filteredTopics.length > 0 && (
                    <div>
                      <span className="text-xs font-bold text-neutral-500 px-2 uppercase tracking-wider block mb-1">Topics</span>
                      {filteredTopics.map((t) => (
                        <div
                          key={t.tag}
                          className="p-2 hover:bg-neutral-900 rounded-xl cursor-pointer transition"
                        >
                          <p className="text-sm font-bold text-neutral-100">{t.tag}</p>
                          <span className="text-xs text-neutral-500">{t.posts}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 overflow-hidden">
        <h2 className="font-extrabold text-xl px-4 pt-3 pb-2 text-neutral-100">
          What&apos;s happening
        </h2>

        <div className="divide-y divide-neutral-900">
          <div className="px-4 py-3 hover:bg-neutral-900/50 transition cursor-pointer flex justify-between">
            <div>
              <span className="text-xs text-neutral-500 font-medium">Technology · Trending</span>
              <p className="font-bold text-sm text-neutral-100 mt-0.5">#ArtificialIntelligence</p>
              <span className="text-xs text-neutral-500">142.8K posts</span>
            </div>
            <button className="text-neutral-500 hover:text-sky-500 h-fit p-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
            </button>
          </div>

          <div className="px-4 py-3 hover:bg-neutral-900/50 transition cursor-pointer flex justify-between">
            <div>
              <span className="text-xs text-neutral-500 font-medium">Web Development · Trending</span>
              <p className="font-bold text-sm text-neutral-100 mt-0.5">Tailwind CSS v4</p>
              <span className="text-xs text-neutral-500">38.4K posts</span>
            </div>
            <button className="text-neutral-500 hover:text-sky-500 h-fit p-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
            </button>
          </div>

          <div className="px-4 py-3 hover:bg-neutral-900/50 transition cursor-pointer flex justify-between">
            <div>
              <span className="text-xs text-neutral-500 font-medium">Sports · Trending</span>
              <p className="font-bold text-sm text-neutral-100 mt-0.5">Champions League</p>
              <span className="text-xs text-neutral-500">92.1K posts</span>
            </div>
            <button className="text-neutral-500 hover:text-sky-500 h-fit p-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
            </button>
          </div>

          <div className="px-4 py-3 hover:bg-neutral-900/50 transition cursor-pointer flex justify-between">
            <div>
              <span className="text-xs text-neutral-500 font-medium">Design · Trending</span>
              <p className="font-bold text-sm text-neutral-100 mt-0.5">#UIUX</p>
              <span className="text-xs text-neutral-500">19.7K posts</span>
            </div>
            <button className="text-neutral-500 hover:text-sky-500 h-fit p-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-4 py-3 hover:bg-neutral-900/40 transition cursor-pointer text-sky-500 text-sm">
          Show more
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 overflow-hidden">
        <h2 className="font-extrabold text-xl px-4 pt-3 pb-2 text-neutral-100">
          Who to follow
        </h2>

        <div className="divide-y divide-neutral-900">
          <div className="px-4 py-3 hover:bg-neutral-900/50 transition flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow">
                TW
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-sm text-neutral-100 hover:underline truncate flex items-center gap-1 cursor-pointer">
                  Tailwind Labs
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-sky-400 shrink-0">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-neutral-500 text-xs truncate">@tailwindcss</span>
              </div>
            </div>
            <button className="bg-white hover:bg-neutral-200 active:scale-95 text-black font-bold text-xs px-4 py-1.5 rounded-full transition cursor-pointer">
              Follow
            </button>
          </div>

          <div className="px-4 py-3 hover:bg-neutral-900/50 transition flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-green-700 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow">
                RC
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-sm text-neutral-100 hover:underline truncate flex items-center gap-1 cursor-pointer">
                  React Core
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-sky-400 shrink-0">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-neutral-500 text-xs truncate">@reactjs</span>
              </div>
            </div>
            <button className="bg-white hover:bg-neutral-200 active:scale-95 text-black font-bold text-xs px-4 py-1.5 rounded-full transition cursor-pointer">
              Follow
            </button>
          </div>

          <div className="px-4 py-3 hover:bg-neutral-900/50 transition flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-700 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow">
                AI
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-sm text-neutral-100 hover:underline truncate flex items-center gap-1 cursor-pointer">
                  Open Source AI
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-sky-400 shrink-0">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-neutral-500 text-xs truncate">@opensource_ai</span>
              </div>
            </div>
            <button className="bg-white hover:bg-neutral-200 active:scale-95 text-black font-bold text-xs px-4 py-1.5 rounded-full transition cursor-pointer">
              Follow
            </button>
          </div>
        </div>

        <div className="px-4 py-3 hover:bg-neutral-900/40 transition cursor-pointer text-sky-500 text-sm">
          Show more
        </div>
      </div>

      <footer className="px-4 text-xs text-neutral-500 flex flex-wrap gap-x-3 gap-y-1 pb-8">
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Cookie Policy</a>
        <a href="#" className="hover:underline">Accessibility</a>
        <a href="#" className="hover:underline">Ads info</a>
        <a href="#" className="hover:underline">More ···</a>
        <span>© 2026 X Corp.</span>
      </footer>
    </aside>
  );
}
