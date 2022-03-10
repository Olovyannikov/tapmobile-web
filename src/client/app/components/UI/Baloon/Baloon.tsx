import cn from 'classnames';
import { PropsWithChildren } from 'react';

import s from './Baloon.module.scss';
import { BaloonProps } from './Baloon.props';

export const Baloon = ({ children, className, ...props }: PropsWithChildren<BaloonProps>): JSX.Element => {
  return (
    <div className={cn(s.baloon, className)} {...props}>{children}</div>
  );
};
