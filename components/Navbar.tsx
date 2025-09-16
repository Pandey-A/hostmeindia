"use client";

import { NAV_LINKS } from "../constants/index";
import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY.current) {
      setShowNavbar(false); // Scrolling down
    } else {
      setShowNavbar(true); // Scrolling up
    }
    lastScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <nav
      className={`fixed top-0 left-0 z-30 w-full bg-white/70 backdrop-blur-md shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full flexBetween max-container padding-container z-30">
        <Link href="/">
          <p><Image src="/logo.png" alt="logo" width={60} height={60} /> Hostmen India Tourists Private Limited</p>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden h-full gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-18 text-black flexCenter cursor-pointer transition-all hover:font-bold hover:text-lime-300"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <i
            className={`bx bx-menu text-2xl text-black transition-all duration-300 ${
              open ? "bx-x" : ""
            }`}
          ></i>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <ul
        className={
          "absolute top-16 left-0 flex flex-col gap-4 p-3 w-full bg-white/70 backdrop-blur-md shadow-md lg:hidden" +
          (open ? " flex" : " hidden")
        }
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-14 text-black flexCenter cursor-pointer transition-all hover:font-bold hover:text-lime-300"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
