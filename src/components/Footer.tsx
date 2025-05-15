import React from "react";
import Button from "./Button";

const Footer: React.FC = () => {
  return (
    <div id="newsletter" data-aos="fade-up">
      <footer className="relative bg-[#083D6A] pt-20 text-white">
        {/* Position upper content in the top half of the footer */}
        <div className="absolute left-0 top-2 w-full -translate-y-1/2">
          <div className="footer-background container mx-auto rounded-3xl px-6 py-8 shadow-lg">
            <h1 className="custom-text m-0 text-[22px] font-semibold text-[#083D6A] sm:text-2xl lg:text-4xl xl:text-[44px]">
              Be Among the First to Experience the Future of
            </h1>
            <h1 className="custom-text m-0 py-2 text-[22px] font-semibold text-[#083D6A] sm:text-2xl lg:text-4xl xl:text-[44px]">
              Glucose Monitoring{" "}
            </h1>
            <div className="mt-6 flex w-full items-center rounded-full bg-white shadow-lg">
              <input
                type="email"
                placeholder="Enter Your Email ID"
                className="flex-grow rounded-full px-2 py-2 text-sm !text-black focus:outline-none"
              />
              <button className="custom-bg lg:text-md rounded-full px-2 py-2 text-sm lg:px-6 lg:py-3">
                Join the Wishlist
              </button>
            </div>
          </div>
        </div>
        {/* Footer Content */}
        <div className="3xl:px-0 container mx-auto flex w-full flex-col items-center justify-between px-6 pb-6 pt-24 lg:flex-row lg:px-0">
          <div className="mb-4 space-x-4 text-sm lg:mb-0">
            <a href="#privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms-conditions" className="hover:underline">
              Terms
            </a>
            <span>|</span>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="text-center text-sm">
            © {new Date().getFullYear()} Advanced Sensor Research (ASR), All
            Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
