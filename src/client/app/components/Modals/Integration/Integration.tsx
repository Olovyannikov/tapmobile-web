import { useContext } from 'react';
import { useTypedDispatch } from '@client/hooks/useTypedDispatch';

import { Icon } from '@/ui';

import { IntegrationNav } from './IntegrationNav/IntegrationNav';
import { IntegrationContent } from './IntegrationContent/IntegrationContent';

import s from './Integration.module.scss';
import { SliderStateContext } from '@client/context/slider.context';

export const Integration = (): JSX.Element => {
    const {
        modals: { hideModal },
    } = useTypedDispatch();

    const { id } = useContext(SliderStateContext);

    return (
        <div className={s.integration}>
            <div className={s.top}>
                <h2 className={s.title}>Эффективная интеграция для вашего бизнеса</h2>
                <button className={s.close} aria-label='Закрыть модальное окно' onClick={hideModal}>
                    <Icon icon='close' width={24} height={24} />
                </button>
            </div>
            <div className={s.content}>
                <IntegrationNav />
                <IntegrationContent articleId={id} />
            </div>
        </div>
    );
};
