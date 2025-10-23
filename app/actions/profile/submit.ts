"use server";

import { ProfileFormValues } from "@/app/lib/schemas/profile.schema";

export async function submitProfileAction(data: ProfileFormValues) {
  console.log("📨 Data sent:", data);
}
