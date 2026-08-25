export default function DashboardBookmarksPage() {
  return (
    <div>
      <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-neutral-800 flex items-center px-4 h-[53px]">
        <h1 className="font-bold text-xl text-neutral-100">Bookmarks</h1>
      </div>

      <div className="p-8 text-center flex flex-col items-center justify-center">
        <h2 className="text-2xl font-extrabold text-neutral-100 mb-2">Save posts for later</h2>
        <p className="text-neutral-500 text-sm max-w-sm">
          Bookmark posts to easily find them again in the future.
        </p>
      </div>
    </div>
  );
}
