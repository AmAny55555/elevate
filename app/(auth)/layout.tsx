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

      <div className="hidden md:block w-[1px] bg-gray-300 shadow-gray-400"></div>

      <div className="w-full md:w-1/2 flex flex-col gap-4 px-6 md:px-10 pt-6 pb-10">
        <AuthTabs />
        <div className="mt-14">{children}</div>
      </div>
    </div>
  );
}
