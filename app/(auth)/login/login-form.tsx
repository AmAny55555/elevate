"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(values: any) {
    setLoading(true);
    setErrorMsg("");

    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    console.log("LOGIN RESPONSE:", res);

    if (res?.error) {
      setErrorMsg("Invalid email or password");
    } else {
      window.location.href = "/";
    }

    setLoading(false);
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
        disabled={loading}
        className="w-full h-14 bg-blue-600 text-white rounded-xl"
      >
        {loading ? (
          <div className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5 mx-auto" />
        ) : (
          "Sign in"
        )}
      </button>
    </form>
  );
}
