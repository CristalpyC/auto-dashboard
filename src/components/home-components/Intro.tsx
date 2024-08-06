'use client'
import { useRouter } from "next/navigation";
import { Menu } from "../Menu";
import { Zoom } from "react-awesome-reveal";

export const Intro = () => {
  const router = useRouter();

  return (
    <>
      <Menu>
          <a href="/login" className="hover:bg-[#638fff96] hover:shadow-md p-2">Sign in</a>
      </Menu>
      <Zoom>
      <div className="p-11 flex-col lg:flex-row md:flex-row flex justify-center items-center lg:justify-between md:justify-between">
        <div className="mt-5 lg:mt-24 md:mt-24 text-center lg:text-left md:text-left">
          <h2 className="text-[8vmin] md:text-[6vmin] lg:text-[9vmin] mb-3 text-[#165ECA] font-medium">
            Elevate your
          </h2>
          <h3 className="text-[7vmin] md:text-[5vmin] lg:text-[7vmin] font-medium">
            Dealership operations
          </h3>
          <button onClick={() => router.push('/register')} className="text-[4vmin] md:text-[2.5vmin] lg:text-[3vmin] md:w-[15rem] lg:w-[18rem] mt-8 text-white  bg-[#6393DB] p-2 shadow-md shadow-blue-700 ease-in-out hover:scale-105 hover:bg-[#547bb5aa]">
            Create your account
          </button>
        </div>

        <img
          src="3d-financial-report-chart-png.webp"
          alt="dashboard-icon"
          className="mt-11 w-[80%] lg:w-[50%] md:w-[45%]"
        />
      </div>
      </Zoom>
      <img src="wave.svg" alt="blue wave" className="w-[100%] "/>

    </>
  );
};
