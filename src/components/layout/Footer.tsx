import React from "react";
import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoYoutube,
} from "react-icons/io5";

export default function MyFooter() {
  return (
    <footer
      id="section_footer"
      className="fixed bottom-0 left-0 w-full text-white py-6 px-4 md:px-8 z-30"
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base tracking-widest font-semibold">
            RACING TOWARDS THE FUTURE
          </p>
        </div>

        {/* Right-aligned social icons */}
        <div className="flex justify-center md:justify-end md:items-center gap-4 md:gap-6">
          <Link href="https://www.facebook.com/tlmotostudent" target="_blank">
            <IoLogoFacebook
              size={35}
              className="hover:text-blue-500 transition-colors duration-200"
            />
          </Link>
          <Link href="https://www.instagram.com/tlmotostudent" target="_blank">
            <IoLogoInstagram
              size={35}
              className="hover:text-pink-500 transition-colors duration-200"
            />
          </Link>
          <Link href="https://www.linkedin.com/company/tlmoto" target="_blank">
            <IoLogoLinkedin
              size={35}
              className="hover:text-blue-700 transition-colors duration-200"
            />
          </Link>
          <Link href="https://www.tiktok.com/@tlmoto" target="_blank">
            <IoLogoTiktok
              size={35}
              className="hover:text-gray-300 transition-colors duration-200"
            />
          </Link>
          <Link href="https://www.youtube.com/@tlmoto689" target="_blank">
            <IoLogoYoutube
              size={35}
              className="hover:text-red-600 transition-colors duration-200"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
