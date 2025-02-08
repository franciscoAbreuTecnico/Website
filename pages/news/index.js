import MyNews from "@/components/MyNewsCoverflowEffect";
import defaultPage from "@/components/MyDefaultPage.module.scss";
import MyFooter from "@/components/MyFooter";

export default function News() {
    return (
        <>
            <div className={defaultPage.container}>
                <div className={defaultPage.background}></div>
                <div className={defaultPage.row}>
                    <h1 className={defaultPage.title}>
                        <span className={defaultPage.white}>{'TLMOTO\'S '}</span>
                        <span className={defaultPage.blue}>{'NEWSLETTER'}</span>
                    </h1>
                </div>
                <MyNews />
            </div>
            <MyFooter />
        </>
    );
}