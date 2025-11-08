import VerifyForm from "./verify";
import AuthSocial from "../_components/auth-social";

export default function VerifyPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold">Verify Code</h1>

        <VerifyForm />

        <AuthSocial />
      </div>
    </div>
  );
}
