import { features } from "@/configs/feature.config";
import useIsLargeScreen from "@/utils/hooks/useWindowSize";
import React from "react";

const FeaturesAccordion: React.FC = () => {
  const isLargeScreen = useIsLargeScreen();

  return (
    <div
      id="features"
      className={`${isLargeScreen ? "container mx-auto" : ""} px-4 lg:px-8`}
    >
      <div className="mt-10 lg:mt-20">
        <div data-aos="fade-right">
          <h1 className="custom-text m-0 text-[22px] font-semibold text-[#083D6A] sm:text-2xl lg:text-4xl xl:text-[44px]">
            Why Choose <span className="gradient-text">ASR?</span>
          </h1>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-12 gap-6 md:gap-8 lg:gap-10">
        <div
          className="col-span-12 space-y-6 md:col-span-12 lg:col-span-8"
          data-aos={`${isLargeScreen ? "fade-left" : "fade-down"}`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-accordion flex flex-col items-center gap-4 rounded-[20px] px-4 py-6 shadow-md sm:flex-row sm:gap-4 lg:rounded-[30px] lg:px-2 lg:py-4"
            >
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
              />
              <div>
                <h2 className="m-0 text-center font-sans text-[18px] font-semibold text-[#083D6A] sm:text-lg md:text-start lg:text-xl">
                  {feature.title}
                </h2>
                <span className="lg:text-md mt-2 block text-center text-sm text-[#626262] sm:text-base md:text-start">
                  {feature.content}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-4" data-aos="fade-right">
          <img
            src="/images/choose.png"
            alt="Why Choose ASR"
            className="h-full w-full object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesAccordion;
