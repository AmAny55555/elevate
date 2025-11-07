"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

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
      <input
        {...register("email")}
        placeholder="Email"
        className="h-14 w-full border rounded-lg px-3"
      />

      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="h-14 w-full border rounded-lg px-3"
      />

      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="w-full h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center"
      >
        {isPending ? (
          <div className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5" />
        ) : (
          "Sign in"
        )}
      </button>
    </form>
  );
}
