import { PropsWithChildren } from 'react';

import Head from 'next/head';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

import s from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

export const Layout = ({ children, title = 'Tapmobile' }: PropsWithChildren<LayoutProps>): JSX.Element =>
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className={s.application}>
            <Header className={s.header} />
            <Main className={s.main}>{children}</Main>
            <Footer className={s.footer} />
        </div>
    </>;
