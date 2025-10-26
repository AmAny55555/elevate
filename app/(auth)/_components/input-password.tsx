"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputPasswordProps extends React.ComponentProps<"input"> {
  placeholder?: string;
}

export default function InputPassword({
  placeholder,
  ...props
}: InputPasswordProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input
        type={show ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="h-14 rounded-lg bg-[#f9f9f9] pr-10"
        {...props}
      />
      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent outline-none text-gray-500 hover:text-gray-700"
      >
        {show ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
      </button>
    </div>
  );
}
