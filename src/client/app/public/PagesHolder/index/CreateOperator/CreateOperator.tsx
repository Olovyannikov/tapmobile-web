import { Container, Title } from '@/ui';

import { useIsLarge } from '@client/hooks/useMediaQuery';

import { Slider } from './Slider/Slider';
import { TextMobile } from './TextMobile/TextMobile';
import { TextDesktop } from './TextDesktop/TextDesktop';
import { AnimationMobile } from './AnimationMobile/AnimationMobile';
import { AnimationDesktop } from './AnimationDesktop/AnimationDesktop';

import s from './CreateOperator.module.scss';

export const CreateOperator = (): JSX.Element => {
    const isLarge = useIsLarge();

    return (
        <section className={s.createOperator}>
            <Container className={s.container}>
                <Title className={s.title}>Технология создания мобильного оператора</Title>
                {isLarge ? <TextDesktop /> : <TextMobile />}
                {isLarge ? <AnimationDesktop /> : <AnimationMobile />}
            </Container>
            <Slider />
        </section>
    );
};
