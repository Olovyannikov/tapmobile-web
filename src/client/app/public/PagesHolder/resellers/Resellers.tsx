import { Layout } from '@/layouts/Layout';

import { About, ChoosingReasons, Connect, Modals } from '@/components';
import { Hero } from './Hero/Hero';
import { Proposals } from './Proposals/Proposals';

export const Resellers = ({data}): JSX.Element => {
    return (
        <Layout title='Tapmobile | Реселлерам'>
            <Hero />
            <About text={data?.about.text} />
            <ChoosingReasons list={data?.reasons.list} />
            <Proposals />
            <Connect wizard='auth' />
            <Modals />
        </Layout>
    );
};
