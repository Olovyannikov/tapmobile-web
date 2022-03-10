import { useAsyncData } from '@client/hooks/useAsyncData';

import { Layout } from '@/layouts/Layout';

import { Modals, About, ChoosingReasons, Connect } from '@/components';

import { Hero } from './Hero/Hero';

export const Operators = (): JSX.Element => {
    const text = useAsyncData('/content/operators/about.json');

    return (
        <Layout title='Tapmobile | Операторам'>
            <Hero />
            <About text={text?.about.text} />
            <ChoosingReasons subtitle={text?.reasons.subtitle} list={text?.reasons.list} />
            <Connect />
            <Modals />
        </Layout>
    );
};
