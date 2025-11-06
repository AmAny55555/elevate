"use client";

import { useState } from "react";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  placeholder?: string;
  autoComplete?: string;
}

export default function PasswordField<T extends FieldValues>({
  control,
  name,
  placeholder,
  autoComplete,
}: PasswordFieldProps<T>) {
  const [show, setShow] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                type={show ? "text" : "password"}
                autoComplete={autoComplete}
                placeholder={placeholder}
                className="h-14 rounded-lg bg-[#f9f9f9] border border-[#ededf3] focus:!border-black focus:!ring-0 pr-10"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent outline-none text-gray-500 hover:text-gray-700"
              >
                {show ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
