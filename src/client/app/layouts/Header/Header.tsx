import cn from 'classnames';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useToggle } from '@client/hooks/useToggle';
import useScrollbarSize from 'react-scrollbar-size';
import { useDocumentToScrollThrottled } from '@client/hooks/useDocumentToScrollThrottled';

import { Burger, Container } from '@/ui';

import Logo from '../img/logotype.svg';
import Link from 'next/link';
import { Navigation } from '../Navigation/Navigation';

import s from './Header.module.scss';
import { HeaderProps } from './Header.props';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const router = useRouter();
    const { width } = useScrollbarSize();

    const [isActive, setActive] = useToggle(false);
    const [isHidden, setHidden] = useState<boolean>(false);
    const [isScrolled, setScrolled] = useState<boolean>(false);

    const MIN_SCROLL = 100;
    const TIMEOUT_DELAY = 100;

    useEffect(() => {
        if (isActive) {
            document.body.classList.add('modal--open');
            document.documentElement.style.marginRight = `${width}px`;
        } else {
            document.body.classList.remove('modal--open');
            document.documentElement.style.marginRight = ``;
        }
    }, [isActive]);

    useDocumentToScrollThrottled((callbackData) => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MIN_SCROLL;

        setScrolled(currentScrollTop > 2);

        setTimeout(() => {
            setHidden(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    return (
        <header className={cn(s.header, { [s.hidden]: isHidden, [s.scrolled]: isScrolled }, className)} {...props}>
            <Container className={s.container}>
                {router.pathname === '/' ? (
                    <a className={cn(s.logo, { [s.active]: isActive })}>
                        <Logo />
                    </a>
                ) : (
                    <Link href='/'>
                        <a className={cn(s.logo, { [s.active]: isActive })}>
                            <Logo />
                        </a>
                    </Link>
                )}
                <nav className={s.navigation}>
                    <Navigation isActive={isActive} className={cn(s.nav, { [s.active]: isActive })} />
                    <Burger className={cn(s.burger, { [s.active]: isActive })} onClick={setActive} isActive={isActive} />
                </nav>
            </Container>
        </header>
    );
};
