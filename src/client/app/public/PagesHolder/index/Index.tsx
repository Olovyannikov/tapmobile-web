import { FC } from 'react';
import { SliderContextProvider } from '@client/context/slider.context';

import { Layout } from '@/layouts/Layout';
import { Modals } from '@/components';

import { Hero } from './Hero/Hero';
import { CreateOperator } from './CreateOperator/CreateOperator';
import { Steps } from './Steps/Steps';
import { Support } from './Support/Support';
import { Map } from './Map/Map';
import { Opportunities } from './Opportunities/Opportunities';
import { Platform } from './Platform/Platform';
import { About } from './About/About';
import { SliderToStart } from './SliderToStart/SliderToStart';
import { FAQ } from './FAQ/FAQ';
import { Demo } from './Demo/Demo';

export const Index: FC = (): JSX.Element => {
    return (
        <Layout title='Tapmobile | Главная'>
            <SliderContextProvider>
                <Hero />
                <CreateOperator />
                <Steps />
                <Support />
                <Map />
                <Opportunities />
                <Platform />
                <About />
                <SliderToStart />
                <FAQ />
                <Demo />
                <Modals />
            </SliderContextProvider>
        </Layout>
    );
};
