"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import MobileNav from "./MobileNav";
import PostPopup from "./PostPopup";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isPostPopupOpen, setIsPostPopupOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="min-h-screen bg-black text-neutral-100 selection:bg-sky-500 selection:text-white font-sans antialiased">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-neutral-100 selection:bg-sky-500 selection:text-white font-sans antialiased flex justify-center">
      <div className="flex w-full max-w-[1265px] justify-between">
        <Sidebar onOpenPostPopup={() => setIsPostPopupOpen(true)} />

        <main className="w-full max-w-[600px] min-h-screen border-r border-neutral-800 flex-1 pb-20 sm:pb-8">
          {children}
        </main>

        <RightSidebar />

        <MobileNav onOpenPostPopup={() => setIsPostPopupOpen(true)} />

        <PostPopup
          isOpen={isPostPopupOpen}
          onClose={() => setIsPostPopupOpen(false)}
        />
      </div>
    </div>
  );
}
