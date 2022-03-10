import { PropsWithChildren } from 'react';
import { Subtitle, Title } from '@/ui';

import s from './HeroContent.module.scss';
import {HeroContentProps} from './HeroContent.props';

export const HeroContent = ({ title, text, children, className, ...props }: PropsWithChildren<HeroContentProps>): JSX.Element => {
    return (
        <div className={s.content} {...props}>
            <Title variant='h1' className={s.title}>
                {title}
            </Title>
            <Subtitle className={s.subtitle}>
                {text}
            </Subtitle>
            {children}
        </div>
    );
};
