"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  resetPasswordSchema,
  ResetPasswordType,
} from "@/lib/schemas/reset.schema";
import { doResetPassword } from "./action/reset";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthSocial from "../_components/auth-social";
import InputPassword from "../_components/input-password";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [msg, setMsg] = useState("");

  const form = useForm<ResetPasswordType>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { email: "", newPassword: "", rePassword: "" },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: ResetPasswordType) => {
      return await doResetPassword(values.email, values.newPassword);
    },
    onSuccess: () => {
      router.push("/login");
    },
    onError: (err: any) => {
      setMsg(err?.message || "Something went wrong");
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold">Reset Password</h1>

        <form
          onSubmit={form.handleSubmit((v) => mutate(v))}
          className="space-y-6"
        >
          <Input
            {...form.register("email")}
            placeholder="Email"
            className="h-14"
          />

          <InputPassword
            {...form.register("newPassword")}
            placeholder="New Password"
          />

          <InputPassword
            {...form.register("rePassword")}
            placeholder="Confirm Password"
          />

          {msg && <p className="text-red-500 text-sm">{msg}</p>}

          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-14 rounded-3xl bg-blue-600 text-white hover:bg-blue-700"
          >
            {isPending ? "Reseting..." : "Reset Password"}
          </Button>
        </form>

        <AuthSocial />
      </div>
    </div>
  );
}
