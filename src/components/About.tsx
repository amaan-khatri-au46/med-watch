import React from "react";
import Button from "./Button";
import useIsLargeScreen from "@/utils/hooks/useWindowSize";

const About: React.FC = () => {
  const isLargeScreen = useIsLargeScreen();
  return (
    <div
      id="about"
      className={`${isLargeScreen ? "container mx-auto" : ""} px-4 lg:px-8`}
    >
      <div className="mx-6 mt-0 lg:mx-0 lg:mt-28 lg:px-0 lg:pl-0">
        {/* Heading Section */}
        <div data-aos="fade-right" className="">
          <h1 className="custom-text m-0 text-[22px] font-semibold text-[#083D6A] sm:text-2xl lg:text-4xl xl:text-[44px]">
            Advanced AI Meets{" "}
            <span className="gradient-text">Non-Invasive Glucose</span>
          </h1>
          <h1 className="custom-text gradient-text m-0 py-0 pb-1 text-2xl sm:text-3xl lg:py-2 lg:text-4xl xl:text-[44px]">
            Monitoring
          </h1>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-12 gap-0 lg:mx-0 lg:gap-12 xl:gap-8">
        <div className="col-span-12 flex justify-center lg:col-span-6 lg:justify-start">
          <div data-aos={`${isLargeScreen ? "fade-left" : "fade-down"}`}>
            <img
              src="/images/advanceAi.png"
              alt="Non-Invasive Sensor"
              className="h-full object-contain"
            />
          </div>
        </div>

        <div className="col-span-12 mt-16 lg:col-span-6 lg:mt-0">
          <div
            data-aos="fade-right"
            className="rounded-[20px] bg-white px-6 py-8 shadow-lg sm:rounded-[32px] lg:rounded-[44px]"
          >
            <p className="font-sans text-[#626262] sm:text-lg lg:!text-md">
              <span className="custom-text font-semibold text-[#083D6A]">
                ASR (Advanced Sensor Research)
              </span>{" "}
              is pioneering the future of glucose monitoring with revolutionary
              technology that uses smart, non-invasive sensors combined with
              AI-powered analytics. Our innovative solution eliminates the pain
              and inconvenience of traditional fingerstick, offering continuous,
              accurate, real-time glucose tracking. 
            </p>
            <p className="mt-4 font-sans text-[#626262] sm:text-lg lg:!text-md">
              Whether managing diabetes, optimizing health, or seeking comfort
              and convenience, ASR empowers individuals and healthcare
              professionals with actionable insights at their fingertips.
            </p>
            <Button className="custom-bg mt-2 text-sm md:text-lg lg:mt-6">
              Request Early Access
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
