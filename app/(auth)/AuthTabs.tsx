"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthTabs() {
  const pathname = usePathname();

  const isLogin = pathname === "/login";
  const isRegister = pathname === "/register";

  return (
    <div className="flex gap-10 mb-10 items-center justify-center text-xl font-semibold">
      <div className="flex items-center gap-2 cursor-pointer select-none">
        <p className="">English</p>
        <span className=" text-xl">▾</span>
      </div>

      <Link
        href="/login"
        className={`text-blue-600 hover:text-blue-800 transition-colors ${
          isLogin && "font-bold"
        }`}
      >
        Sign in
      </Link>

      <Link
        href="/register"
        className={`
    px-5 py-2
    rounded-full
    text-blue-600
    bg-white
    border border-blue-200
    shadow-sm
    transition-all
    duration-200
    hover:bg-blue-300 hover:text-white hover:border-blue-600 hover:shadow-md
    ${
      isRegister &&
      "bg-blue-600 text-blue-600 border-blue-600 shadow-md font-semibold"
    }
  `}
      >
        Register
      </Link>
    </div>
  );
}
