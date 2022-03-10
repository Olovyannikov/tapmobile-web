import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ModalsPublicType } from '@store/models/modals/types';

export interface ConnectProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title?: string;
    wizard?: ModalsPublicType;
    buttonText?: string;
}
