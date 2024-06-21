"use client";
import { FloatingNav } from "@/components/FloatingNavbar";
import Image from "next/image";
import { House, HouseIcon } from "lucide-react";
import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <House className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  w-full">
      <Navbar />
      {/* <FloatingNav navItems={navItems} /> */}
      <Hero />
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
