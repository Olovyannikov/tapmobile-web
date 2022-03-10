export interface IntegrationNavInterface {
    id: number;
    title?: string;
    setId?: (n: number) => void;
}

export const modalsSliderData: IntegrationNavInterface[] = [
    { id: 0, title: 'Банки' },
    { id: 1, title: 'Ведомственные операторы' },
    { id: 2, title: 'Ритейл и программы лояльности' },
    { id: 3, title: 'Соц. сети и блогеры' },
    { id: 4, title: 'Производители оборудования' },
    { id: 5, title: 'Разработчикам софта' },
];
