//import styles from '@/styles/layout/Navbar.module.scss';
import { TransitionLink } from "../utils/TransitionLink";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MyNavbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const liStyle =
    "tracking-[0.1em] no-underline px-[1vh] transition-all duration-300 ease-in-out text-white text-shadow-[0_0_1vh_white] hover:text-white hover:text-shadow-[0_0_2vh_#3293e0,0_0_2vh_#3293e0,0_0_2vh_#3293e0,0_0_2vh_#3293e0] hover:tracking-[0.15em]";

  const liStyleActive = liStyle + " text-[#3293e0] text-shadow-[0_0_2vh_#97bddc,0_0_2vh_#3293e0]";


  return (
    <nav className="h-[10vh] left-[0vw] z-20 w-screen bg-transparent fixed text-[clamp(2vh,2vw,5vh)]">
      <div className="hidden lg:flex w-[85%] h-[1vh] absolute  bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(to_right,transparent,_#97bddc,_#3293e0,_#97bddc,_transparent)]"></div>
      <ul className="hidden lg:flex px-5 w-[100%] h-[100%] justify-around items-center list-none">
        {router.pathname !== "/" && (
          <li className="h-[80%]">
            <TransitionLink href="/" passHref>
              <div className="aspect-[207/169] h-full">
                <img
                  className="h-full w-full transition-transform duration-300 ease-in-out hover:scale-[1.2]"
                  src="/images/home/RAIO_NEGATIVO.png"
                  alt="Home Logo"
                />
              </div>
            </TransitionLink>
          </li>
        )}
        {router.pathname === "/" && (
          <li className="h-[80%]">
            <div className="aspect-[207/169] h-full"></div>
          </li>
        )}
        <li className={router.pathname.startsWith("/garage") ? liStyleActive : liStyle}>
          <TransitionLink href="/garage">GARAGE</TransitionLink>
        </li>
        <li className={router.pathname.startsWith("/team") ? liStyleActive : liStyle}>
          <TransitionLink href="/team">TEAM</TransitionLink>
        </li>
        <li className={router.pathname.startsWith("/history") ? liStyleActive : liStyle}>
          <TransitionLink href="/history">HISTORY</TransitionLink>
        </li>
        <li className={router.pathname.startsWith("/news") ? liStyleActive : liStyle}>
          <TransitionLink href="/news">NEWS</TransitionLink>
        </li>
        <li className={router.pathname.startsWith("/shop") ? liStyleActive : liStyle}>
          <TransitionLink href="/shop">SHOP</TransitionLink>
        </li>
        <li className={router.pathname.startsWith("/sponsors") ? liStyleActive : liStyle}>
          <TransitionLink href="/sponsors">SPONSORS</TransitionLink>
        </li>
        <li className={router.pathname.startsWith("/contacts") ? liStyleActive : liStyle}>
          <TransitionLink href="/contacts">CONTACTS</TransitionLink>
        </li>
        <li className="aspect-[207/169] h-full"></li>
      </ul>

      {/* Blur Overlay behind mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-10 backdrop-blur-md bg-black/30 transition-opacity duration-300 pointer-events-none"></div>
      )}

      {/* Mobile Menu */}
      <div className="z-20 relative lg:hidden w-full h-full">
        <div className="h-full px-5 flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-[90%] pt-5 transition-transform duration-500 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            onClick={toggleMenu}
          >
            <path d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" />
          </svg>

          <div className="h-full flex items-center justify-center">
            <img
              className="h-[70%] "
              src="/images/home/TLMOTO_PRINCIPAL.png"
              alt="Home Logo"
            />
          </div>
        </div>

        <ul className={`p-5 flex flex-col list-none gap-10 transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {/* Menu Links */}
          <li className={router.pathname.startsWith("/garage") ? liStyleActive : liStyle}>
            <TransitionLink href="/garage" onClick={() => setIsOpen(false)}>GARAGE</TransitionLink>
          </li>
          <li className={router.pathname.startsWith("/team") ? liStyleActive : liStyle}>
            <TransitionLink href="/team" onClick={() => setIsOpen(false)}>TEAM</TransitionLink>
          </li>
          <li className={router.pathname.startsWith("/history") ? liStyleActive : liStyle}>
            <TransitionLink href="/history" onClick={() => setIsOpen(false)}>HISTORY</TransitionLink>
          </li>
          <li className={router.pathname.startsWith("/news") ? liStyleActive : liStyle}>
            <TransitionLink href="/news" onClick={() => setIsOpen(false)}>NEWS</TransitionLink>
          </li>
          <li className={router.pathname.startsWith("/shop") ? liStyleActive : liStyle}>
            <TransitionLink href="/shop" onClick={() => setIsOpen(false)}>SHOP</TransitionLink>
          </li>
          <li className={router.pathname.startsWith("/sponsors") ? liStyleActive : liStyle}>
            <TransitionLink href="/sponsors" onClick={() => setIsOpen(false)}>SPONSORS</TransitionLink>
          </li>
          <li className={router.pathname.startsWith("/contacts") ? liStyleActive : liStyle}>
            <TransitionLink href="/contacts" onClick={() => setIsOpen(false)}>CONTACTS</TransitionLink>
          </li>
        </ul>
      </div>
    </nav >
  );
}
