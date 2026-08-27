import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookie = await cookies();

  const userId = cookie.get("user-id");

  if (!userId) redirect("/");

  return children;
}
