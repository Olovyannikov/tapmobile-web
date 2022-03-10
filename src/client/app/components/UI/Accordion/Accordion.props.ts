import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface AccordionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isIcon?: boolean;
    icon?: ReactNode;
    active?: boolean;
}

