import { useIsMedium } from '@client/hooks/useMediaQuery';

import Image from 'next/image';

import { aboutAchievementsData } from './AboutAchievements.data';

import s from './AboutAchievements.module.scss';

export const AboutAchievements = (): JSX.Element => {
    const isLarge = useIsMedium();

    return (
        <div className={s.achievements}>
            <div className={s.image}>
                <Image src='/img/about-image.jpg' layout={isLarge ? 'fill' : 'responsive'} width={319} height={224} />
            </div>
            <div className={s.text}>
                <h4 className={s.title}>Что мы сделали</h4>
                <ul className={s.list}>
                    {aboutAchievementsData.map(({ text, id }) => (
                        <li key={id} className={s.item}>
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
