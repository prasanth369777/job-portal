import React from "react";
import HeroSection from "./HeroSection";
import InfiniteCarousel from "./InfiniteCarousel";
import BentoBox from "./jobsearch";
import Mindmp from "./mindamp";
import StatsDashboard from "./Ausbuilding";
import Team from "./TeamsOnDemand";
import Process from "./Process";
import Consult from "./consult&service";
import Testimonial from "./Testimonial";
import CTA from "./CTA";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <HeroSection />
      <InfiniteCarousel />
      <BentoBox />
      <Mindmp />
      <StatsDashboard />
      <Team />
      <Process />
      <Consult />
      <Testimonial />
      <CTA />
      
    </main>
  );
}