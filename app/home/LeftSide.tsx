import React from "react";
import Image from "next/image";

export default function LeftSide() {
  return (
    <div className="hidden md:flex bg-[#f0f4fc] w-full md:w-1/2 min-h-screen pl-10 pt-5 rounded-tr-2xl rounded-br-2xl">
      <div>
        <p className="text-2xl font-bold leading-tight">
          Welcome to <span className="text-[#1e3a8d] block">Elevate</span>
          <span className="text-sm font-normal block mt-1">
            Quidem autem voluptatibus qui quaerat aspernatur architecto natus
          </span>
        </p>

        <Image
          src="/bro.webp"
          width={350}
          height={350}
          alt="welcome-person"
          className="mt-8"
        />
      </div>
    </div>
  );
}
