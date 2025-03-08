import MySponsorsBox from '@/components/SponsorsBox';
import MyMajorSponsorSection from '@/components/MajorSponsorSection';

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
