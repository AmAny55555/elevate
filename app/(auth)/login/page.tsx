"use client";

import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md px-4 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Sign in</h1>
        <LoginForm />
      </div>
    </div>
  );
}
