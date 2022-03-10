import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeroContentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title?: string;
    text?: string;
}
