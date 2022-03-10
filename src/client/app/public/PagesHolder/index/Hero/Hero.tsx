import { Container } from '@/ui';

import { HeroImage } from './HeroImage/HeroImage';
import { HeroContent } from './HeroContent/HeroContent';
import { HeroAnimation } from './HeroAnimation/HeroAnimation';

import s from './Hero.module.scss';

export const Hero = (): JSX.Element => {
    return (
        <section className={s.section}>
            <Container className={s.container}>
                <HeroImage />
                <HeroAnimation />
                <HeroContent />
            </Container>
        </section>
    );
};
