import MyDefaultPage from '@/components/DefaultPage';
import MySponsorsBox from '@/components/SponsorsBox';
import MyFooter from '@/components/Footer';
import MyMajorSponsorSection from '@/components/MajorSponsorSection';

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
