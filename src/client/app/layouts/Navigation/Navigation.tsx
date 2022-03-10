import cn from 'classnames';

import { useRouter } from 'next/router';
import { useTypedDispatch } from '@client/hooks/useTypedDispatch';

import { Button, Icon } from '@/ui';

import Link from 'next/link';

import s from './Navigation.module.scss';
import { NavigationProps } from './Navigation.props';
import { nav, NavigationInterface } from './Navigation.interface';

export const Navigation = ({ className, isActive, ...props }: NavigationProps): JSX.Element => {
    const router = useRouter();
    const {
        modals: { showPublicModal },
    } = useTypedDispatch();

    return (
        <>
            <ul className={cn(className, s.nav)} {...props}>
                {nav.map(({ title, path }: NavigationInterface) => (
                    <li key={title}>
                        <Link href={path}>
                            <a className={cn({ [s.active]: path === router.pathname })}>{title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <Button onClick={() => showPublicModal('auth')} className={cn(s.btn, { [s.active]: isActive })}>
                Личный кабинет
                <Icon icon='login' width={24} height={24} />
            </Button>
        </>
    );
};
