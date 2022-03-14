import { Operators } from '@/public-app';
import { getData } from '@client/services/getData';
import { IPageData } from '@/types/index';
import { GetStaticProps } from 'next';

const OperatorsPage = ({ data }: IPageData): JSX.Element => <Operators data={data} />;

export default OperatorsPage;

export const getServerSideProps: GetStaticProps = async () => {
    const data = await getData(`${process.env.API_HOST}/data/content/operators/operators.json`);

    if (!data) return { notFound: true };

    return {
        props: { data },
    };
};
