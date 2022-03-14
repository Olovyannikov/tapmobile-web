import { Layout } from '@/layouts/Layout';

import { Modals, About, ChoosingReasons, Connect } from '@/components';

import { Hero } from './Hero/Hero';

export const Operators = ({data}): JSX.Element => {
    return (
        <Layout title='Tapmobile | Операторам'>
            <Hero />
            <About text={data?.about.text} />
            <ChoosingReasons subtitle={data?.reasons.subtitle} list={data?.reasons.list} />
            <Connect />
            <Modals />
        </Layout>
    );
};
