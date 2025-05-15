import React from "react";
import Button from "./Button";
import useIsLargeScreen from "@/utils/hooks/useWindowSize";

const Glucose = () => {
  const isLargeScreen = useIsLargeScreen();
  return (
    <div
      className={`${
        isLargeScreen ? "container mx-auto" : ""
      } px-0 lg:px-8`}
    >
      <div
        className="relative -top-14 h-[550px] w-full lg:top-0 lg:h-[600px]"
        data-aos="zoom-in"
      >
        <video
          className="h-full w-full rounded-none object-cover rounded-b-3xl lg:rounded-[56px]"
          autoPlay
          loop
          muted
        >
          <source
            src="/video/0_Abstract_Background_3840x2160.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 top-24 m-0 flex max-w-fit flex-col justify-start rounded-[56px] bg-none pl-8 pr-0 md:pl-12 lg:top-0 lg:m-6 lg:justify-center lg:bg-white/90 lg:pl-8 lg:pr-16">
          <div>
            <h1 className="custom-text m-0 text-3xl font-semibold text-white lg:text-[44px] lg:text-[#083D6A]">
              Revolutionizing
            </h1>
            <h1
              className={`${isLargeScreen ? "gradient-text" : "text-white"} custom-text m-0 py-0 text-3xl font-semibold lg:py-2 lg:text-[44px]`}
            >
              Glucose
            </h1>
            <h1
              className={`${isLargeScreen ? "gradient-text" : "text-white"} custom-text m-0 pb-0 lg:pb-2 text-3xl font-semibold lg:text-[44px]`}
            >
              Monitoring
            </h1>
          </div>
          <div className="mt-3">
            <span className="text-font text-md mt-1 text-white lg:text-lg lg:text-[#626262]">
              Accurate. Non-Invasive. Powered by AI.
            </span>
          </div>
          <div className="mt-4 lg:mt-6">
            <Button className={`${!isLargeScreen ? "!bg-white !text-[#083D6A]" : "custom-bg"} text-sm md:text-lg`}>
              Request Early Access
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glucose;
