import { ModalsPublicType } from '@store/models/modals/types';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type ReasonItem = {
    id: number;
    text?: string;
    links?: {
        id: number;
        text: string;
        link: ModalsPublicType;
    }[]
}

export interface ChoosingReasonsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    title?: string;
    subtitle?: string;
    list?: ReasonItem[];
}
