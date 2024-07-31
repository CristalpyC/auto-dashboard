export const Description = () => {
  return (
    <div className="mt-11 p-11 bg-[#EAF0FF] flex flex-col lg:flex-row lg:gap-32 justify-center items-center lg:justify-between">
      <div className="text-[3vmin] w-[100%] text-center lg:text-left">
        <p className="mb-5">
          Efficiently track and manage your vehicle inventory with real-time updates 
          and detailed insights, ensuring you always have the right cars in stock.
        </p>

        <p className="mb-5">
          Gain valuable insights into your sales performance with comprehensive 
          analytics and reports, helping you make data-driven decisions to boost 
          your revenue.
        </p>

        <p>
          Streamline your marketing efforts with automated campaigns and targeted 
          promotions, designed to attract and retain customers while maximizing 
          your reach.
        </p>
      </div>

      <div className="w-[100%] mt-11 flex flex-col justify-center items-center">
        <img src="car-dealership-runs-a-credit-check.avif" alt="check" className="w-[70%] lg:w-[80%] mb-5 ml-14"/>
        <img src="dealer-loyalty.jpg" alt="business" className="w-[70%] lg:w-[80%]"/>
      </div>
    </div>
  )
}
