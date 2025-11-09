import LeftSide from "@/app/home/LeftSide";
import AuthTabs from "./AuthTabs";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <LeftSide />

      <div className="hidden md:block w-[60px] bg-gradient-to-r from-gray-200 via-gray-100 to-transparent"></div>

      <div className="w-full md:w-1/2 flex flex-col px-6 md:px-10 pt-6 pb-10">
        <AuthTabs />
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
