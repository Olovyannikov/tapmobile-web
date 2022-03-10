import { motion } from 'framer-motion';

import s from './TextDesktop.module.scss';
import { animation, animation2, animation3 } from './TextDesktop.props';

export const TextDesktop = (): JSX.Element => {
    return (
        <div className={s.text}>
            <div className={s.animation}>
                <motion.p {...animation}>Вам не нужно строить станции и получать лицензии связи, все уже готово.</motion.p>
                <motion.p {...animation2}>
                    Мы подключаем вас к нашей MVNE платформе, которая включает всю нашу инфраструктуру, CRM, инструменты аналитики и другие
                    компоненты для работы виртуального оператора.
                </motion.p>
                <motion.p {...animation3}>Вы настраиваете виртуального оператора и интегрируете в свой бизнес</motion.p>
            </div>
        </div>
    );
};
