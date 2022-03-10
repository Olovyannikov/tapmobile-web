export interface NavigationInterface {
    path: string;
    title: string;
}

export const nav: NavigationInterface[] = [
    { path: '/', title: 'Главная' },
    { path: '/operators', title: 'Виртуальным операторам' },
    { path: '/resellers', title: 'Реселлерам' },
    { path: '/iot', title: 'IoT провайдерам' },
    // { path: '/developers', title: 'Разработчикам' },
];
