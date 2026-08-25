"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  onOpenPostPopup: () => void;
}

export default function Sidebar({ onOpenPostPopup }: SidebarProps) {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/dashboard";
  const isExplore = pathname === "/dashboard/explore";
  const isNotifications = pathname === "/dashboard/notifications";
  const isBookmarks = pathname === "/dashboard/bookmarks";
  const isProfile = pathname === "/dashboard/profile";

  return (
    <header className="sticky top-0 h-screen w-[68px] xl:w-[275px] flex flex-col justify-between px-2 sm:px-3 xl:px-4 py-3 border-r border-neutral-800 shrink-0 select-none z-20">
      <div className="flex flex-col items-center xl:items-start gap-1">
        <Link
          href="/dashboard"
          className="p-3 hover:bg-neutral-900 rounded-full w-fit transition-colors duration-200 text-white mb-1 cursor-pointer"
          aria-label="X / Twitter"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </Link>

        <nav className="flex flex-col gap-0.5 w-full">
          <Link
            href="/dashboard"
            className={`flex items-center gap-4 p-3 hover:bg-neutral-900 rounded-full transition-colors duration-200 w-fit xl:w-full group cursor-pointer ${
              isHome ? "font-bold text-white" : "font-normal text-neutral-300"
            }`}
          >
            <svg viewBox="0 0 24 24" className={`w-7 h-7 shrink-0 ${isHome ? "fill-current" : "fill-none stroke-current stroke-2"}`}>
              {isHome ? (
                <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .504.415.913.928.913h6.636v-6.958h4.872v6.958h6.636c.513 0 .928-.409.928-.913V7.904c0-.301-.149-.584-.409-.758z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              )}
            </svg>
            <span className="hidden xl:inline text-xl">Home</span>
          </Link>

          <Link
            href="/dashboard/explore"
            className={`flex items-center gap-4 p-3 hover:bg-neutral-900 rounded-full transition-colors duration-200 w-fit xl:w-full group cursor-pointer ${
              isExplore ? "font-bold text-white" : "font-normal text-neutral-300"
            }`}
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-2 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <span className="hidden xl:inline text-xl">Explore</span>
          </Link>

          <Link
            href="/dashboard/notifications"
            className={`flex items-center gap-4 p-3 hover:bg-neutral-900 rounded-full transition-colors duration-200 w-fit xl:w-full group relative cursor-pointer ${
              isNotifications ? "font-bold text-white" : "font-normal text-neutral-300"
            }`}
          >
            <div className="relative shrink-0">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-sky-500 rounded-full ring-2 ring-black"></span>
            </div>
            <span className="hidden xl:inline text-xl">Notifications</span>
          </Link>

          <Link
            href="/dashboard/bookmarks"
            className={`flex items-center gap-4 p-3 hover:bg-neutral-900 rounded-full transition-colors duration-200 w-fit xl:w-full group cursor-pointer ${
              isBookmarks ? "font-bold text-white" : "font-normal text-neutral-300"
            }`}
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-2 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            <span className="hidden xl:inline text-xl">Bookmarks</span>
          </Link>

          <Link
            href="/dashboard/profile"
            className={`flex items-center gap-4 p-3 hover:bg-neutral-900 rounded-full transition-colors duration-200 w-fit xl:w-full group cursor-pointer ${
              isProfile ? "font-bold text-white" : "font-normal text-neutral-300"
            }`}
          >
            <svg viewBox="0 0 24 24" className={`w-7 h-7 shrink-0 ${isProfile ? "fill-current" : "fill-none stroke-current stroke-2"}`}>
              {isProfile ? (
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              )}
            </svg>
            <span className="hidden xl:inline text-xl">Profile</span>
          </Link>
        </nav>

        <button
          onClick={onOpenPostPopup}
          className="hidden xl:block w-full mt-4 bg-sky-500 hover:bg-sky-600 active:scale-[0.98] text-white font-bold py-3.5 px-8 rounded-full shadow-md transition-all text-base text-center cursor-pointer"
        >
          Post
        </button>

        <button
          onClick={onOpenPostPopup}
          className="xl:hidden mt-3 bg-sky-500 hover:bg-sky-600 active:scale-95 text-white p-3 rounded-full flex items-center justify-center shadow-md cursor-pointer"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M23 3c-6.62-.1-10.38 2.41-13.05 6.08C7.29 12.65 6 17.35 6 22h2c0-4 1.15-8 3.5-11.14C13.73 7.89 17 6.13 23 6V3zM3 13c0 2.21 1.79 4 4 4v-2c-1.1 0-2-.9-2-2s.9-2 2-2V9c-2.21 0-4 1.79-4 4z" />
          </svg>
        </button>
      </div>

      <div className="relative w-full">
        {isAccountMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-20"
              onClick={() => setIsAccountMenuOpen(false)}
            />
            <div className="absolute bottom-16 left-0 xl:left-2 w-[280px] bg-black border border-neutral-800 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.12)] py-2 z-30">
              <Link
                href="/dashboard/profile"
                onClick={() => setIsAccountMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 hover:bg-neutral-900 transition cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shrink-0 text-sm shadow">
                    MR
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-bold text-sm truncate flex items-center gap-1 text-white">
                      Mehfooz
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-sky-400 shrink-0 inline">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </span>
                    <span className="text-neutral-500 text-xs truncate">@mehfooz_dev</span>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sky-500 shrink-0">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </Link>

              <div className="h-px bg-neutral-800 my-1" />

              <Link
                href="/"
                onClick={() => setIsAccountMenuOpen(false)}
                className="block w-full text-left px-4 py-3 hover:bg-neutral-900 transition text-sm font-bold text-neutral-100 cursor-pointer"
              >
                Log out @mehfooz_dev
              </Link>
            </div>
          </>
        )}

        <button
          onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
          className="flex items-center justify-between p-2.5 hover:bg-neutral-900 rounded-full cursor-pointer transition-colors duration-200 w-full mb-1 text-left"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shrink-0 text-sm shadow">
              MR
            </div>
            <div className="hidden xl:flex flex-col min-w-0">
              <span className="font-bold text-sm truncate flex items-center gap-1 leading-tight text-white">
                Mehfooz
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-sky-400 shrink-0 inline">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </span>
              <span className="text-neutral-500 text-sm truncate leading-tight">@mehfooz_dev</span>
            </div>
          </div>
          <div className="hidden xl:block text-neutral-500">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
          </div>
        </button>
      </div>
    </header>
  );
}
