"use client";

import { useState } from "react";
import Link from "next/link";

interface Comment {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  avatarGradient: string;
  verified?: boolean;
  time: string;
  content: string;
  likes: string;
  replies: string;
  reposts: string;
}

interface PostData {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  avatarGradient: string;
  verified?: boolean;
  time: string;
  date: string;
  views: string;
  content: string;
  mediaType?: "nextjs" | "code" | "none";
  likes: string;
  reposts: string;
  quotes: string;
  bookmarks: string;
  comments: Comment[];
}

const mockPosts: Record<string, PostData> = {
  "1": {
    id: "1",
    name: "Next.js",
    handle: "@nextjs",
    avatar: "NX",
    avatarGradient: "from-cyan-500 to-blue-600",
    verified: true,
    time: "2h",
    date: "10:42 AM · Aug 25, 2026",
    views: "254.8K",
    content: "Next.js 16 is officially here! ⚡️\n\nFeaturing instant Turbopack compilation, deep React 19 compiler optimization, zero-config server actions, and full edge streaming support.\n\nUpgrade now with pnpm dlx @next/codemod@latest 🚀",
    mediaType: "nextjs",
    likes: "14.2K",
    reposts: "1.8K",
    quotes: "428",
    bookmarks: "2.1K",
    comments: [
      {
        id: "c1",
        name: "Guillermo Rauch",
        handle: "@rauchg",
        avatar: "GR",
        avatarGradient: "from-blue-600 to-indigo-700",
        verified: true,
        time: "1h",
        content: "Turbopack speed is truly unmatched now. Huge milestone for the entire web ecosystem! 🖤",
        likes: "1.4K",
        replies: "32",
        reposts: "128",
      },
      {
        id: "c2",
        name: "Lee Robinson",
        handle: "@leeerob",
        avatar: "LR",
        avatarGradient: "from-purple-500 to-pink-600",
        verified: true,
        time: "1h",
        content: "Can't wait to see what the community builds with React 19 compiler out of the box.",
        likes: "890",
        replies: "18",
        reposts: "64",
      },
      {
        id: "c3",
        name: "Dan Abramov",
        handle: "@dan_abramov",
        avatar: "DA",
        avatarGradient: "from-amber-500 to-orange-600",
        verified: true,
        time: "45m",
        content: "The server actions improvements in this release make async data handling so much simpler.",
        likes: "742",
        replies: "14",
        reposts: "45",
      },
    ],
  },
  "2": {
    id: "2",
    name: "Sarah Jenkins",
    handle: "@sarah_codes",
    avatar: "JS",
    avatarGradient: "from-amber-500 to-orange-600",
    verified: true,
    time: "5h",
    date: "7:15 AM · Aug 25, 2026",
    views: "48.5K",
    content: "Hot take: The best developers are not the ones who write 500 lines of complex code in an hour, but the ones who delete 200 lines and make the system 10x easier to read.\n\nSimplicity is the ultimate sophistication. 💭",
    mediaType: "code",
    likes: "3,892",
    reposts: "412",
    quotes: "89",
    bookmarks: "520",
    comments: [
      {
        id: "c4",
        name: "David K.",
        handle: "@davidk_dev",
        avatar: "DK",
        avatarGradient: "from-teal-500 to-emerald-600",
        verified: false,
        time: "4h",
        content: "100% agreed! Code is read far more often than it is written.",
        likes: "156",
        replies: "4",
        reposts: "12",
      },
      {
        id: "c5",
        name: "Emily Watson",
        handle: "@emilyw_tech",
        avatar: "EW",
        avatarGradient: "from-fuchsia-500 to-purple-600",
        verified: true,
        time: "3h",
        content: "Deleting code is the most satisfying PR approval feeling ever.",
        likes: "248",
        replies: "8",
        reposts: "19",
      },
    ],
  },
  "3": {
    id: "3",
    name: "Alex Liu",
    handle: "@alexliu",
    avatar: "AL",
    avatarGradient: "from-emerald-500 to-teal-700",
    verified: true,
    time: "7h",
    date: "5:00 AM · Aug 25, 2026",
    views: "72.1K",
    content: "That feeling when you spend 3 hours debugging why a component won't align properly, only to realize you had a typo in your flexbox class... 🫠",
    mediaType: "none",
    likes: "6,110",
    reposts: "520",
    quotes: "162",
    bookmarks: "340",
    comments: [
      {
        id: "c6",
        name: "Frontend Fanatic",
        handle: "@frontend_fan",
        avatar: "FF",
        avatarGradient: "from-rose-500 to-pink-600",
        verified: false,
        time: "6h",
        content: "It's always the missing 'items-center' or a rogue 'justify-between' 😂",
        likes: "320",
        replies: "5",
        reposts: "14",
      },
    ],
  },
  "4": {
    id: "4",
    name: "Mehfooz",
    handle: "@mehfooz_dev",
    avatar: "MR",
    avatarGradient: "from-indigo-500 via-purple-500 to-pink-500",
    verified: true,
    time: "1d",
    date: "2:30 PM · Aug 24, 2026",
    views: "12.4K",
    content: "Shipped the full Twitter/X clone UI in pure Tailwind CSS and Next.js! Clean architecture, zero bloat, and pixel perfect ✨",
    mediaType: "none",
    likes: "842",
    reposts: "115",
    quotes: "24",
    bookmarks: "98",
    comments: [
      {
        id: "c7",
        name: "Alex Liu",
        handle: "@alexliu",
        avatar: "AL",
        avatarGradient: "from-emerald-500 to-teal-700",
        verified: true,
        time: "18h",
        content: "Looks super crisp and smooth! Great work on this 🚀",
        likes: "42",
        replies: "2",
        reposts: "3",
      },
    ],
  },
};

