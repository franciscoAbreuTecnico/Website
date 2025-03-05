import MyDefaultPage from '@/components/MyDefaultPage';
import MyTimeline from '@/components/MyTimeline';
import MyFooter from '@/components/MyFooter';

export default function History() {
    return (
        <div>
            <MyDefaultPage whiteTitle={'TLMOTO\'S '} blueTitle={'HISTORY'}>
                <MyTimeline/>
            </MyDefaultPage>
            <MyFooter/>
        </div>
    );
}