import styles from '@/styles/layout/Navbar.module.scss';
import { TransitionLink } from '../utils/TransitionLink';
import { useRouter } from 'next/router';

export default function MyNavbar() {
  const router = useRouter();
  
  return (
    <nav className={styles.mynavbar}>
      <TransitionLink href="/" passHref>
        <div className={styles.logo}>
          <img src="/images/home/home.png" alt="Home Logo" />
        </div>
      </TransitionLink>
      <ul>
        <li className={router.pathname.startsWith('/garage') ? styles.active : ''}>
          <TransitionLink href="/garage">GARAGE</TransitionLink>
        </li>
        <li className={router.pathname.startsWith('/team') ? styles.active : ''}>
          <TransitionLink href="/team">TEAM</TransitionLink>
        </li>
        <li className={router.pathname.startsWith('/history') ? styles.active : ''}>
          <TransitionLink href="/history">HISTORY</TransitionLink>
        </li>
        <li className={router.pathname.startsWith('/news') ? styles.active : ''}>
          <TransitionLink href="/news">NEWS</TransitionLink>
        </li>
        <li className={router.pathname.startsWith('/shop') ? styles.active : ''}>
          <TransitionLink href="/shop">SHOP</TransitionLink>
        </li>
        <li className={router.pathname.startsWith('/sponsors') ? styles.active : ''}>
          <TransitionLink href="/sponsors">SPONSORS</TransitionLink>
        </li>
        <li className={router.pathname.startsWith('/contacts') ? styles.active : ''}>
          <TransitionLink href="/contacts">CONTACTS</TransitionLink>
        </li>
      </ul>
    </nav>
  );
}
