"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthSocial from "../_components/auth-social";
import Link from "next/link";

export default function LoginForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [errorMsg, setErrorMsg] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: any) => {
      setErrorMsg("");

      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (res?.error) throw new Error("Invalid email or password");

      return res;
    },
    onSuccess: () => {
      window.location.href = "/";
    },
    onError: (err: any) => {
      setErrorMsg(err.message);
    },
  });

  function onSubmit(values: any) {
    mutate(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
      <Input placeholder="Email" {...register("email")} className="h-14" />

      <Input
        type="password"
        placeholder="Password"
        {...register("password")}
        className="h-14"
      />

      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

      <div className="text-right">
        <Link href="/forget-password" className="text-blue-600  font-thin">
          Recover password ?
        </Link>
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full h-14 rounded-3xl shadow-main bg-blue-600 text-white hover:bg-blue-700"
      >
        {isPending ? "Signing In..." : "Sign in"}
      </Button>

      <AuthSocial />
    </form>
  );
}
