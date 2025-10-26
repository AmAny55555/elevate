"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import type { LoginSchemaType } from "@/lib/schemas/login.schema";

export async function loginAction(values: LoginSchemaType) {
  try {
    const response = await fetch(`${process.env.API}/auth/login`, {
      method: "POST",
      headers: JSON_HEADER,
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Invalid credentials");
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, error: "Server error, please try again" };
  }
}
