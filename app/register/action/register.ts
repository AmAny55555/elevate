"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";

export type RegisterValues = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

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
      return { success: false, error: data?.message || "Something went wrong" };
    }

    return { success: true, data };
  } catch (err) {
    console.error("❌ Error in registerAction:", err);
    return { success: false, error: "Server error, please try again" };
  }
}
