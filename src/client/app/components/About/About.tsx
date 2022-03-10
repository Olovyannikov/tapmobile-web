import cn from 'classnames';

import { Container, Title } from '@/ui';

import s from './About.module.scss';
import { AboutProps } from './About.props';

export const About = ({ text, className, children, ...props }: AboutProps): JSX.Element => {
    return (
        <section className={cn(s.about, className)} {...props}>
            <Container>
                <Title>О программе</Title>
                <p>
                    {text}
                </p>
                {children}
            </Container>
        </section>
    );
};
