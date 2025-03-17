import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAvailableYears } from '@/components/utils/FetchFolderImages';
// import { redirect } from 'next/navigation'; ver se é possivel usar redirect

export async function getStaticProps() {
    const years = getAvailableYears(); // Ensure this works without async if using static export

    return {
        props: { years },
    };
}

export default function TeamIndex({ years }) {
    const router = useRouter();

    useEffect(() => {
        if (years.length > 0) {
            router.replace(`/team/${years[0]}`); // Redirect to the latest year
        }
    }, [years, router]);

    return; 
}
