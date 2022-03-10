import { FC, PropsWithChildren } from 'react';

import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

import s from './Layout.module.scss';
import { LayoutProps } from './Layout.props';

export const Layout: FC = ({ children }: PropsWithChildren<LayoutProps>): JSX.Element =>
    <div className={s.application}>
        <Header className={s.header} />
        <Main className={s.main}>{children}</Main>
        <Footer className={s.footer} />
    </div>;
