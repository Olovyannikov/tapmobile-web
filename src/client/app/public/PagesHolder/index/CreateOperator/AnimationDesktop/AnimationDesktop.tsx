import cn from 'classnames';
import { motion } from 'framer-motion';
import { Icon } from '@/ui';

import Arrow from './img/arrowDesktop.svg';
import Line from './img/lineDesktop.svg';
import ToSlider from './img/toSlidesLine.svg';
import SliderLine from './img/slidesLine.svg';

import s from './AnimationDesktop.module.scss';

export const AnimationDesktop = (): JSX.Element => {
    const animationInit = {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true },
    };

    const animationFirstElement = {
        ...animationInit,
        transition: {
            duration: 4,
            delay: 1,
        },
        variants: {
            hidden: { top: 190, right: 175, scale: 1 },
            visible: { top: 190, right: 320, scale: 0.63563 },
        },
    };

    const animateArrow = {
        ...animationInit,
        transition: {
            duration: 4,
            delay: 3,
        },
        variants: {
            hidden: { right: 200, top: 250, x: -50, opacity: 0 },
            visible: { right: 200, x: 0, opacity: 1 },
        },
    };

    const animateSecondItem = {
        ...animationFirstElement,
        transition: {
            duration: 4,
            delay: 5,
        },
        variants: {
            hidden: { right: 20, top: 190, opacity: 0 },
            visible: { scale: 0.75, opacity: 1 },
        },
    };

    const animateLine = {
        ...animateArrow,
        transition: {
            duration: 4,
            delay: 6,
        },
        variants: {
            hidden: { opacity: 0, right: 0, top: 250 },
            visible: { opacity: 1 },
        },
    };

    const animateThirdItem = {
        ...animationInit,
        transition: {
            duration: 4,
            delay: 8,
        },
        variants: {
            hidden: { right: 210, opacity: 0, top: 400 },
            visible: { opacity: 1, scale: 0.75 },
        },
    };

    const animateLineDots = {
        ...animationInit,
        transition: {
            duration: 4,
            delay: 10,
        },
        variants: {
            hidden: { opacity: 0, right: 370, top: 460 },
            visible: { opacity: 1 },
        },
    };

    const animateLastLine = {
        ...animationInit,
        transition: {
            duration: 4,
            delay: 10,
        },
        variants: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
    };

    return (
        <div className={s.animation}>
            <motion.div className={s.item} {...animationFirstElement}>
                <motion.div className={s.icon}>
                    <Icon icon='wifi' width={49} height={49} />
                </motion.div>
                <motion.b className={s.title}>MNO</motion.b>
                <motion.small className={s.description}>Наша инфраструктура</motion.small>
            </motion.div>

            <motion.div {...animateArrow} className={s.arrow}>
                <Arrow />
            </motion.div>

            <motion.div className={s.item} {...animateSecondItem}>
                <motion.div className={cn(s.icon, s.blue)}>
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

            <motion.div className={cn(s.arrow, s.dot)}  {...animateLineDots}>
                <ToSlider />
            </motion.div>

            <motion.div className={cn(s.arrow, s.line)} {...animateLastLine}>
                <SliderLine />
            </motion.div>
        </div>
    );
};
