export const About = () => {
  return (
    <>
    <div className="flex mt-28 md:gap-11 lg:gap-11 items-center flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between p-11">
      <img src="dealerw-car-icon.png" alt="car" className="hover:hue-rotate-30 w-[80%] lg:w-[40%] md:w-[50%]"/>
      <div className="mt-11 text-center lg:text-left md:text-left">
        <h2 className="mb-4 text-[5vmin] text-[#165ECA] font-medium">Optimize every aspect of your business.</h2>
        <p className="text-[3vmin]">
          Discover the ease of centralized management in an elegant 
          and intuitive environment, ensuring you make informed 
          decisions that drive success. Elevate your dealership 
          to new heights with Dealerw.
        </p>
      </div>
    </div>
    <img src="wave.svg" alt="blue wave" />
    </>
  )
}
