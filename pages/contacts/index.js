import Image from 'next/image';
import styles from '@/components/MyContacts.module.scss';

export default function Contacts() {
    return (
        <div className={`container ${styles.container}`}>
            <h1>Contacts</h1>
        </div>
    );
}