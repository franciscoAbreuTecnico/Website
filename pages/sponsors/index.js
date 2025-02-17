import DefaultPage from '@/components/MyDefaultPage';
import { initial_text } from '@/components/textContent/SponsorSectionText';
import styles from '@/styles/MySponsors.module.scss';

export default function Sponsors() {
    return (
        <DefaultPage whiteTitle={'TLMoto\'s '} blueTitle={'Sponsors'}>
            <span className={styles.initial_text}>{initial_text}</span>
        </DefaultPage>
    );
}

