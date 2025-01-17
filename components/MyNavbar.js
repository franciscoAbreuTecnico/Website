import Link from 'next/link';
import styles from './MyNavbar.module.scss';
import { TransitionLink } from './utils/TransitionLink';
import { useRouter } from 'next/router';

export default function MyNavbar() {
  const router = useRouter();
  
  return (
    <nav className={styles.mynavbar}>
      <TransitionLink href="/" passHref>
        <div className={styles.logo}>
          <img src="/images/index_resources/home.png" alt="Home Logo" />
        </div>
      </TransitionLink>
      <ul>
        <li className={router.pathname === '/garage' ? styles.active : ''}>
          <TransitionLink href="/garage">GARAGE</TransitionLink>
        </li>
        <li className={router.pathname === '/team' ? styles.active : ''}>
          <TransitionLink href="/team">TEAM</TransitionLink>
        </li>
        <li className={router.pathname === '/history' ? styles.active : ''}>
          <TransitionLink href="/history">HISTORY</TransitionLink>
        </li>
        <li className={router.pathname === '/news' ? styles.active : ''}>
          <TransitionLink href="/news">NEWS</TransitionLink>
        </li>
        <li className={router.pathname === '/shop' ? styles.active : ''}>
          <TransitionLink href="/shop">SHOP</TransitionLink>
        </li>
        <li className={router.pathname === '/sponsors' ? styles.active : ''}>
          <TransitionLink href="/sponsors">SPONSORS</TransitionLink>
        </li>
        <li className={router.pathname === '/contacts' ? styles.active : ''}>
          <TransitionLink href="/contacts">CONTACTS</TransitionLink>
        </li>
      </ul>
    </nav>
  );
}
