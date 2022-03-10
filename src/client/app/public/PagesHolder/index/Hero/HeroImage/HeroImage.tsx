import cn from 'classnames';

import Image from 'next/image';
import { GradientHero } from '@/components';

import hero from './img/hero.jpeg';
import heroMobile from './img/hero-mobile.jpeg';

import s from './HeroImage.module.scss';

export const HeroImage = (): JSX.Element => {
  return (
    <>
      <div className={cn(s.image, s.mobile)}>
        <Image
          src={heroMobile}
          alt=''
          aria-hidden={true}
          layout='fill'
        />
        <GradientHero className={s.gradient} />
      </div>
      <div className={cn(s.image, s.desktop)}>
        <Image
          src={hero}
          alt=''
          aria-hidden={true}
          layout='fill'
        />
        <GradientHero className={s.gradient} />
      </div>
    </>
  );
};
