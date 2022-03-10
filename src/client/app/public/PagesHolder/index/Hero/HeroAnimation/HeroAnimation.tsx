import { DotsAnimation } from '@/components';

import s from './HeroAnimation.module.scss';

export const HeroAnimation = (): JSX.Element => {
  return (
    <div className={s.animation}>
      <DotsAnimation className={s.mobile} x={4} y={6} duration={500} />

      <DotsAnimation className={s.desktop} x={4} y={3} duration={500} />
      <DotsAnimation className={s.desktop} x={4} y={3} duration={500} />
      <DotsAnimation className={s.desktop} x={4} y={3} duration={500} />
    </div>
  );
};
