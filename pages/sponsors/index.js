import MyDefaultPage from '@/components/MyDefaultPage';
import MySponsorsBox from '@/components/MySponsorsBox';
import MyFooter from '@/components/MyFooter';
import MyMajorSponsorSection from '@/components/MyMajorSponsorSection';

export default function Sponsors() {
    return (
        <div>
            <MyDefaultPage whiteTitle={"TLMoto's "} blueTitle={"Sponsors"}>
                <MyMajorSponsorSection />
                {["gold", "silver", "bronze", "copper", "partners"].map((type) => (
                    <MySponsorsBox key={type} type={type} />
                ))}
            </MyDefaultPage>
            <MyFooter />
        </div>
    );
}
