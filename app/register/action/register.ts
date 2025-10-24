"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";

import type { RegisterValues } from "@/app/types/register";

export async function registerAction(values: RegisterValues) {
  try {
    const response = await fetch(`${process.env.API}/auth/signup`, {
      method: "POST",
      headers: {
        ...JSON_HEADER,
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Something went wrong");
    }
    return { data };
  } catch (err) {
    return { err: "Server error, please try again" };
  }
}
