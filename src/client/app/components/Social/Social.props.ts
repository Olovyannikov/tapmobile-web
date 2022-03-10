import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SocialProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    links: {
        id: number;
        icon: string;
        path: string;
        name: string;
    }[]
}
