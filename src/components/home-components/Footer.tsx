'use client'
import { ContactForm } from "../ContactForm"

export const Footer = () => {
  const style ='w-[15vw] md:w-[3rem] lg:w-[3rem] lg:h-[3rem] md:h-[3rem] ease-in-out duration-2s hover:scale-75'
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <img src="top-wave.svg" alt="top wave" />
      <div className="px-11 flex flex-col-reverse lg:flex-row md:flex-row items-center lg:justify-between md:justify-between gap-11">
        <div className="w-[100%]">
          <h2 className="text-[#414A7D] text-[4vmin] text-center lg:text-left md:text-left mb-4">Dealerw</h2>
          <hr className="border-0 h-[1px] bg-black"/>

          <div className="flex mt-5 justify-center lg:justify-start md:justify-start">
            <img src="instagram-svgrepo-com.png" alt="instagram" className={style}/>
            <img src="linkedin-svgrepo-com.png" alt="linkedin"  className={style}/>
            <img src="github-square-svgrepo-com.png" alt="github"  className={style}/>
          </div>
        </div>

        <div className="w-[100%]">
          <ContactForm />
        </div>
      </div>
      <p className="text-[#0e0c90a3] font-medium mt-5 text-center mb-3 text-[3.2vmin]">{`Copyright ©${year} | By Cristal Melissa Tavárez Novas`}</p>
      </>
  )
}
