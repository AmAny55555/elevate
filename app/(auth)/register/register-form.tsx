"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import {
  registerSchema,
  RegisterSchemaType,
} from "@/lib/schemas/register.schema";

import { registerAction } from "./action/register";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthSocial from "../_components/auth-social";

export default function RegisterForm() {
  const form = useForm<RegisterSchemaType>({
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

  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: async (values) => {
      return await registerAction({ ...values, phone: "01000000000" });
    },
    onSuccess: (data) => {
      console.log("REGISTER SUCCESS:", data);
      router.push("/login");
    },
    onError: (err: any) => {
      console.log("REGISTER ERROR:", err);
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((v) => mutate(v))}
        className="space-y-4 w-full"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="h-14" placeholder="First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="h-14" placeholder="Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="h-14" placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="h-14"
                  placeholder="Email"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="h-14"
                  placeholder="Password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="h-14"
                  placeholder="Confirm Password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full h-14 rounded-3xl bg-blue-600 text-white"
          disabled={isPending}
        >
          {isPending ? "Creating account..." : "Create Account"}
        </Button>

        <AuthSocial />
      </form>
    </Form>
  );
}
