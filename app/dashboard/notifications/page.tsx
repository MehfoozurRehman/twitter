export default function DashboardNotificationsPage() {
  return (
    <div>
      <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-neutral-800 flex items-center px-4 h-[53px]">
        <h1 className="font-bold text-xl text-neutral-100">Notifications</h1>
      </div>

      <div className="divide-y divide-neutral-800">
        <div className="p-4 flex gap-3 hover:bg-neutral-950/70 transition cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center text-sky-400">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <div>
            <p className="text-neutral-300 text-sm">
              <strong className="text-neutral-100 font-bold">Next.js</strong> verified your account.
            </p>
          </div>
        </div>

        <div className="p-4 flex gap-3 hover:bg-neutral-950/70 transition cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center text-pink-600">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <div>
            <p className="text-neutral-300 text-sm">
              <strong className="text-neutral-100 font-bold">Sarah Jenkins</strong> and 42 others liked your post.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
