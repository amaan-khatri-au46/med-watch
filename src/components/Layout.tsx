import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="mt-0 lg:mt-11 pb-32">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
