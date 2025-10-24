"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  RegisterSchemaType,
} from "@/lib/schemas/register.schema";
import { registerAction } from "../action/register";
import { toast } from "sonner";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";

import { FcGoogle } from "react-icons/fc";
import {
  FaFacebookF,
  FaTwitter,
  FaApple,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // ✅ React Query Mutation
  const { mutate, isPending } = useMutation({
    mutationFn: registerAction,
    onSuccess: () => {
      toast.success("Account created successfully!");
    },
    onError: (err: any) => {
      toast.error(err?.message || "Something went wrong");
    },
  });

  const onSubmit = (values: RegisterSchemaType) => {
    mutate(values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md px-4 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Sign up</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      className="h-14 rounded-lg bg-gray-100"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      {...field}
                      className="h-14 rounded-lg bg-gray-100"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Username"
                      {...field}
                      className="h-14 rounded-lg bg-gray-100"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="h-14 rounded-lg bg-gray-100"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                        className="h-14 rounded-lg bg-gray-100"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-3 text-gray-500 hover:text-black"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        {...field}
                        className="h-14 rounded-lg bg-gray-100"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute right-3 top-3 text-gray-500 hover:text-black"
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-blue-600 text-white h-14 rounded-4xl hover:bg-blue-600"
            >
              {isPending ? "Loading..." : "Create Account"}
            </Button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-3 text-gray-400 text-sm">
                Or Continue with
              </span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Auth */}
            <div className="grid grid-cols-4 gap-3">
              <button
                type="button"
                className="border h-12 w-16 rounded-xl hover:bg-gray-100 flex justify-center items-center"
              >
                <FcGoogle size={26} />
              </button>
              <button
                type="button"
                className="border h-12 w-16 rounded-xl hover:bg-gray-100 flex justify-center items-center text-blue-600"
              >
                <FaFacebookF size={22} />
              </button>
              <button
                type="button"
                className="border h-12 w-16 rounded-xl hover:bg-gray-100 flex justify-center items-center text-sky-500"
              >
                <FaTwitter size={22} />
              </button>
              <button
                type="button"
                className="border h-12 w-16 rounded-xl hover:bg-gray-100 flex justify-center items-center text-black"
              >
                <FaApple size={26} />
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
