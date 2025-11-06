"use client";

import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md px-4 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Sign up</h1>

        <RegisterForm />
      </div>
    </div>
  );
}
