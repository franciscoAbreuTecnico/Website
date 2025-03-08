import styles from '@/styles/DefaultPage.module.scss';

export default function MyDefaultPage({ blueTitle, whiteTitle, children }) {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.row}>
                </div>
                {children}
            </div>
        </div>
    );
}
