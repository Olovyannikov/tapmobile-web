import { useTypedDispatch } from '@client/hooks/useTypedDispatch';

import { Button } from '@/ui';
import { HeroSection } from '@/components';

import s from './Hero.module.scss';

export const Hero = (): JSX.Element => {
    const { modals: { showPublicModal } } = useTypedDispatch();

    return (
        <HeroSection
            className={s.hero}
            title='Приглашаем к сотрудничеству'
            text='Увеличивайте прибыль с уникальными высокодоходными продуктами'
        >
            <Button size='small' onClick={() => showPublicModal('feedback')}>Получить консультацию</Button>
        </HeroSection>
    );
};
