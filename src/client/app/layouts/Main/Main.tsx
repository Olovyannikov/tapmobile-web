import { PropsWithChildren } from 'react';

import s from './Main.module.scss';
import { MainProps } from './Main.props';

export const Main = ({children}: PropsWithChildren<MainProps>): JSX.Element =>
  <main className={s.main}>{children}</main>
