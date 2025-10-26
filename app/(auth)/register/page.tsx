"use client";

import { AuthForm } from "../_components/auth-form";
import { registerAction } from "./action/register";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter, FaApple } from "react-icons/fa";

export default function RegisterPage() {
  const fields = [
    { name: "firstName", placeholder: "First Name", type: "text" },
    { name: "lastName", placeholder: "Last Name", type: "text" },
    { name: "username", placeholder: "Username", type: "text" },
    { name: "email", placeholder: "Email", type: "email" },
    { name: "password", placeholder: "Password", type: "password" },
    {
      name: "confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
    },
  ];

  const defaultValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md px-4 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Sign up</h1>

        <AuthForm
          formType="register"
          defaultValues={defaultValues}
          fields={fields}
          action={registerAction}
          submitText="Create Account"
        />

        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">Or Continue with</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

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
      </div>
    </div>
  );
}
