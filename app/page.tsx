"use client";
import About from "@/components/landing-page/About";
import { FeatureGrid } from "@/components/landing-page/FeaturesGrid";
import Footer from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import JoinUs from "@/components/landing-page/JoinUs";
import WhatAreWeBuilding from "@/components/landing-page/What-are-we-building";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden bg-black justify-between  w-full">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <About />
      <WhatAreWeBuilding />
      <JoinUs />
      <Footer />
    </main>
  );
}
