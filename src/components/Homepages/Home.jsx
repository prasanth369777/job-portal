import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Pages/Navigation"; // Adjust the path based on your folder structure
import HeroSection from "./HeroSection";
// import InfiniteCarousel from "./InfiniteCarousel";
import BentoBox from "./jobsearch";
import Mindmp from "./mindamp";
import StatsDashboard from "./Ausbuilding";
import Team from "./TeamsOnDemand";
import Process from "./Process";
import Consult from "./consult&service";
import Why from "./whyus";
import Collabs from "./collabs";
import Faqhome from "./Faqhome";
import ExpertSection from "./ExpertSection"; 
import Testimonial from "./Testimonial";
import CTA from "./CTA";

// A small wrapper to handle scroll animations for each section
const ScrollSection = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Added Navbar here */}
      <Navbar />

      {/* 2. Hero stays static or has its own internal entry animation */}
      <HeroSection />
      
      {/* <InfiniteCarousel /> */}

      <div className="space-y-0">
        <ScrollSection>
          <BentoBox />
        </ScrollSection>

        <ScrollSection>
          <Mindmp />
        </ScrollSection>

        <ScrollSection>
          <StatsDashboard />
        </ScrollSection>

        <ScrollSection>
          <Team />
        </ScrollSection>

        <ScrollSection>
          <Process />
        </ScrollSection>

        <ScrollSection>
          <Consult />
        </ScrollSection>

        <ScrollSection>
          <Why />
        </ScrollSection>

        <ScrollSection>
          <Collabs />
        </ScrollSection>

        <ScrollSection>
          <Testimonial />
        </ScrollSection>

        <ScrollSection>
          <Faqhome />
        </ScrollSection>
        
        <ExpertSection />

        <ScrollSection>
          <CTA />
        </ScrollSection>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; }
      `}} />
    </main>
  );
}