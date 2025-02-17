import MyNews from "@/components/MyNewsCoverflowEffect";
import DefaultPage from "@/components/MyDefaultPage";
import MyFooter from "@/components/MyFooter";

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