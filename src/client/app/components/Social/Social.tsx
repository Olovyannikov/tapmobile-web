import cn from 'classnames';

import Link from 'next/link';
import { Icon } from '@/ui';

import s from './Social.module.scss';
import { SocialProps } from './Social.props';

export const Social = ({ links, className, ...props }: SocialProps): JSX.Element => {
    return (
        <ul className={cn(s.social, className)} {...props}>
            {
                links.map(({ id, path, icon, name }) =>
                    <li key={id} className={s.item}>
                        <Link href={path}>
                            <a aria-label={name}>
                                <Icon icon={icon} width={32} height={32} />
                            </a>
                        </Link>
                    </li>)
            }
        </ul>
    );
};
