import useIsLargeScreen from "@/utils/hooks/useWindowSize";
import React from "react";

// Regulatory section component
const Regulatory: React.FC = () => {
  const isLargeScreen = useIsLargeScreen();
  const approvals = [
    {
      imgSrc: "/images/Fdalogo.png",
      title: "FDA Clearance",
      description:
        "Our device is currently undergoing review for FDA clearance for clinical use in the U.S.",
      delay: 0,
    },
    {
      imgSrc: "/images/healthcanadalogo.png",
      title: "Health Canada Approval",
      description:
        "We are actively pursuing regulatory approval through Health Canada for market entry in Canada.",
      delay: 100,
    },
    {
      imgSrc: "/images/isologo.png",
      title: "ISO 13485 Certification",
      description:
        "We are working towards ISO 13485 certification to ensure medical-grade quality standards.",
      delay: 200,
    },
  ];

  return (
    <div
      id="regulatory"
      className={`${isLargeScreen ? "container mx-auto" : ""} mt-20 px-4 lg:px-8`}
    >
      <div
        className="rounded-[30px] px-6 py-8 md:px-8"
        style={{
          backgroundImage: `url('/images/committed.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Section title with AOS animation */}
        <div data-aos="fade-up" className="text-white text-center lg:text-start">
          <h1 className="custom-text m-0 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
            Committed To Medical Excellence
          </h1>
          <h1 className="custom-text m-0 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
            And Safety
          </h1>
        </div>
        <div className="container mx-auto mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {approvals.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white px-6 py-4 shadow-md"
              data-aos="zoom-in-up"
              data-aos-delay={item.delay}
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="mx-auto mb-4 h-16 w-auto lg:mx-0"
              />

              <h3 className="text-center text-lg font-semibold text-[#083D6A] lg:text-start">
                {item.title}
              </h3>
              <p className="mt-2 text-center text-[14px] text-[#626262] sm:text-[16px] lg:text-start">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Regulatory;
