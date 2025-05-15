import React, { useState, useEffect } from "react";
import { navigationConfig } from "@/configs/navigation.config";
import { handleScroll } from "@/utils/helpers";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { Drawer } from "@material-tailwind/react";

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  const onLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    handleScroll(href, 150);
  };

  // Lock scrolling when drawer is open
  useEffect(() => {
    if (openDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on component unmount
    };
  }, [openDrawer]);

  return (
    <>
      <div className="container sticky top-5 z-50 mx-auto px-6 lg:px-8">
        <header className="rounded-full bg-white shadow-lg">
          <div className="flex items-center rounded-full">
            <div className="flex w-full items-center justify-between py-1 lg:py-0">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="ml-6 h-10 w-12 md:h-12 md:w-16 xl:ml-14 xl:h-16 xl:w-20"
              />
              <button
                className="mr-6 block cursor-pointer text-xl lg:hidden"
                onClick={toggleDrawer}
              >
                <FaBars color="#083D6A" />
              </button>
              <nav className="custom-bg hidden items-center space-x-0 rounded-full px-2 py-4 text-white lg:flex xl:space-x-2 xl:px-2 xl:py-5">
                {navigationConfig?.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => onLinkClick(e, link.href)}
                    className={`${
                      index === 0
                        ? "bg-white text-[#083D6A]"
                        : "hover:text-gray-200"
                    } rounded-full px-3 py-1 text-sm font-medium xl:px-4`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </header>
      </div>
      {/* @ts-ignore */}
      <Drawer open={openDrawer} placement="right" onClose={toggleDrawer}>
        <div className="relative p-4">
          {/* Close button */}
          <button
            onClick={toggleDrawer}
            className="absolute right-4 top-4 text-[#083D6A]"
            aria-label="Close Drawer"
          >
            <RiCloseLine size={24} />
          </button>
          <h2 className="mb-4 text-xl font-semibold text-[#083D6A]">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-12 md:h-12 md:w-16"
            />
          </h2>
          <nav className="flex flex-col space-y-4">
            {navigationConfig?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  onLinkClick(e, link.href);
                  toggleDrawer();
                }}
                className="font-medium text-[#083D6A]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
