import MyTimeline from '@/components/history/Timeline';
import defaultPage from '@/styles/DefaultPage.module.scss';

export default function History() {
  return (
    <div>
      <div className={defaultPage.background}></div>
      <MyTimeline />
    </div>
  );
}
