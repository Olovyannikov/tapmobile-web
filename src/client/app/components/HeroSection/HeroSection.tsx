import cn from 'classnames';
import { PropsWithChildren } from 'react';

import { Container } from '@/ui';

import { GradientHero } from '@/components';
import { HeroContent } from './HeroContent/HeroContent';
import { HeroAnimation } from './HeroAnimatrion/HeroAnimation';

import s from './HeroSection.module.scss';
import { HeroSectionProps } from './HeroSection.props';

export const HeroSection = ({ className, children, title, text, ...props }: PropsWithChildren<HeroSectionProps>): JSX.Element => {
    return (
        <section className={cn(s.section, className)} {...props}>
            <Container className={s.container}>
                <HeroAnimation />
                <GradientHero />
                <HeroContent title={title} text={text} children={children} />
            </Container>
        </section>
    );
};
