"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { verifyResetCodeAction } from "./action/verify";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function VerifyForm() {
  const router = useRouter();
  const [msg, setMsg] = useState("");

  const { register, handleSubmit } = useForm({
    defaultValues: { code: "" },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: any) => {
      setMsg("");
      return await verifyResetCodeAction(values.code);
    },
    onSuccess: () => {
      router.push("/reset-password");
    },
    onError: (err: any) => {
      setMsg(err?.message || "Invalid code");
    },
  });

  return (
    <form
      onSubmit={handleSubmit((v) => mutate(v))}
      className="space-y-6 w-full"
    >
      <Input {...register("code")} placeholder="Enter Code" className="h-14" />

      {msg && <p className="text-red-500 text-sm">{msg}</p>}

      <div className="text-right text-sm text-gray-600">
        Didn’t receive a code?{" "}
        <Link
          href="/forget-password"
          className="text-blue-600 font-medium hover:underline"
        >
          Resend
        </Link>
      </div>

      <Button
        type="submit"
        className="w-full h-14 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        disabled={isPending}
      >
        {isPending ? "Verifying..." : "Continue"}
      </Button>
    </form>
  );
}
