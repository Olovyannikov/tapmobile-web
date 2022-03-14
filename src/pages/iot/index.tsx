import { IOT } from '@/public-app';
import { getData } from '@client/services/getData';
import { IPageData } from '@/types/index';

const IotPage = ({ data }: IPageData): JSX.Element => <IOT data={data} />;

export default IotPage;

export const getStaticProps = async () => {
    const data = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/content/iot/iot.json`);

    if (!data) return { notFound: true };

    return {
        props: { data },
    };
};
