import React, { useState } from "react";
import { Feature } from "@/@types/feature";
import AiDriven from "@/svg/AiDriven";
import Clinic from "@/svg/Clinic";
import Finger from "@/svg/Finger";
import Tracking from "@/svg/Tracking";
import useIsLargeScreen from "@/utils/hooks/useWindowSize";

const FeaturesAccordion: React.FC = () => {
  const isLargeScreen = useIsLargeScreen();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features: Feature[] = [
    {
      title: "No Finger Pricks",
      content:
        "Say goodbye to painful needles. ASR’s non-invasive sensors provide pain-free, needle-free glucose monitoring.",
      imgSrc: <Finger isHover={hoveredIndex === 0} />,
    },
    {
      title: "Continuous Real-Time Tracking",
      content:
        "Live updates of glucose levels throughout the day, directly on your device.",
      imgSrc: <Tracking isHover={hoveredIndex === 1} />,
    },
    {
      title: "Clinical-Grade Accuracy",
      content:
        "Engineered to meet rigorous clinical standards using cutting-edge sensor arrays. Trust your health data with sensors engineered for precision, reliability, and clinical-grade performance.",
      imgSrc: <Clinic isHover={hoveredIndex === 2} />,
    },
    {
      title: "AI-Driven Insights",
      content:
        "ASR's glucose monitoring technology is built on powerful machine learning models backed by rigorous research. Our advanced AI algorithms provide continuous, accurate glucose trend predictions, empowering you to proactively manage your health with confidence.",
      imgSrc: <AiDriven isHover={hoveredIndex === 3} />,
    },
  ];

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
              className="bg-accordion flex cursor-pointer flex-col items-center gap-4 rounded-[20px] px-4 py-6 shadow-md stop-transition hover:bg-[#E8F4FF] sm:flex-row sm:gap-4 lg:rounded-[30px] lg:px-2 lg:py-4"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full p-5 stop-transition ${
                  hoveredIndex === index ? "icon-color" : "bg-white"
                }`}
              >
                <div className="h-12 w-12">{feature.imgSrc}</div>
              </div>
              <div>
                <h2 className="m-0 text-center font-sans text-[18px] font-semibold text-[#083D6A] stop-transition sm:text-lg md:text-start lg:text-xl">
                  {feature.title}
                </h2>
                <span className="lg:text-md mt-2 block text-center text-sm text-[#626262] stop-transition sm:text-base md:text-start">
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
