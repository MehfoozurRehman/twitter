import PostDetailView from "@/components/PostDetailView";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PostDetailView postId={id} />;
}
