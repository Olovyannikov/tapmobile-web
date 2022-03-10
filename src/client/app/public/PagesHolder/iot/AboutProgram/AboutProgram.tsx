import { useTypedDispatch } from '@client/hooks/useTypedDispatch';

import { Icon } from '@/ui';

import { About } from '@/components';

import s from './AboutProgram.module.scss';

export const AboutProgram = ({ text }): JSX.Element => {
    const { modals: { showPublicModal } } = useTypedDispatch();

    return (
        <About text={text} className={s.section}>
            <button className={s.btn} onClick={() => showPublicModal('feedback')} type='button'>
                Запросить список стран <Icon icon='arrow' width={20} height={20} />
            </button>
            <p>
                Система мониторинга и контроля M2M-устройств, настройка услуг и тарифов, интерфейс управления SIM картами (включая eSIM) и
                их группами, мониторинг состояния абонентских SIM-карт, контроль базовых услуг связи, контроль связки IMSI-IMEI, логирование
                системных событий и уведомления о системных событиях – все эти возможности даст подключение к нашей программе.
            </p>
        </About>
    );
};
