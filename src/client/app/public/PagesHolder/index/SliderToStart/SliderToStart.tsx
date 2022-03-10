import cn from 'classnames';

import { SetStateAction, useState } from 'react';

import { useIsLarge } from '@client/hooks/useMediaQuery';

import { Button, Container, Title } from '@/ui';
import { DotsAnimation } from '@/components';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Controller } from 'swiper';

import s from './SliderToStart.module.scss';
import { sliderToStartData, SliderToStartInterface } from './SliderToStart.interface';

export const SliderToStart = (): JSX.Element => {
    const isLarge = useIsLarge();
    const slidesTransitionDelay = 3000;
    const [firstSwiper, setFirstSwiper] = useState<SetStateAction<any>>(null);
    const [secondSwiper, setSecondSwiper] = useState<SetStateAction<any>>(null);

    const swiperTitles: SwiperProps = {
        modules: [Autoplay, Controller],
        controller: { control: secondSwiper },
        className: cn(s.slider, s.active, s.titles),
        spaceBetween: 24,
        autoplay: {
            delay: slidesTransitionDelay,
            pauseOnMouseEnter: true,
            reverseDirection: !isLarge,
        },
        pagination: {
            clickable: true,
            clickableClass: s.pagination,
            bulletClass: s.bullet,
            bulletActiveClass: s.bulletActive,
            bulletElement: 'button',
        },
        updateOnWindowResize: true,
        onSlideChangeTransitionStart: (swiper) => !isLarge && swiper.$el?.removeClass(s.active),
        onSlideChangeTransitionEnd: (swiper) => !isLarge && swiper.$el?.addClass(s.active),
        onSwiper: setFirstSwiper,
        breakpoints: {
            1280: {
                slidesPerView: 1,
            },
        },
    };

    const swiper = {
        ...swiperTitles,
        className: s.slider,
        modules: [...swiperTitles.modules!, Pagination],
        controller: { control: firstSwiper },
        onSwiper: setSecondSwiper,
        breakpoints: {
            1280: {
                slidesPerView: 1,
                pagination: false,
            },
        },
    };

    return (
        <section className={s.section}>
            <Container className={s.container}>
                <div className={s.wrapper}>
                    <Title className={s.title}>3 шага, чтобы начать</Title>
                    <Swiper {...swiperTitles}>
                        {
                            sliderToStartData.map(({ id, name }: SliderToStartInterface) =>
                                <SwiperSlide key={id}>
                                    <h3 className={s.slideName}>{name}</h3>
                                    <div className={s.progress}><span className={s.progressBar} /></div>
                                </SwiperSlide>,
                            )
                        }
                    </Swiper>
                    <Swiper
                        {...swiper}
                    >
                        {
                            sliderToStartData.map((i: SliderToStartInterface) =>
                                <SwiperSlide
                                    key={i.id}
                                    className={s.slide}
                                >
                                    <h4 className={s.slideTitle}>{i.title}</h4>
                                    <p className={s.slideText}>{i.text}</p>
                                </SwiperSlide>,
                            )
                        }
                    </Swiper>
                    <Button className={s.slideBtn}>
                        {isLarge ? 'Зарегистрироваться' : 'Получить консультацию'}
                    </Button>

                    {!isLarge && <DotsAnimation className={cn(s.mobileAnimation, s.animation)} x={3} y={5} duration={500} />}
                    {isLarge && <DotsAnimation className={cn(s.animation, s.desktopAnimation)} x={8} y={5} duration={500} />}
                </div>
            </Container>
        </section>
    );
};
