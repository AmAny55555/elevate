"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import type { RegisterSchemaType } from "@/lib/schemas/register.schema";

export async function registerAction(values: RegisterSchemaType) {
  try {
    const response = await fetch(`${process.env.API}/auth/signup`, {
      method: "POST",
      headers: JSON_HEADER,
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Something went wrong");
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, error: "Server error, please try again" };
  }
}
