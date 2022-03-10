import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DotsAnimationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  x: number;
  y: number;
  duration: number;
}
