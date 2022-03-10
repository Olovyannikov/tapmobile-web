export interface HeroBaloonInterface {
  id: number;
  icon: string;
  text: string;
}

export const heroData: HeroBaloonInterface[] = [
  { id: 0, icon: 'cast', text: 'Готовые подключения и выгодные тарифы от MNO в разных странах мира' },
  { id: 1, icon: 'device-phone', text: 'Мобильное приложение и инструменты самообслуживания для абонента' },
  { id: 2, icon: 'cash-money', text: 'Удобная платформа для старта без капитальных затрат на оборудование' },
];
