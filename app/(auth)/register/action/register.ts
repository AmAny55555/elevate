"use server";

import { JSON_HEADER } from "@/lib/constants/api.constant";
import type { RegisterSchemaType } from "@/lib/schemas/register.schema";

export async function registerAction(values: RegisterSchemaType) {
  try {
    const body = {
      ...values,
      rePassword: values.confirmPassword,
    };

    delete (body as any).confirmPassword;

    const response = await fetch(`${process.env.API}/auth/signup`, {
      method: "POST",
      headers: JSON_HEADER,
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Something went wrong");
    }

    return data;
  } catch (err: any) {
    return {
      error: err?.message || "Server error, please try again",
    };
  }
}
