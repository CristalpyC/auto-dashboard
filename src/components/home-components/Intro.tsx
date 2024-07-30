import { Menu } from "../Menu"

export const Intro = () => {
  return (
    <>
      <Menu>
        <button className="text-md w-[8rem] bg-[#6393DB] p-1 shadow-sm ease-in-out hover:scale-105 hover:bg-[#649cf1aa]">Login</button>
      </Menu>
      <div className="p-11 flex-col lg:flex-row md:flex-row flex justify-center items-center lg:justify-between md:justify-between">
        <div className="mt-5 lg:mt-24 md:mt-24 text-center lg:text-left md:text-left">
          <h2 className="text-[8vmin] md:text-[7vmin] lg:text-[9vmin] mb-3 text-[#165ECA] font-medium">Elevate your</h2>
          <h3 className="text-[7vmin] md:text-[6vmin] lg:text-[7vmin] font-medium">Dealership operations</h3>
          <button className="text-[4vmin] md:text-[3vmin] lg:text-[3vmin] md:w-[15rem] lg:w-[18rem] mt-8 text-white  bg-[#6393DB] p-2 shadow-md ease-in-out hover:scale-105 hover:bg-[#547bb5aa]">Create your account</button>
        </div>

        <img src="/dashb-icon.png" alt="dashboard-icon" className="mt-11 -rotate-12 w-[80%] lg:w-[50%] md:w-[60%]"/>
      </div>
    </>
  )
}
