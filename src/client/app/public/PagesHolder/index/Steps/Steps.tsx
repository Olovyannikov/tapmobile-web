import { useIsLarge } from '@client/hooks/useMediaQuery';

import { Button, Container, Title } from '@/ui';

import Image from 'next/image';
import { StepsList } from './StepsList/StepsList';

import sim from './img/sim.png';
import simDesktop from './img/sim-desktop.png';

import s from './Steps.module.scss';
import { DotsAnimation } from '@/components';
import cn from 'classnames';

export const Steps = (): JSX.Element => {
    const isLarge = useIsLarge();

    return (
        <section className={s.section}>
            <Container className={s.container}>
                <div className={s.content}>
                    <Title className={s.title}>3 этапа для запуска вашего оператора</Title>
                    <StepsList />
                    <Button className={s.btn}>Запустить оператора</Button>
                    <div className={s.img}>
                        {isLarge ?
                            <Image src={simDesktop} alt='' aria-hidden /> :
                            <Image src={sim} alt='' aria-hidden />
                        }
                    </div>

                    {isLarge && <DotsAnimation className={s.animation} x={12} y={7} duration={500} />}
                    {!isLarge && <DotsAnimation className={cn(s.animation, s.mobile)} x={4} y={6} duration={500} />}
                </div>
            </Container>
        </section>
    );
};
