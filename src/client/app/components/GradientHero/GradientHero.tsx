import cn from 'classnames';

import Gradient from './img/gradient-s.svg';

import s from './GradientHero.module.scss';
import { GradientHeroProps } from './GradientHero.props';

export const GradientHero = ({ className }: GradientHeroProps): JSX.Element => {
  return (
    <div className={cn(s.gradient, className)}>
      <Gradient className={s.mobile}/>
      <div className={s.desktop}/>
    </div>
  );
};
