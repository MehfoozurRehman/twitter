export default function DashboardExplorePage() {
  return (
    <div>
      <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-neutral-800 flex items-center px-4 h-[53px]">
        <h1 className="font-bold text-xl text-neutral-100">Explore</h1>
      </div>

      <div className="p-4">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-4">
          <h2 className="font-extrabold text-xl text-neutral-100 mb-3">
            Trending Topics
          </h2>
          <div className="space-y-4">
            <div className="border-b border-neutral-900 pb-3">
              <span className="text-xs text-neutral-500 font-medium">
                Technology · Trending
              </span>
              <p className="font-bold text-base text-neutral-100 mt-0.5">
                #NextJS16
              </p>
              <span className="text-xs text-neutral-500">124.5K posts</span>
            </div>
            <div className="border-b border-neutral-900 pb-3">
              <span className="text-xs text-neutral-500 font-medium">
                Web Development · Trending
              </span>
              <p className="font-bold text-base text-neutral-100 mt-0.5">
                React Server Components
              </p>
              <span className="text-xs text-neutral-500">89.2K posts</span>
            </div>
            <div>
              <span className="text-xs text-neutral-500 font-medium">
                Artificial Intelligence · Trending
              </span>
              <p className="font-bold text-base text-neutral-100 mt-0.5">
                Agentic AI Workflows
              </p>
              <span className="text-xs text-neutral-500">210.8K posts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
