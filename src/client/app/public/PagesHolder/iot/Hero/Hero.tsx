import { useIsLarge } from '@client/hooks/useMediaQuery';
import { useTypedDispatch } from '@client/hooks/useTypedDispatch';
import { Button } from '@/ui';
import { HeroSection } from '@/components';
import s from './Hero.module.scss';

export const Hero = ({}): JSX.Element => {
    const { modals: { showPublicModal } } = useTypedDispatch();

    return (
        <HeroSection
            className={s.hero}
            title='Надежная связь для IoT'
            text='Выгодные тарифы в России и по всему миру'
        >
            <Button onClick={() => showPublicModal('feedback')}>Получить консультацию</Button>
        </HeroSection>
    );
};
