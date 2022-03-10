import { useTypedDispatch } from '@client/hooks/useTypedDispatch';
import { Button } from '@/ui';

import s from './HeroButtons.module.scss';

export const HeroButtons = ({}): JSX.Element => {
    const { modals: { showPublicModal } } = useTypedDispatch();

    return (
        <div className={s.controls}>
            <Button onClick={() => showPublicModal('auth')}>Запустить оператора</Button>
            <Button variant='secondary'>Демо личного кабинета</Button>
        </div>
    );
};
