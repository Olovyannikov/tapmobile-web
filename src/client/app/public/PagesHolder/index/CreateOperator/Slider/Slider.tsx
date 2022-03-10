import { useTypedDispatch } from '@client/hooks/useTypedDispatch';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import images from './img/images';

import s from './Slider.module.scss';
import { slides } from './Slider.interface';
import { useContext } from 'react';
import { SliderStateContext } from '@client/context/slider.context';

export const Slider = (): JSX.Element => {
    const {
        modals: { showPublicModal },
    } = useTypedDispatch();

    const { setId } = useContext(SliderStateContext);

    return (
        <div className={s.wrapper}>
            <Swiper
                slidesPerView={1.45}
                spaceBetween={20}
                centeredSlides={true}
                centeredSlidesBounds={true}
                breakpoints={{
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 24,
                    },
                }}
            >
                {slides.map(
                    ({ id, text }): JSX.Element => (
                        <SwiperSlide key={id} className={s.slide}>
                            <button
                                className={s.btn}
                                onClick={() => {
                                    showPublicModal('integration');
                                    setId && setId(id);
                                }}
                            >
                                <Image className={s.img} src={images[id]} layout='fill' />
                                <span className={s.description}>{text}</span>
                            </button>
                        </SwiperSlide>
                    ),
                )}
            </Swiper>
        </div>
    );
};
