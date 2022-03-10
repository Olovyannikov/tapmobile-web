export interface SupportItemsInterface {
    id: number;
    text: string;
}

export interface SupportInterface {
    id: number;
    title: string;
    items: SupportItemsInterface[];
}

export const supportData: SupportInterface[] = [
    {
        id: 0,
        title: 'Мы обеспечиваем',
        items: [
            { id: 0, text: 'Поддержку Ваших абонентов (по желанию)' },
            { id: 1, text: 'Техническую поддержку Вашего проекта' },
            { id: 2, text: 'Выгодные тарифы, в т.ч. на международный роуминг по всему миру' },
        ],
    },
    {
        id: 1,
        title: 'Вы самостоятельно',
        items: [
            { id: 0, text: 'Определяете маркетинговую стратегию и методы продвижения' },
            { id: 1, text: 'Управляете тарифной политикой для своих клиентов' },
            { id: 2, text: 'Принимаете оплату за мобильную связь от ваших клиентов' },
            {
                id: 3,
                text: 'Мониторите и анализируете статистику по потребляемому трафику Ваших клиентов в online-режиме',
            },
        ],
    },
];
