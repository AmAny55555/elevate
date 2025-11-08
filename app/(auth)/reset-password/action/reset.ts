"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";

export async function doResetPassword(email: string, newPassword: string) {
  const res = await fetch(`${process.env.API}/auth/resetPassword`, {
    method: "PUT",
    headers: JSON_HEADER,
    body: JSON.stringify({ email, newPassword }),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data?.message || "Something went wrong");

  return data;
}
