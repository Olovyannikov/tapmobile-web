import cn from 'classnames';
import { debounce } from 'lodash';
import { useEffect, useRef } from 'react';

import { lineAnimation } from '@client/services/animation';

import { DotsAnimationProps } from './DotsAnimation.props';

export const DotsAnimation = ({ x, y, duration, className, ...props }: DotsAnimationProps): JSX.Element => {
    const currentElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        lineAnimation(currentElement.current, x, y, duration);

        window.addEventListener('resize', () => {
            return currentElement && debounce(() => lineAnimation(currentElement.current, x, y, duration));
        });

        return window.removeEventListener('resize', () => {
            return currentElement && debounce(() => lineAnimation(currentElement.current, x, y, duration));
        });
    }, []);

    return (
        <div className={cn('animation__container', className)} {...props}>
            <div ref={currentElement} />
        </div>
    );
};
