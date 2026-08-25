"use client";

interface PostPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PostPopup({ isOpen, onClose }: PostPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-neutral-900/60 backdrop-blur-xs flex items-start justify-center pt-12 sm:pt-20 px-4">
      <div className="fixed inset-0" onClick={onClose} />
      <div className="relative w-full max-w-[600px] bg-black border border-neutral-800 rounded-2xl shadow-2xl p-4 flex flex-col z-10">
        <div className="flex items-center pb-2">
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-neutral-900 rounded-full transition cursor-pointer text-neutral-400 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex gap-3 pt-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shrink-0 text-sm shadow mt-1">
            MR
          </div>

          <div className="flex-1 flex flex-col">
            <textarea
              autoFocus
              placeholder="What is happening?!"
              rows={4}
              className="w-full bg-transparent text-xl text-neutral-100 placeholder-neutral-500 resize-none outline-none focus:ring-0 leading-relaxed"
            />

            <div className="flex items-center justify-between pt-3 border-t border-neutral-800">
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

              <button
                onClick={onClose}
                className="bg-sky-500 hover:bg-sky-600 active:scale-95 text-white font-bold text-sm px-5 py-1.5 rounded-full transition cursor-pointer shadow"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
