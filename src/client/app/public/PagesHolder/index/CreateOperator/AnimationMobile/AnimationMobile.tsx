import cn from 'classnames';
import { motion } from 'framer-motion';

import { Icon } from '@/ui';

import Arrow from './img/arrow.svg';
import Line from './img/line.svg';
import s from './AnimationMobile.module.scss';

export const AnimationMobile = (): JSX.Element => {

    const animationInit = {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true },
    };

    const animationFirstElement = {
        ...animationInit,
        transition: {
            duration: 3,
            delay: 1,
        },
        variants: {
            hidden: { top: 0, left: '50%', x: '-50%', opacity: 0 },
            visible: { top: -50, opacity: 1 },
        },
    };

    const animateIcon = {
        ...animationInit,
        transition: {
            duration: 3,
            delay: 1,
        },
        variants: {
            hidden: { marginBottom: 4 },
            visible: { scale: 0.712, marginBottom: -8 },
        },
    };

    const animateIcon2 = {
        ...animationInit,
        transition: {
            duration: 3,
            delay: 4,
        },
        variants: {
            hidden: { marginBottom: 4 },
            visible: { scale: 0.712, marginBottom: -8 },
        },
    };

    const animateArrow = {
        ...animationInit,
        transition: {
            duration: 2,
            delay: 2,
        },
        variants: {
            hidden: { left: '50%', x: '-50%', top: 25, opacity: 0 },
            visible: { top: 65, opacity: 1 },
        },
    };

    const animateSecondItem = {
        ...animationFirstElement,
        transition: {
            duration: 3,
            delay: 4,
        },
        variants: {
            hidden: { top: 180, left: '50%', x: '-50%', opacity: 0 },
            visible: { top: 125, opacity: 1 },
        },
    };

    const animateLine = {
        ...animateArrow,
        transition: {
            duration: 2,
            delay: 6,
        },
        variants: {
            hidden: { left: '50%', x: '-50%', top: 225, opacity: 0 },
            visible: { top: 235, opacity: 1 },
        },
    };

    const animateThirdItem = {
        ...animationInit,
        transition: {
            duration: 3,
            delay: 7,
        },
        variants: {
            hidden: { top: 290, left: '50%', x: '-50%', opacity: 0 },
            visible: { top: 300, opacity: 1 },
        },
    };

    const animateLineDots = {
        ...animationInit,
        transition: {
            duration: 3,
            delay: 8,
        },
        variants: {
            hidden: { top: 400, left: '50%', x: '-50%', opacity: 0 },
            visible: { top: 430, opacity: 1 },
        },
    };

    const animateLastLine = {
        ...animationInit,
        transition: {
            duration: 3,
            delay: 8,
        },
        variants: {
            hidden: { top: 430, left: '50%', x: '-50%', opacity: 0 },
            visible: { top: 480, opacity: 1 },
        },
    };

    return (
        <div className={s.animation}>
            <motion.div className={s.item} {...animationFirstElement}>
                <motion.div className={s.icon} {...animateIcon}>
                    <Icon icon='wifi' width={32} height={32} />
                </motion.div>
                <motion.b className={s.title}>MNO</motion.b>
                <motion.small className={s.description}>Наша инфраструктура</motion.small>
            </motion.div>

            <motion.div {...animateArrow} className={s.arrow}>
                {<Arrow />}
            </motion.div>

            <motion.div className={s.item} {...animateSecondItem}>
                <motion.div className={cn(s.icon, s.blue)} {...animateIcon2}>
                    <Icon icon='desktop' width={32} height={32} />
                </motion.div>
                <motion.b className={s.title}>MVNE</motion.b>
                <motion.small className={s.description}>Платформа MVNE</motion.small>
            </motion.div>

            <motion.div {...animateLine} className={s.arrow}>
                <Line />
            </motion.div>

            <motion.div className={s.item} {...animateThirdItem}>
                <div className={cn(s.icon, s.black)}>
                    <Icon icon='chip' width={42} height={42} />
                </div>
                <b className={s.title}>MVNO</b>
                <small className={s.description}>Ваш оператор</small>
            </motion.div>

            <motion.div className={cn(s.line, s.dot)}  {...animateLineDots}>
                <Line />
            </motion.div>

            <motion.div className={cn(s.line, s.arrow)} {...animateLastLine}>
                <Line />
            </motion.div>
        </div>
    );
};
