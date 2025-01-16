import Link from 'next/link';
import styles from './MyNavbar.module.scss';
import { useRouter } from 'next/router'
import { TransitionLink } from './utils/TransitionsLink';

export default function MysNavbar() {
  return (
    <nav className={styles.mynavbar}>
      <ul>
        <li><TransitionLink href="/garage">GARAGE</TransitionLink></li>
        <li><TransitionLink href="/team">TEAM</TransitionLink></li>
        <li><TransitionLink href="/history">HISTORY</TransitionLink></li>
        <li><TransitionLink href="/news">NEWS</TransitionLink></li>
        <li><TransitionLink href="/shop">SHOP</TransitionLink></li>
        <li><TransitionLink href="/sponsors">SPONSORS</TransitionLink></li>
        <li><TransitionLink href="/contacts">CONTACTS</TransitionLink></li>
      </ul>
    </nav>
  );
}
