"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  onOpenPostPopup: () => void;
}

export default function MobileNav({ onOpenPostPopup }: MobileNavProps) {
  const pathname = usePathname();

  const isHome = pathname === "/dashboard";
  const isExplore = pathname === "/dashboard/explore";
  const isNotifications = pathname === "/dashboard/notifications";
  const isProfile = pathname === "/dashboard/profile";

  return (
    <>
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-t border-neutral-800 flex justify-around items-center py-2.5 px-4">
        <Link
          href="/dashboard"
          className={`p-2 ${isHome ? "text-white" : "text-neutral-400"}`}
          aria-label="Home"
        >
          <svg viewBox="0 0 24 24" className={`w-6 h-6 ${isHome ? "fill-current" : "fill-none stroke-current stroke-2"}`}>
            {isHome ? (
              <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .504.415.913.928.913h6.636v-6.958h4.872v6.958h6.636c.513 0 .928-.409.928-.913V7.904c0-.301-.149-.584-.409-.758z" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            )}
          </svg>
        </Link>
        <Link
          href="/dashboard/explore"
          className={`p-2 ${isExplore ? "text-white" : "text-neutral-400"}`}
          aria-label="Explore"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </Link>
        <Link
          href="/dashboard/notifications"
          className={`p-2 relative ${isNotifications ? "text-white" : "text-neutral-400"}`}
          aria-label="Notifications"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          <span className="absolute top-2 right-2 w-2 h-2 bg-sky-500 rounded-full"></span>
        </Link>
        <Link
          href="/dashboard/profile"
          className={`p-2 ${isProfile ? "text-white" : "text-neutral-400"}`}
          aria-label="Profile"
        >
          <svg viewBox="0 0 24 24" className={`w-6 h-6 ${isProfile ? "fill-current" : "fill-none stroke-current stroke-2"}`}>
            {isProfile ? (
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            )}
          </svg>
        </Link>
      </nav>

      <button
        onClick={onOpenPostPopup}
        className="sm:hidden fixed bottom-18 right-4 z-40 bg-sky-500 hover:bg-sky-600 active:scale-95 text-white p-3.5 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
        aria-label="New Post"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M23 3c-6.62-.1-10.38 2.41-13.05 6.08C7.29 12.65 6 17.35 6 22h2c0-4 1.15-8 3.5-11.14C13.73 7.89 17 6.13 23 6V3zM3 13c0 2.21 1.79 4 4 4v-2c-1.1 0-2-.9-2-2s.9-2 2-2V9c-2.21 0-4 1.79-4 4z" />
        </svg>
      </button>
    </>
  );
}
