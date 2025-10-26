"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
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

import { registerSchema } from "@/lib/schemas/register.schema";
import { loginSchema } from "@/lib/schemas/login.schema";
import InputPassword from "./input-password";

interface FieldConfig {
  name: string;
  label?: string;
  placeholder: string;
  type?: "text" | "password" | "email";
}

interface AuthFormProps<T> {
  formType: "register" | "login";
  defaultValues: T;
  fields: FieldConfig[];
  action: (values: T) => Promise<any>;
  submitText: string;
}

export function AuthForm<T>({
  formType,
  defaultValues,
  fields,
  action,
  submitText,
}: AuthFormProps<T>) {
  const [showPassword, setShowPassword] = useState<string | null>(null);
  const schema = formType === "register" ? registerSchema : loginSchema;

  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: action,
    onSuccess: () => toast.success("✅ Success"),
    onError: (err: any) =>
      toast.error(err?.message || "❌ Something went wrong"),
  });

  const onSubmit = (values: T) => mutate(values);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as any}
            render={({ field: f }) => (
              <FormItem>
                <FormControl>
                  {field.type === "password" ? (
                    <InputPassword
                      placeholder={field.placeholder}
                      field={f}
                      isVisible={showPassword === field.name}
                      toggleVisibility={() =>
                        setShowPassword(
                          showPassword === field.name ? null : field.name
                        )
                      }
                    />
                  ) : (
                    <Input
                      placeholder={field.placeholder}
                      {...f}
                      type={field.type || "text"}
                      className="h-14 rounded-lg bg-[#f9f9f9] border border-[#ededf3] focus:!border-black focus:!ring-0"
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#4461f2] text-white h-14 rounded-4xl hover:bg-[#4461f2] mt-4"
        >
          {isPending ? "Loading..." : submitText}
        </Button>
      </form>
    </Form>
  );
}
