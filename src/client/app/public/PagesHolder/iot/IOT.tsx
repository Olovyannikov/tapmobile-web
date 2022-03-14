import { Layout } from '@/layouts/Layout';

import { ChoosingReasons, Connect, Modals } from '@/components';

import { Hero } from './Hero/Hero';
import { AboutProgram } from './AboutProgram/AboutProgram';

export const IOT = ({data}): JSX.Element => {
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
