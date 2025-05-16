import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import HowItWorks from "@/components/HowItWorks";
import Regulatory from "@/components/Regulatory";
import Team from "@/components/Team";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testemonials";
import Glucose from "@/components/Glucose";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <Layout>
      <Glucose />
      <About />
      <FeaturesAccordion />
      <HowItWorks />
      <Testimonials />
      <Regulatory />
      <Team />
    </Layout>
  );
};

export default Home;
