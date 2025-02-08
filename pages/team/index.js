import { getAvailableYears } from '@/components/utils/FetchFolderImages';

export async function getStaticProps() {
    const years = getAvailableYears();

    if (years.length > 0) {
        return {
            redirect: {
                destination: `/team/${years[0]}`, // Redirect to the latest available year
                permanent: true, // Use false for temporary redirects
            },
        };
    }

    return ;
}

export default function TeamIndex() {
    return ;
}
