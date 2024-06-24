import { cn } from "@/lib/utils";
import { House, HouseIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import { MonetWorkLogo } from "./monet-work-logo";
import { Button } from "./ui/button";

type Props = {};

function Navbar({}: Props) {
  const navItems = [
    {
      name: "About",
      link: "/",
      icon: <House className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "What we are building",
      link: "/about",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Tokenomics",
      link: "/contact",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Community",
      link: "/contact",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Products",
      link: "/contact",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Docs",
      link: "/contact",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <nav className="w-full">
      <div className="w-full bg-black/20 backdrop-blur items-center flex justify-evenly border-b-white/10 border-b fixed z-50 py-3 top-0 px-10">
        <MonetWorkLogo className="w-28 " />
        <div
          className={cn(
            "flex max-w-fit top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4"
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={
                "relative hidden dark:text-neutral-50 items-center lg:flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              }
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <span>Launch App</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </div>
        <Button variant={"outline"} className=" rounded-full text-white">
          Join Community
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