export default function PostDetailView({ postId }: { postId: string }) {
  const post = mockPosts[postId] || mockPosts["1"];
  const [commentText, setCommentText] = useState("");
  const [commentsList, setCommentsList] = useState<Comment[]>(post.comments);

  const handleAddComment = () => {
    if (!commentText.trim()) return;
    const newComment: Comment = {
      id: `c_${Date.now()}`,
      name: "Mehfooz",
      handle: "@mehfooz_dev",
      avatar: "MR",
      avatarGradient: "from-indigo-500 via-purple-500 to-pink-500",
      verified: true,
      time: "Just now",
      content: commentText.trim(),
      likes: "0",
      replies: "0",
      reposts: "0",
    };
    setCommentsList([newComment, ...commentsList]);
    setCommentText("");
  };

  return (
    <div>
      <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-neutral-800 flex items-center gap-6 px-4 h-[53px]">
        <Link
          href="/dashboard"
          className="p-2 hover:bg-neutral-900 rounded-full transition cursor-pointer text-white"
          aria-label="Back"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <h1 className="font-bold text-xl text-neutral-100">Post</h1>
      </div>

      <article className="p-4 border-b border-neutral-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${post.avatarGradient} flex items-center justify-center font-bold text-white text-sm shadow shrink-0`}>
              {post.avatar}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-neutral-100 flex items-center gap-1">
                {post.name}
                {post.verified && (
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-sky-400 shrink-0">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                )}
              </span>
              <span className="text-sm text-neutral-500">{post.handle}</span>
            </div>
          </div>

          <button className="text-neutral-500 hover:text-sky-500 p-2 hover:bg-sky-500/10 rounded-full transition">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
          </button>
        </div>

        <div className="mt-4 text-neutral-100 text-[17px] leading-relaxed whitespace-pre-line">
          {post.content}
        </div>

        {post.mediaType === "nextjs" && (
          <div className="mt-4 rounded-2xl border border-neutral-800 overflow-hidden bg-gradient-to-tr from-neutral-950 via-zinc-900 to-neutral-900 p-8 flex flex-col items-center justify-center text-center shadow-lg">
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
        )}

        {post.mediaType === "code" && (
          <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4 font-mono text-xs text-neutral-300 overflow-x-auto shadow">
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
        )}

        <div className="mt-4 py-3 text-neutral-500 text-sm border-t border-neutral-800 flex gap-2">
          <span>{post.date}</span>
          <span>·</span>
          <span className="text-neutral-100 font-bold">{post.views}</span> Views
        </div>

        <div className="py-3 border-t border-neutral-800 flex flex-wrap gap-6 text-sm text-neutral-500">
          <div><strong className="text-neutral-100 font-bold">{post.reposts}</strong> Reposts</div>
          <div><strong className="text-neutral-100 font-bold">{post.quotes}</strong> Quotes</div>
          <div><strong className="text-neutral-100 font-bold">{post.likes}</strong> Likes</div>
          <div><strong className="text-neutral-100 font-bold">{post.bookmarks}</strong> Bookmarks</div>
        </div>

        <div className="py-2 border-t border-neutral-800 flex justify-around text-neutral-500">
          <button className="p-2 hover:bg-sky-500/10 hover:text-sky-400 rounded-full transition">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.54 1.107.31 1.68l-.707 1.768a.75.75 0 0 0 .963.963l2.073-.83a1.442 1.442 0 0 1 1.258.077c1.11.59 2.378.912 3.73.912Z" />
            </svg>
          </button>
          <button className="p-2 hover:bg-green-500/10 hover:text-green-500 rounded-full transition">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M4.5 12l3 3m-3-3 3-3m15 0-3 3m3-3-3-3" />
            </svg>
          </button>
          <button className="p-2 hover:bg-pink-500/10 hover:text-pink-600 rounded-full transition">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
          <button className="p-2 hover:bg-sky-500/10 hover:text-sky-400 rounded-full transition">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
          </button>
          <button className="p-2 hover:bg-sky-500/10 hover:text-sky-400 rounded-full transition">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
          </button>
        </div>
      </article>

      <div className="p-4 border-b border-neutral-800 flex gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shrink-0 text-sm shadow">
          MR
        </div>
        <div className="flex-1 flex flex-col">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Post your reply"
            rows={2}
            className="w-full bg-transparent text-lg text-neutral-100 placeholder-neutral-500 resize-none outline-none focus:ring-0"
          />
          <div className="flex items-center justify-between pt-2 border-t border-neutral-850">
            <div className="flex items-center gap-1 text-sky-500 -ml-1.5">
              <button className="p-2 hover:bg-sky-500/10 rounded-full transition cursor-pointer">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-sky-500/10 rounded-full transition cursor-pointer">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round" />
                  <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <button
              onClick={handleAddComment}
              disabled={!commentText.trim()}
              className="bg-sky-500 hover:bg-sky-600 disabled:opacity-50 active:scale-95 text-white font-bold text-sm px-4 py-1.5 rounded-full transition cursor-pointer shadow"
            >
              Reply
            </button>
          </div>
        </div>
      </div>

      <div className="divide-y divide-neutral-800">
        {commentsList.map((c) => (
          <article key={c.id} className="p-4 hover:bg-neutral-950/70 transition duration-200">
            <div className="flex gap-3">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${c.avatarGradient} flex items-center justify-center font-bold text-white text-xs shrink-0 shadow`}>
                {c.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-bold text-sm text-neutral-100 hover:underline">{c.name}</span>
                    {c.verified && (
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-sky-400 shrink-0">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    )}
                    <span className="text-xs text-neutral-500">{c.handle}</span>
                    <span className="text-xs text-neutral-500">·</span>
                    <span className="text-xs text-neutral-500">{c.time}</span>
                  </div>
                  <button className="text-neutral-500 hover:text-sky-500 p-1 rounded-full">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <circle cx="5" cy="12" r="2" />
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="19" cy="12" r="2" />
                    </svg>
                  </button>
                </div>

                <p className="text-neutral-200 text-sm mt-1 leading-normal whitespace-pre-line">
                  {c.content}
                </p>

                <div className="flex justify-between items-center text-neutral-500 mt-2.5 max-w-xs text-xs">
                  <button className="flex items-center gap-1 hover:text-sky-400 transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.54 1.107.31 1.68l-.707 1.768a.75.75 0 0 0 .963.963l2.073-.83a1.442 1.442 0 0 1 1.258.077c1.11.59 2.378.912 3.73.912Z" />
                    </svg>
                    <span>{c.replies}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500 transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M4.5 12l3 3m-3-3 3-3m15 0-3 3m3-3-3-3" />
                    </svg>
                    <span>{c.reposts}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-600 transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <span>{c.likes}</span>
                  </button>
                  <button className="hover:text-sky-400 transition">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
