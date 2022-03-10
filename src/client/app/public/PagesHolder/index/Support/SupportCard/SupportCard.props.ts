import { SupportItemsInterface } from '../Support.data';

export interface SupportCardProps {
    id: number;
    title: string;
    items: SupportItemsInterface[];
}
