import Image from 'next/image';

import { SupportCardsList } from '../SupportCardsList/SupportCardsList';

import s from './SupportCard.module.scss';
import { SupportCardProps } from './SupportCard.props';

export const SupportCard = ({ id, title, items }: SupportCardProps): JSX.Element =>
    <div className={s.card}>
        <div className={s.img}>
            <Image src={`/img/icon-${id}.svg`} width={64} height={64} />
        </div>
        <h5>{title}</h5>
        <SupportCardsList items={items} />
    </div>;

