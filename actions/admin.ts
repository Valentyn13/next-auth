"use server";

import { UserRole } from "@prisma/client";

import { currentRole } from "@/lib/auth";

const admin = async () => {
  const role = await currentRole();
  if (role === UserRole.ADMIN) {
    return { success: "OK" };
  }

  return { error: "Not an admin" };
};

export { admin };
