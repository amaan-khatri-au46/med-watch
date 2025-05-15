import { steps } from "@/configs/steps.config";
import useIsLargeScreen from "@/utils/hooks/useWindowSize";
import React from "react";

const HowItWorks: React.FC = () => {
  const isLargeScreen = useIsLargeScreen();
  return (
    <div className="mt-20 bg-[#F8F8F8] py-12" id="how-it-works">
      <div
        className={`${isLargeScreen ? "container mx-auto" : ""} px-0 lg:px-8`}
      >
        <div className="mx-6 mt-0 lg:mx-0 lg:mt-28 lg:px-0 lg:pl-0">
          {/* Heading Section */}
          <div data-aos="fade-right" className="">
            <h1 className="custom-text m-0 text-[22px] font-semibold text-[#083D6A] sm:text-2xl lg:text-4xl xl:text-[44px]">
              How It <span className="gradient-text">Works?</span>
            </h1>
          </div>
        </div>
        <div className="mt-4 flex justify-end" data-aos="fade-down">
          <img
            src="/images/top-line.png"
            alt="Top Line"
            className="mr-52 hidden w-full max-w-[200px] md:max-w-[300px] lg:block lg:max-w-[400px]"
          />
        </div>
        <div className="mx-4 mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:grid-cols-3 xl:gap-10">
          {steps?.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-[20px] bg-white px-4 py-4 shadow-md lg:rounded-[30px]"
              data-aos="fade-up"
              data-aos-delay={step.aosDelay}
            >
              <img
                src={step.imgSrc}
                alt={step.title}
                className="h-auto max-h-[260px] w-full object-fill"
              />
              <h3 className="mt-4 text-center text-lg font-semibold text-[#083D6A] sm:text-xl lg:text-2xl">
                {step.title}
              </h3>
              <span className="mt-2 block text-center text-sm text-[#626262] sm:text-base lg:text-lg">
                {step.description}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10" data-aos="fade-up">
          <img
            src="/images/down-line.png"
            alt="Down Line"
            className="ml-52 hidden w-full max-w-[200px] md:max-w-[300px] lg:block lg:max-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
