import MyDefaultPage from '@/components/DefaultPage';
import MyTimeline from '@/components/Timeline';
import MyFooter from '@/components/Footer';

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