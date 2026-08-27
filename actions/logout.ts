"use server";

import { GOOGLE_AUTH_VALUES } from "@/types";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function logout() {
  (await cookies()).delete("user-id");

  redirect("/");
}
