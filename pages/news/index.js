import MyNews from "@/components/NewsCoverflowEffect";
import DefaultPage from "@/components/DefaultPage";
import MyFooter from "@/components/Footer";

export default function News() {
    return (
        <>
            <DefaultPage whiteTitle={'TLMOTO\'S '} blueTitle={'NEWSLETTER'}>
                <MyNews />
            </DefaultPage>
            <MyFooter />
        </>
    );
}