"use client";

import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface TextFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  placeholder?: string;
  autoComplete?: string;
}

export default function TextField<T extends FieldValues>({
  control,
  name,
  placeholder,
  autoComplete,
}: TextFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              {...field}
              autoComplete={autoComplete}
              placeholder={placeholder}
              className="h-14 rounded-lg bg-[#f9f9f9] border border-[#ededf3] focus:!border-black focus:!ring-0"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
