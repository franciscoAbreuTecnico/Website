import MyNews from "@/components/news/NewsCoverflowEffect";
import defaultPage from '@/styles/DefaultPage.module.scss';


export default function News() {
    return (
        <>
            <div className={defaultPage.background}></div>
            <MyNews />
        </>
    );
}