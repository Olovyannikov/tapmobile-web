import { useTypedDispatch } from '@client/hooks/useTypedDispatch';

import { Button } from '@/ui';

import { HeroSection } from '@/components';

import s from './Hero.module.scss';

export const Hero = ({}): JSX.Element => {
    const { modals: { showPublicModal } } = useTypedDispatch();

    return (
        <HeroSection
            className={s.hero}
            title='Международный роуминг'
            text='Мгновенный доступ Оператора к роуминговым услугам по минимальной цене'
        >
            <Button onClick={() => showPublicModal('feedback')}>Получить консультацию</Button>
        </HeroSection>
    );
};
