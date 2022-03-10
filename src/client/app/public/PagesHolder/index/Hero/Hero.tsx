import { useIsLarge } from '@client/hooks/useMediaQuery';

import { HeroSection } from '@/components';
import { HeroButtons } from './HeroButtons/HeroButtons';

import s from './Hero.module.scss';
import { HeroBaloon } from './HeroBaloon/HeroBaloon';

export const Hero = (): JSX.Element => {
    return (
        <HeroSection
            className={s.hero}
            title='Запусти собственного мобильного оператора связи'
            text='Уже через 2 месяца вы получите SIM-карты оператора связи под брендом вашей компании и доступ в личный кабинет для управления тарифами и трафиком'
        >
            <HeroButtons />
            <HeroBaloon />
        </HeroSection>
    );
};
