import cn from 'classnames';

import s from './Burger.module.scss';
import { BurgerProps } from './Burger.props';

export const Burger = ({ isActive = false, className, ...props }: BurgerProps): JSX.Element =>
    <button
        className={cn(s.burger, className, { [s.active]: isActive })}
        type='button'
        {...props}
    />;
