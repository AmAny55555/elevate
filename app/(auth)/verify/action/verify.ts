"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";

export async function verifyResetCodeAction(code: string) {
  const res = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    headers: JSON_HEADER,
    body: JSON.stringify({ resetCode: code }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "Invalid code");
  }

  return data;
}
