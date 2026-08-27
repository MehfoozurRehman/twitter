"use server";

import { GOOGLE_AUTH_VALUES } from "@/types";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

type User = {
  id: string;
};

export async function loginSignup(values: GOOGLE_AUTH_VALUES) {
  let user: null | User = null;

  const existingUser = await prisma.user.findFirst({
    where: { googleId: values.sub },
  });

  if (existingUser) {
    user = existingUser;
  } else {
    const newUser = await prisma.user.create({
      data: {
        email: values.email,
        googleId: values.sub,
        name: values.name,
        picture: values.picture,
      },
    });

    user = newUser;
  }

  (await cookies()).set({
    name: "user-id",
    value: user.id,
  });

  return user;
}
