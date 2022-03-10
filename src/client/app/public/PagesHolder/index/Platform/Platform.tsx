import { useIsLarge } from '@client/hooks/useMediaQuery';

import Image from 'next/image';
import { Container, Title } from '@/ui';

import Doughnut from './img/doughnut.svg';

import s from './Platform.module.scss';
import { DotsAnimation } from '@/components';

export const Platform = ({}): JSX.Element => {
    const isLarge = useIsLarge();

    return (
        <section className={s.platform}>
            <Container>
                <div className={s.text}>
                    <Title className={s.title}>Готовая платформа для быстрой работы</Title>
                    <p className={s.description}>Разработанная нашей компанией платформа позволит вам в кратчайшие сроки
                        подключить абонентов,
                        настроить тарифы и организовать связь, став полноценным MVNO</p>
                </div>
            </Container>
            {isLarge && <DotsAnimation className={s.animation} x={18} y={6} duration={500} />}
            {!isLarge && <DotsAnimation className={s.animation} x={4} y={3} duration={500} />}
            <div className={s.images} aria-hidden>
                <div className={s.glow} />
                <div className={s.img}>
                    <Image src='/img/platform.png' width={873} height={482} />
                </div>
                <Doughnut className={s.doughnut} />
            </div>
        </section>
    );
};
