'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {

  const pathName = usePathname()

  return (
    <header className="px-4 py-3 w-full max-w-[1200px] bg-foreground bg-opacity-40 mx-auto mt-6 flex justify-between items-center rounded-3xl border border-strokes">
      <div className="relative flex gap-1 items-center">
        <div className="py-[6px] px-2 rounded-xl border border-[#052F35] bg-[0E464F]">
          <img
            src="logoIcon.svg"
            alt="logo-icon"
          />
        </div>
        <img
          src="/ticz.svg"
          alt="Logo"
        />
      </div>
      <nav className="items-center justify-center gap-4 hidden md:flex">
        <ul className="flex gap-4 text-sm md:text-lg *:p-[10px]">
          <li>
            <Link
              href="/"
              className={`${
                pathName === "/" ? "text-white" : "text-[#B3B3B3]"
              }`}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/mytickets"
              className={`${
                pathName === "/mytickets" ? "text-white" : "text-[#B3B3B3]"
              }`}
            >
              My Tickets
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                pathName === "/about" ? "text-white" : "text-[#B3B3B3]"
              }`}
            >
              About Project
            </Link>
          </li>
        </ul>
      </nav>
      <button className="px-6 py-3 border border-[#D5EA00] rounded-xl bg-white hover:bg-[#24A0B5] hover:border-[#D9D9D9] transition text-[#0A0C11] hover:text-[#D9D9D9] duration-300">
        MY TICKETS <span className="ml-2">→</span>
      </button>
    </header>
  );
};

export default Navbar;
