"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgetPasswordSchema,
  ForgetPasswordType,
} from "@/lib/schemas/forget.schema";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthSocial from "../_components/auth-social";
import Link from "next/link";
import { forgotPasswordAction } from "./action/reset";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [msg, setMsg] = useState("");

  const form = useForm<ForgetPasswordType>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: { email: "" },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: ForgetPasswordType) => {
      return await forgotPasswordAction(values.email);
    },
    onSuccess: () => {
      router.push("/verify");
    },
    onError: (err: any) => {
      setMsg(err?.message || "Something went wrong");
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold">Forgot Password?</h1>

        <form
          onSubmit={form.handleSubmit((values) => mutate(values))}
          className="space-y-6"
        >
          <Input
            {...form.register("email")}
            placeholder="Email"
            className="h-10"
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.email.message}
            </p>
          )}

          {msg && <p className="text-red-500 text-sm">{msg}</p>}

          <div className="text-right">
            <Link href="/forget-password" className="text-blue-600 font-thin">
              Recover password ?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-10 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
          >
            {isPending ? "Sending..." : "Continue"}
          </Button>
        </form>

        <AuthSocial />
      </div>
    </div>
  );
}
