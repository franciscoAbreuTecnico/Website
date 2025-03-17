import styles from '@/styles/DefaultPage.module.scss';

export default function MyDefaultPage({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                {children}
            </div>
        </div>
    );
}
