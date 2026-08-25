"use client";

import Link from "next/link";

export default function HomeFeed() {
  return (
    <div>
      <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-neutral-800 flex justify-between items-center px-4">
        <div className="flex flex-1 h-[53px]">
          <button className="flex-1 flex justify-center items-center h-full hover:bg-neutral-900/60 transition cursor-pointer relative">
            <span className="font-bold text-sm text-neutral-100 relative h-full flex items-center">
              For you
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-sky-500 rounded-full" />
            </span>
          </button>
          <button className="flex-1 flex justify-center items-center h-full hover:bg-neutral-900/60 transition cursor-pointer">
            <span className="text-neutral-500 hover:text-neutral-200 font-medium text-sm transition-colors">
              Following
            </span>
          </button>
        </div>
        <button
          className="p-2 hover:bg-neutral-900 rounded-full transition text-neutral-400 hover:text-white"
          aria-label="Timeline settings"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </button>
      </div>

      <div className="flex gap-3 px-4 pt-3 pb-3 border-b border-neutral-800">
        <Link
          href="/profile"
          className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shrink-0 text-sm shadow mt-1 cursor-pointer"
        >
          MR
        </Link>
        
        <div className="flex-1 flex flex-col">
          <textarea
            placeholder="What is happening?!"
            rows={3}
            className="w-full bg-transparent text-xl text-neutral-100 placeholder-neutral-500 resize-none outline-none focus:ring-0 leading-relaxed"
          />

          <div className="flex items-center justify-between pt-2.5 border-t border-neutral-800">
            <div className="flex items-center gap-1 text-sky-500 -ml-1.5">
              <button className="p-2 hover:bg-sky-500/10 rounded-full transition cursor-pointer" title="Media">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </button>

              <button className="p-2 hover:bg-sky-500/10 rounded-full transition cursor-pointer" title="Emoji">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round" />
                  <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <button className="bg-sky-500 hover:bg-sky-600 active:scale-95 text-white font-bold text-sm px-5 py-1.5 rounded-full transition cursor-pointer shadow">
              Post
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-neutral-800 py-3 text-center text-sky-500 text-sm hover:bg-neutral-900/40 cursor-pointer transition font-medium">
        Show 48 posts
      </div>

      <div className="divide-y divide-neutral-800">
        <Link href="/post/1" className="block p-4 hover:bg-neutral-950/70 transition duration-200 cursor-pointer">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shrink-0 text-sm shadow">
              NX
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-bold text-neutral-100 hover:underline">Next.js</span>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-sky-400 shrink-0">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-neutral-500 text-sm">@nextjs</span>
                  <span className="text-neutral-500 text-sm">·</span>
                  <span className="text-neutral-500 text-sm hover:underline">2h</span>
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
                Next.js 16 is officially here! ⚡️<br /><br />
                Featuring instant Turbopack compilation, deep React 19 compiler optimization, zero-config server actions, and full edge streaming support.<br /><br />
                Upgrade now with <span className="text-sky-400 font-mono text-sm bg-neutral-900 px-1.5 py-0.5 rounded">pnpm dlx @next/codemod@latest</span> 🚀
              </p>

              <div className="mt-3 rounded-2xl border border-neutral-800 overflow-hidden bg-gradient-to-tr from-neutral-950 via-zinc-900 to-neutral-900 p-6 flex flex-col items-center justify-center text-center shadow-lg relative group">
                <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
                <div className="w-16 h-16 rounded-2xl bg-black border border-neutral-700 flex items-center justify-center mb-3 shadow-2xl">
                  <svg viewBox="0 0 180 180" className="w-10 h-10 fill-white">
                    <path d="m142.75 160.85-64.67-83.33v83.33H56.55V19.15h21.53l64.67 83.33V19.15h21.53v141.7z" />
                  </svg>
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white">Next.js 16</span>
                <p className="text-neutral-400 text-xs mt-1">The React Framework for the Web</p>
                <div className="mt-4 flex gap-2">
                  <span className="bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs px-3 py-1 rounded-full font-medium">Turbopack Enabled</span>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-3 py-1 rounded-full font-medium">React 19 Ready</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-neutral-500 mt-3 max-w-md text-xs">
                <div className="flex items-center gap-1.5 hover:text-sky-400 group transition">
                  <div className="p-2 group-hover:bg-sky-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.54 1.107.31 1.68l-.707 1.768a.75.75 0 0 0 .963.963l2.073-.83a1.442 1.442 0 0 1 1.258.077c1.11.59 2.378.912 3.73.912Z" />
                    </svg>
                  </div>
                  <span>428</span>
                </div>

                <div className="flex items-center gap-1.5 hover:text-green-500 group transition">
                  <div className="p-2 group-hover:bg-green-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M4.5 12l3 3m-3-3 3-3m15 0-3 3m3-3-3-3" />
                    </svg>
                  </div>
                  <span>1.8K</span>
                </div>

                <div className="flex items-center gap-1.5 hover:text-pink-600 group transition">
                  <div className="p-2 group-hover:bg-pink-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <span>14.2K</span>
                </div>

                <div className="flex items-center gap-1.5 hover:text-sky-400 group transition">
                  <div className="p-2 group-hover:bg-sky-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125-1.125V4.125Z" />
                    </svg>
                  </div>
                  <span>254K</span>
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

        <Link href="/post/2" className="block p-4 hover:bg-neutral-950/70 transition duration-200 cursor-pointer">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center font-bold text-white shrink-0 text-sm shadow">
              JS
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-bold text-neutral-100 hover:underline">Sarah Jenkins</span>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-amber-400 shrink-0">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-neutral-500 text-sm">@sarah_codes</span>
                  <span className="text-neutral-500 text-sm">·</span>
                  <span className="text-neutral-500 text-sm hover:underline">5h</span>
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
                Hot take: The best developers are not the ones who write 500 lines of complex code in an hour, but the ones who delete 200 lines and make the system 10x easier to read.
                <br /><br />
                Simplicity is the ultimate sophistication. 💭
              </p>

              <div className="mt-3 rounded-xl border border-neutral-800 bg-neutral-950 p-4 font-mono text-xs text-neutral-300 overflow-x-auto shadow">
                <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-neutral-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-neutral-500 font-sans text-[11px]">clean-architecture.ts</span>
                </div>
                <p className="text-purple-400">const <span className="text-blue-300">createCleanApp</span> = () =&gt; &#123;</p>
                <p className="pl-4 text-emerald-400">{"// Less complexity, maximum clarity"}</p>
                <p className="pl-4 text-neutral-200">return <span className="text-yellow-300">compose(simplicity, reliability)</span>;</p>
                <p className="text-purple-400">&#125;;</p>
              </div>

              <div className="flex justify-between items-center text-neutral-500 mt-3 max-w-md text-xs">
                <div className="flex items-center gap-1.5 hover:text-sky-400 group transition">
                  <div className="p-2 group-hover:bg-sky-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.54 1.107.31 1.68l-.707 1.768a.75.75 0 0 0 .963.963l2.073-.83a1.442 1.442 0 0 1 1.258.077c1.11.59 2.378.912 3.73.912Z" />
                    </svg>
                  </div>
                  <span>89</span>
                </div>

                <div className="flex items-center gap-1.5 hover:text-green-500 group transition">
                  <div className="p-2 group-hover:bg-green-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M4.5 12l3 3m-3-3 3-3m15 0-3 3m3-3-3-3" />
                    </svg>
                  </div>
                  <span>412</span>
                </div>

                <div className="flex items-center gap-1.5 hover:text-pink-600 group transition">
                  <div className="p-2 group-hover:bg-pink-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <span>3,892</span>
                </div>

                <div className="flex items-center gap-1.5 hover:text-sky-400 group transition">
                  <div className="p-2 group-hover:bg-sky-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125-1.125V4.125Z" />
                    </svg>
                  </div>
                  <span>48.5K</span>
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

        <Link href="/post/3" className="block p-4 hover:bg-neutral-950/70 transition duration-200 cursor-pointer">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-700 flex items-center justify-center font-bold text-white shrink-0 text-sm shadow">
              AL
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-bold text-neutral-100 hover:underline">Alex Liu</span>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-sky-400 shrink-0">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-neutral-500 text-sm">@alexliu</span>
                  <span className="text-neutral-500 text-sm">·</span>
                  <span className="text-neutral-500 text-sm hover:underline">7h</span>
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
                That feeling when you spend 3 hours debugging why a component won&apos;t align properly, only to realize you had a typo in your flexbox class... 🫠
              </p>

              <div className="flex justify-between items-center text-neutral-500 mt-3 max-w-md text-xs">
                <div className="flex items-center gap-1.5 hover:text-sky-400 group transition">
                  <div className="p-2 group-hover:bg-sky-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.54 1.107.31 1.68l-.707 1.768a.75.75 0 0 0 .963.963l2.073-.83a1.442 1.442 0 0 1 1.258.077c1.11.59 2.378.912 3.73.912Z" />
                    </svg>
                  </div>
                  <span>162</span>
                </div>

                <div className="flex items-center gap-1.5 hover:text-green-500 group transition">
                  <div className="p-2 group-hover:bg-green-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M4.5 12l3 3m-3-3 3-3m15 0-3 3m3-3-3-3" />
                    </svg>
                  </div>
                  <span>520</span>
                </div>

                <div className="flex items-center gap-1.5 hover:text-pink-600 group transition">
                  <div className="p-2 group-hover:bg-pink-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <span>6,110</span>
                </div>

                <div className="flex items-center gap-1.5 hover:text-sky-400 group transition">
                  <div className="p-2 group-hover:bg-sky-500/10 rounded-full transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125-1.125V4.125Z" />
                    </svg>
                  </div>
                  <span>72.1K</span>
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
    </div>
  );
}
