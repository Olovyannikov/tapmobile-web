import { Button, Subtitle, Title } from '@/ui';

import { HeroBaloon } from '../HeroBaloon/HeroBaloon';

import s from './HeroContent.module.scss';
import { useTypedDispatch } from '@client/hooks/useTypedDispatch';

export const HeroContent = (): JSX.Element => {
    const { modals: { showPublicModal } } = useTypedDispatch();

    return (
        <div className={s.content}>
            <Title variant='h1' className={s.title}>
                Запусти собственного мобильного оператора связи
            </Title>
            <Subtitle className={s.subtitle}>
                Уже через 2 месяца вы получите SIM-карты оператора связи под брендом вашей компании и доступ в личный
                кабинет для управления
                тарифами и трафиком
            </Subtitle>
            <div className={s.controls}>
                <Button onClick={() => showPublicModal('auth')}>Запустить оператора</Button>
                <Button variant='secondary'>Демо личного кабинета</Button>
            </div>
            <HeroBaloon />
        </div>
    );
};
