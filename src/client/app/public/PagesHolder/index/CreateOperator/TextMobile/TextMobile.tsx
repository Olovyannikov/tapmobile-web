import { motion } from 'framer-motion';

import s from './TextMobile.module.scss';

export const TextMobile = (): JSX.Element => {
    const animation = {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: {
            once: true,
        },
        transition: {
            duration: 4,
            delay: 2,
        },
        variants: {
            visible: {
                opacity: [0, 1, 0],
            },
            hidden: { opacity: 0 },
        },
    };

    const animation2 = {
        ...animation,
        transition: {
            duration: 4,
            delay: 6,
        },
    };

    const animation3 = {
        ...animation,
        transition: {
            duration: 4,
            delay: 10,
        },
        variants: {
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
        },
    };

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
