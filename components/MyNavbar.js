import Link from 'next/link';
import styles from './MyNavbar.module.scss';
import { useRouter } from 'next/router'

export default function MysNavbar() {
  return (
    <nav className={styles.mynavbar}>
      <ul>
        <li><Link href="/garage">GARAGE</Link></li>
        <li><Link href="/team">TEAM</Link></li>
        <li><Link href="/history">HISTORY</Link></li>
        <li><Link href="/news">NEWS</Link></li>
        <li><Link href="/shop">SHOP</Link></li>
        <li><Link href="/sponsors">SPONSORS</Link></li>
        <li><Link href="/contacts">CONTACTS</Link></li>
      </ul>
    </nav>
  );
}
