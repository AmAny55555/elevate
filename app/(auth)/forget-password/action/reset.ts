"use server";
import { JSON_HEADER } from "@/lib/constants/api.constant";

export async function forgotPasswordAction(email: string) {
  const res = await fetch(`${process.env.API}/auth/forgotPassword`, {
    method: "POST",
    headers: JSON_HEADER,
    body: JSON.stringify({ email }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "Email not found");
  }

  return data;
}
