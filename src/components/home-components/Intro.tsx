'use client'
import { useRouter } from "next/navigation";
import { Menu } from "../Menu";

export const Intro = () => {
  const router = useRouter();

  return (
    <>
      <Menu>
          <a href="/login" className="hover:bg-[#6393db2d] p-2">Sign in</a>
      </Menu>
      <div className="p-11 flex-col lg:flex-row md:flex-row flex justify-center items-center lg:justify-between md:justify-between">
        <div className="mt-5 lg:mt-24 md:mt-24 text-center lg:text-left md:text-left">
          <h2 className="text-[8vmin] md:text-[7vmin] lg:text-[9vmin] mb-3 text-[#165ECA] font-medium">
            Elevate your
          </h2>
          <h3 className="text-[7vmin] md:text-[6vmin] lg:text-[7vmin] font-medium">
            Dealership operations
          </h3>
          <button onClick={() => router.push('/register')} className="text-[4vmin] md:text-[3vmin] lg:text-[3vmin] md:w-[15rem] lg:w-[18rem] mt-8 text-white  bg-[#6393DB] p-2 shadow-md ease-in-out hover:scale-105 hover:bg-[#547bb5aa]">
            Create your account
          </button>
        </div>

        <img
          src="/dashb-icon.png"
          alt="dashboard-icon"
          className="mt-11 -rotate-12 w-[80%] lg:w-[50%] md:w-[60%]"
        />
      </div>
      <img src="wave.svg" alt="blue wave" className="w-[100%] "/>

    </>
  );
};
