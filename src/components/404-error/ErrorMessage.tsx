"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const ErrorMessage = () => {
  const router = useRouter();
  return (
    <div className="p-11 flex flex-col justify-center items-center">
      <img src="404-wave.svg" alt="" className="absolute top-0" />
        <img src="404-icon.png" alt="Error 404" className="mt-40"/>
        <Button
          onClick={() => router.back()}
          className="bg-blue-800 text-lg hover:bg-blue-900 lg:w-[15vw] md:w-[18vw] sm:w-[15vw] mt-5"
        >
          Return
        </Button>
    </div>
  );
};
