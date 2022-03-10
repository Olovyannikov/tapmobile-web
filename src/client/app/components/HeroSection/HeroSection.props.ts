import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Property } from 'csstype';
import BackgroundImage = Property.BackgroundImage;

export interface HeroSectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text?: string;
    title?: string;
}
