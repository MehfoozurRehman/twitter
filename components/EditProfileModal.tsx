"use client";

import { useState } from "react";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
  const [name, setName] = useState("Mehfooz");
  const [bio, setBio] = useState("Building modern web experiences & AI interfaces ⚡️ | Full-Stack Developer | Next.js, React & TypeScript enthusiast 🚀");
  const [location, setLocation] = useState("San Francisco, CA");
  const [website, setWebsite] = useState("https://github.com/mehfooz");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="fixed inset-0" onClick={onClose} />
      <div className="relative w-full max-w-[600px] bg-black border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10">
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-black/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-6">
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-neutral-900 rounded-full transition cursor-pointer text-neutral-300 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="font-bold text-lg text-neutral-100">Edit profile</h2>
          </div>
          <button
            onClick={onClose}
            className="bg-white hover:bg-neutral-200 active:scale-95 text-black font-bold text-sm px-4 py-1.5 rounded-full transition cursor-pointer"
          >
            Save
          </button>
        </div>

        <div className="overflow-y-auto p-4 space-y-4">
          <div className="h-44 bg-gradient-to-r from-sky-900 via-indigo-950 to-neutral-900 relative rounded-xl overflow-hidden flex items-center justify-center gap-3">
            <button className="p-3 bg-black/60 hover:bg-black/80 rounded-full text-white transition cursor-pointer backdrop-blur-xs">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>
            </button>
            <button className="p-3 bg-black/60 hover:bg-black/80 rounded-full text-white transition cursor-pointer backdrop-blur-xs">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="relative -mt-16 ml-4 w-fit">
            <div className="w-28 h-28 rounded-full border-4 border-black bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-2xl text-white relative shadow-xl">
              MR
              <button className="absolute inset-0 m-auto w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition cursor-pointer backdrop-blur-xs">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div className="border border-neutral-800 focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500 rounded-xl px-3 py-2 transition">
              <label className="text-xs text-neutral-500 block font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
                className="w-full bg-transparent text-neutral-100 text-base outline-none pt-0.5"
              />
            </div>

            <div className="border border-neutral-800 focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500 rounded-xl px-3 py-2 transition">
              <label className="text-xs text-neutral-500 block font-medium">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                maxLength={160}
                className="w-full bg-transparent text-neutral-100 text-base outline-none pt-0.5 resize-none"
              />
            </div>

            <div className="border border-neutral-800 focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500 rounded-xl px-3 py-2 transition">
              <label className="text-xs text-neutral-500 block font-medium">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-neutral-100 text-base outline-none pt-0.5"
              />
            </div>

            <div className="border border-neutral-800 focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500 rounded-xl px-3 py-2 transition">
              <label className="text-xs text-neutral-500 block font-medium">Website</label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full bg-transparent text-neutral-100 text-base outline-none pt-0.5"
              />
            </div>

            <div className="p-3 border border-neutral-850 rounded-xl bg-neutral-950/40 flex justify-between items-center">
              <div>
                <span className="text-xs text-neutral-500 block">Birth date</span>
                <span className="text-sm text-neutral-200">March 15, 1999</span>
              </div>
              <button className="text-sky-500 hover:text-sky-400 text-xs font-bold cursor-pointer">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
