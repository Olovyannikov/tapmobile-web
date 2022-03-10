import cn from 'classnames';

import { useRouter } from 'next/router';

import Link from 'next/link';
import { Container } from '@/ui';

import { Social } from '@/components';
import { Navigation } from '../Navigation/Navigation';

import { getCurrentYear } from '@client/utils/utils';

import Logo from '../img/logotype.svg';

import s from './Footer.module.scss';
import { FooterProps } from './Footer.props';
import { footerLinks } from './Footer.links';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    const router = useRouter();

    return (
        <footer className={cn(s.footer, className)} {...props}>
            <Container className={s.container}>
                {
                    router.pathname === '/' ?
                        <a className={s.logo}>
                            <Logo />
                        </a>
                        :
                        <Link href='#'>
                            <a className={s.logo}>
                                <Logo />
                            </a>
                        </Link>
                }
                <Navigation className={s.nav} isActive />
                <Social className={s.social} links={footerLinks} />
                <address className={s.address}>
                    Юр.адрес: 107023, г.Москва, Семеновская площадь, 1а
                </address>
                <span className={s.copyright}>© {getCurrentYear()} TAPMOBILE.ONE</span>
            </Container>
        </footer>
    );
};
