"use client";
import Link from "next/link";
import { useRouter } from "next/router"; // If using app router, replace with usePathname from 'next/navigation'
import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { path: "/garage", label: "GARAGE" },
  { path: "/team", label: "TEAM" },
  { path: "/history", label: "HISTORY" },
  { path: "/news", label: "NEWS" },
  { path: "/shop", label: "SHOP" },
  { path: "/sponsors", label: "SPONSORS" },
  { path: "/contacts", label: "CONTACTS" },
];

export default function MyNavbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open (improved UX)
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Styling for active/inactive nav link
  const isActive = (href: string) =>
    router.pathname === href || router.pathname.startsWith(href + "/");
  const liStyle =
    "tracking-[0.1em] px-[1vh] transition-all duration-300 ease-in-out text-white hover:text-[#3293e0] hover:tracking-[0.15em]";
  const liStyleActive =
    liStyle +
    " text-[#3293e0] font-bold text-shadow-[0_0_2vh_#97bddc,0_0_2vh_#3293e0]";

  return (
    <nav
      className="h-[10vh] left-0 top-0 z-40 w-screen bg-transparent fixed text-[clamp(2vh,2vw,5vh)]"
      aria-label="Main Navigation"
    >
      {/* Gradient Bar Below Navbar (desktop only) */}
      <div className="hidden xl:flex w-[85%] h-[1vh] absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(to_right,transparent,_#97bddc,_#3293e0,_#97bddc,_transparent)]"></div>
      <ul className="hidden xl:flex px-5 w-full h-full justify-around items-center list-none">
        {/* Home logo/placeholder */}
        <li className="h-[80%]">
          <Link href="/" passHref legacyBehavior>
            <a aria-label="Home">
              <div className="aspect-[207/169] h-full">
                <Image
                  src="/images/home/RAIO_NEGATIVO.png"
                  alt="Home Logo"
                  width={207}
                  height={169}
                  priority // Always optimized, above the fold
                  className="h-full w-full transition-transform duration-300 ease-in-out hover:scale-[1.2]"
                />
              </div>
            </a>
          </Link>
        </li>
        {/* Navigation links */}
        {NAV_LINKS.map(({ path, label }) => (
          <li
            key={path}
            className={isActive(path) ? liStyleActive : liStyle}
            aria-current={isActive(path) ? "page" : undefined}
          >
            <Link href={path}>{label}</Link>
          </li>
        ))}
        {/* Right-side spacing/placeholder for layout symmetry */}
        <li className="aspect-[207/169] h-full"></li>
      </ul>

      {/* MOBILE NAV */}
      {/* Backdrop Blur Overlay (only visible when menu is open) */}
      <div
        className={`fixed inset-0 z-30 transition-opacity duration-300 pointer-events-none ${
          isOpen ? "opacity-100 backdrop-blur-sm bg-black/40 pointer-events-auto" : "opacity-0"
        }`}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      />

      <div className="z-40 relative xl:hidden w-full h-full">
        <div className="h-full px-5 flex items-center justify-between">
          {/* Hamburger Button */}
          <button
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="h-[90%] pt-5 transition-transform duration-500 focus:outline-none"
            onClick={toggleMenu}
            tabIndex={0}
          >
            <svg
              width={40}
              height={40}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className={isOpen ? "rotate-90 transition-transform duration-300" : "rotate-0 transition-transform duration-300"}
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          </button>
          {/* Center logo */}
          <Link href="/" passHref legacyBehavior>
            <a className="h-full flex items-center" aria-label="Home">
              <Image
                src="/images/home/TLMOTO_PRINCIPAL.png"
                alt="Home Logo"
                width={130}
                height={70}
                priority
                className="h-[70%] w-auto"
              />
            </a>
          </Link>
        </div>
        {/* Slide-down Mobile Menu */}
        <ul
          className={`absolute left-0 text-2xl gap-10 right-0 top-full z-40 px-7 py-12 rounded-b-2xl flex flex-col list-none gap-7 transition-all duration-400 ${
            isOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-3"
          }`}
          style={{ minHeight: "40vh" }}
          tabIndex={isOpen ? 0 : -1}
        >
          {NAV_LINKS.map(({ path, label }) => (
            <li
              key={path}
              className={isActive(path) ? liStyleActive : liStyle}
              onClick={() => setIsOpen(false)}
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }
}
