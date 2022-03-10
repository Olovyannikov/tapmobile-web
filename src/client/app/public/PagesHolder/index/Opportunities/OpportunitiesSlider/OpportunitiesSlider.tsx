import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getDotInsteadOfComma, getNumericFormatWithSpaces } from '@client/utils/utils';

import s from './OpportunitiesSlider.module.scss';
import { opportunitiesSliderData, OpportunitiesSliderInterface } from './OpportunitiesSlider.interface';

export const OpportunitiesSlider = (): JSX.Element => {
    const swiper = {
        className: s.swiper,
        spaceBetween: 20,
        slidesPerView: 1.3935,
        centeredSlides: true,
        breakpoints: {
            1280: {
                slidesPerView: 3,
                centeredSlides: false,
            },
        },
    };

    return (
        <Swiper
            {...swiper}
        >
            <span className={s.label}>3 год</span>
            <span className={s.label}>2 год</span>
            <span className={s.label}>1 год</span>
            {
                opportunitiesSliderData.map((i: OpportunitiesSliderInterface) =>
                    <SwiperSlide tag='ul' className={s.slide} key={i.id}>
                        <li className={cn(s.item)}>{getDotInsteadOfComma(i.thirdYear)} </li>
                        <li className={cn(s.item)}>{getDotInsteadOfComma(i.secondYear)}</li>
                        <li className={cn(s.item)}>{getDotInsteadOfComma(i.firstYear)}</li>
                        <li className={cn(s.item, s.clients)}>{getNumericFormatWithSpaces(i.clientsCount)} клиентов</li>
                    </SwiperSlide>,
                )
            }
        </Swiper>
    );
};
