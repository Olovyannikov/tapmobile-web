import { Baloon, Icon } from '@/ui';

import s from './HeroBaloon.module.scss';
import { heroData, HeroBaloonInterface } from './HeroBaloon.interface';

export const HeroBaloon = (): JSX.Element => {
  return (
    <Baloon className={s.baloon}>
      <ul className={s.list}>
        {
          heroData.map(({ id, text, icon }: HeroBaloonInterface): JSX.Element =>
            <li key={id} className={s.item}>
              <Icon icon={icon} width={32} height={32} />
              <p>{text}</p>
            </li>,
          )
        }
      </ul>
    </Baloon>
  )
};
