import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoYoutube,
} from "react-icons/io5";

const SOCIALS = [
  {
    href: "https://www.facebook.com/tlmotostudent",
    Icon: IoLogoFacebook,
    label: "Facebook",
    hover: "hover:text-blue-500",
  },
  {
    href: "https://www.instagram.com/tlmotostudent",
    Icon: IoLogoInstagram,
    label: "Instagram",
    hover: "hover:text-pink-500",
  },
  {
    href: "https://www.linkedin.com/company/tlmoto",
    Icon: IoLogoLinkedin,
    label: "LinkedIn",
    hover: "hover:text-blue-700",
  },
  {
    href: "https://www.tiktok.com/@tlmoto",
    Icon: IoLogoTiktok,
    label: "TikTok",
    hover: "hover:text-gray-300",
  },
  {
    href: "https://www.youtube.com/@tlmoto689",
    Icon: IoLogoYoutube,
    label: "YouTube",
    hover: "hover:text-red-600",
  },
];

export default function MyFooter() {
  return (
    <footer
      id="section_footer"
      className="absolute bottom-0 left-0 w-full text-white py-[1vh] px-[1vh] z-30 md:px-[2vh] md:py-[2vh]"
      aria-label="Site Footer"
    >
      <div className="flex flex-col justify-between items-center gap-[0.25vh] max-w-screen-2xl mx-auto md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-s tracking-widest font-semibold uppercase md:text-m xl:text-xl">
            RACING TOWARDS THE FUTURE
          </p>
        </div>
        <div className="flex justify-center md:justify-end gap-[0.75vh] md:items-center md:gap-[1.5vh]">
          {SOCIALS.map(({ href, Icon, label, hover }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`transition-colors duration-200 ${hover}`}
            >
              <Icon size={32} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
