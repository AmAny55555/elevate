"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter, FaApple } from "react-icons/fa";

export default function AuthSocial() {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-[1px] bg-gray-300" />
        <span className="text-gray-400 text-sm">Or Continue with</span>
        <div className="flex-1 h-[1px] bg-gray-300" />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <button
          type="button"
          onClick={() => signIn("google")}
          className="border h-14 rounded-2xl hover:bg-gray-100 flex justify-center items-center"
        >
          <FcGoogle size={26} />
        </button>

        <button
          type="button"
          onClick={() => signIn("twitter")}
          className="border h-14 rounded-2xl hover:bg-gray-100 flex justify-center items-center text-sky-500"
        >
          <FaTwitter size={22} />
        </button>

        <button
          type="button"
          onClick={() => signIn("facebook")}
          className="border h-14 rounded-2xl hover:bg-gray-100 flex justify-center items-center text-blue-600"
        >
          <FaFacebookF size={22} />
        </button>

        <button
          type="button"
          onClick={() => signIn("apple")}
          className="border h-14 rounded-2xl hover:bg-gray-100 flex justify-center items-center text-black"
        >
          <FaApple size={26} />
        </button>
      </div>
    </div>
  );
}
