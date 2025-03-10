import React from 'react';
import Link from 'next/link';
import styles from '@/styles/layout/Footer.module.scss';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoYoutube,
} from "react-icons/io5";

export default function MyFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <div id="section_footer" className={styles.footer}>
      <div className={styles.copyright}>
        <p>RACING TOWARDS THE FUTURE</p>
      </div>

      <div className={styles["social-icons"]}>
        <Link href="https://www.facebook.com/tlmotostudent" target="_blank">
          <IoLogoFacebook size={35} />
        </Link>
        <Link href="https://www.instagram.com/tlmotostudent" target="_blank">
          <IoLogoInstagram size={35} />
        </Link>
        <Link href="https://www.linkedin.com/company/tlmoto" target="_blank">
          <IoLogoLinkedin size={35} />
        </Link>
        <Link href="https://www.tiktok.com/@tlmoto" target="_blank">
          <IoLogoTiktok size={35} />
        </Link>
        <Link href="https://www.youtube.com/@tlmoto689" target="_blank">
          <IoLogoYoutube size={35} />
        </Link>
      </div>
    </div>
  );
}
