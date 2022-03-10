import cn from 'classnames';
import { AnimateSharedLayout, motion } from 'framer-motion';

import { useContext, useState } from 'react';
import { SliderStateContext } from '@client/context/slider.context';

import { Icon } from '@/ui';

import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import s from './IntegrationNav.module.scss';
import { IntegrationNavInterface, modalsSliderData } from './IntegrationNav.interface';

export const IntegrationNav = (): JSX.Element => {
    const context = useContext(SliderStateContext);

    const [isEndDetected, setEndDetected] = useState<boolean>(false);
    const [isMiddleDetected, setMiddleDetected] = useState<boolean>(false);

    const swiper: SwiperProps = {
        freeMode: true,
        spaceBetween: 24,
        slidesPerView: 'auto',
        modules: [FreeMode, Navigation],
        className: cn(s.list, { [s.end]: isEndDetected, [s.middle]: isMiddleDetected }),
        navigation: {
            prevEl: `.${s.prev}`,
            nextEl: `.${s.next}`,
        },
        onSlideChange: (swiper) => {
            setEndDetected(swiper.isEnd);
            setMiddleDetected(!swiper.isBeginning);
        },
        onInit: (swiper) => {
            if (context.id && context.id >= 4) {
                swiper.slideTo(3);
            }
        },
    };

    return (
        <AnimateSharedLayout>
            <Swiper {...swiper}>
                {modalsSliderData.map(({ id, title }: IntegrationNavInterface) => (
                    <SwiperSlide key={id} className={s.slide} tag='li'>
                        <motion.div animate className={cn(s.tab, { [s.selected]: id === context.id })}>
                            <button className={s.title} onClick={() => context.setId && context.setId(id)}>
                                {title}
                            </button>
                            {id === context.id && <motion.div className={s.underline} layoutId='underline' aria-hidden />}
                        </motion.div>
                    </SwiperSlide>
                ))}
                <hr className={s.hr} />
                <div className={s.controls}>
                    <button className={cn(s.btn, s.prev)}>
                        <Icon icon='arrow' width={24} height={24} />
                    </button>
                    <button className={cn(s.btn, s.next)}>
                        <Icon icon='arrow' width={24} height={24} />
                    </button>
                </div>
            </Swiper>
            {/*<IntegrationContent articleId={id} />*/}
        </AnimateSharedLayout>
    );
};
