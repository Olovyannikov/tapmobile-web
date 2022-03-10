import { Layout } from '@/layouts/Layout';

import { useAsyncData } from '@client/hooks/useAsyncData';

import { ChoosingReasons, Connect, Modals } from '@/components';

import { Hero } from './Hero/Hero';
import { AboutProgram } from './AboutProgram/AboutProgram';

export const IOT = (): JSX.Element => {
    const data = useAsyncData('/content/iot/iot.json');
    return (
        <Layout title='Tapmobile | IoT провайдерам'>
            <Hero />
            <AboutProgram text={data?.about.text} />
            <ChoosingReasons subtitle={data?.reasons.subtitle} list={data?.reasons.list} />
            <Connect wizard='auth' />
            <Modals />
        </Layout>
    );
};
