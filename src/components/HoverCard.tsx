"use client";

import { DirectionAwareHover } from "./ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const imageUrl1 = "https://autoimage.capitalone.com/cms/Auto/assets/images/2869-hero-what-happens-when-a-car-dealership-runs-a-credit-check.jpg";
  const imageUrl2 = "https://www.bankrate.com/2005/04/07112616/11-car-dealer-tricks-to-avoid.jpg?auto=webp&optimize=high&crop=16:9";

  return (
    <div className="h-[40rem] lg:mt-11 md:mt-11 relative flex items-center justify-center flex-col">
      <DirectionAwareHover imageUrl={imageUrl1} className="w-[100%] lg:w-[80%] mb-5 md:ml-14 lg:ml-14">
        <p className="font-bold text-xl">Customizable</p>
        <p className="font-normal text-sm">Tailor your dashboard to fit your needs</p>
      </DirectionAwareHover>

      <DirectionAwareHover imageUrl={imageUrl2} className="w-[100%] lg:w-[80%]">
        <p className="font-bold text-xl">Efficient</p>
        <p className="font-normal text-sm">Streamlined operations</p>
      </DirectionAwareHover>
    </div>
  );
}
