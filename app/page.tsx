"use client";
import About from "@/components/landing-page/About";
import { FeatureGrid } from "@/components/landing-page/FeaturesGrid";
import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden bg-black justify-between  w-full">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <About />
      <DummyContent />
      <DummyContent />
      Hello
    </main>
  );
}
const DummyContent = () => {
  return (
    <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
      <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
        Scroll back up to reveal Navbar
      </p>
      <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
    </div>
  );
};
