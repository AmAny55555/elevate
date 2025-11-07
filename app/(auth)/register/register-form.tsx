"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/schemas/register.schema";
import { registerAction } from "./action/register";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      rePassword: "",
    },
  });

  async function onSubmit(values: any) {
    try {
      setIsLoading(true);

      const result = await registerAction({
        ...values,
        phone: "01000000000", // ثابت فقط لل API
      });

      console.log("REGISTER SUCCESS:", result);
    } catch (err) {
      console.log("REGISTER ERROR:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
      <input
        {...form.register("firstName")}
        placeholder="First Name"
        className="h-14 w-full border rounded-lg px-3"
      />
      {form.formState.errors.firstName && (
        <p className="text-red-500 text-sm">
          {form.formState.errors.firstName.message as string}
        </p>
      )}

      <input
        {...form.register("lastName")}
        placeholder="Last Name"
        className="h-14 w-full border rounded-lg px-3"
      />
      {form.formState.errors.lastName && (
        <p className="text-red-500 text-sm">
          {form.formState.errors.lastName.message as string}
        </p>
      )}

      <input
        {...form.register("username")}
        placeholder="Username"
        className="h-14 w-full border rounded-lg px-3"
      />
      {form.formState.errors.username && (
        <p className="text-red-500 text-sm">
          {form.formState.errors.username.message as string}
        </p>
      )}

      <input
        {...form.register("email")}
        placeholder="Email"
        type="email"
        className="h-14 w-full border rounded-lg px-3"
      />
      {form.formState.errors.email && (
        <p className="text-red-500 text-sm">
          {form.formState.errors.email.message as string}
        </p>
      )}

      <input
        {...form.register("password")}
        placeholder="Password"
        type="password"
        className="h-14 w-full border rounded-lg px-3"
      />
      {form.formState.errors.password && (
        <p className="text-red-500 text-sm">
          {form.formState.errors.password.message as string}
        </p>
      )}

      <input
        {...form.register("rePassword")}
        placeholder="Confirm Password"
        type="password"
        className="h-14 w-full border rounded-lg px-3"
      />
      {form.formState.errors.rePassword && (
        <p className="text-red-500 text-sm">
          {form.formState.errors.rePassword.message as string}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center"
      >
        {isLoading ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          "Create Account"
        )}
      </button>
    </form>
  );
}
