import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useIsLargeScreen from "@/utils/hooks/useWindowSize";
import { testimonials } from "@/configs/testimonial.config";

const Testimonials: React.FC = () => {
  const isLargeScreen = useIsLargeScreen();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isLargeScreen ? 2 : 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet and smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      id="testimonialsid"
      className={`${isLargeScreen ? "container mx-auto" : ""} px-0 lg:px-8`}
    >
      <div className="mx-6 mt-0 lg:mx-0 lg:mt-28 lg:px-0 lg:pl-0">
        {/* Heading Section */}
        <div data-aos="fade-right" className="mt-10 lg:mt-20">
          <h1 className="custom-text m-0 text-[22px] font-semibold text-[#083D6A] sm:text-2xl lg:text-4xl xl:text-[44px]">
            What <span className="gradient-text"> Experts </span>
            Are Saying
          </h1>
        </div>
      </div>
      {/* Testimonials Carousel using Slick */}
      <Slider {...settings} className="mx-4 mt-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 cursor-pointer rounded-3xl bg-white px-6 py-1 shadow-lg sm:px-8 lg:px-12"
            data-aos="fade-up"
          >
            <h4 className="m-0 text-lg font-semibold text-[#083D6A] sm:text-xl lg:text-2xl">
              {item.name}
              <span className="block text-sm text-[#626262] sm:inline">
                {" "}
                ({item.role})
              </span>
            </h4>
            <p className="mt-4 text-base text-[#626262] sm:mt-6 sm:text-lg">
              "{item.quote}"
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
