import { Resellers } from '@/public-app';
import { getData } from '@client/services/getData';
import { IPageData } from '@/types/index';

const ResellersPage = ({ data }: IPageData) => <Resellers data={data} />;

export default ResellersPage;

export const getStaticProps = async () => {
    const data = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/content/resellers/resellers.json`);
    if (!data) return { notFound: true };

    return {
        props: { data },
    };
};
