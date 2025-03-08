import MySponsorsBox from '@/components/sponsors/SponsorsBox';
import MyMajorSponsorSection from '@/components/sponsors/MajorSponsorSection';

export default function Sponsors() {
    return (
        <div>
                <MyMajorSponsorSection />
                {["gold", "silver", "bronze", "copper", "partners"].map((type) => (
                    <MySponsorsBox key={type} type={type} />
                ))}
        </div>
    );
}
