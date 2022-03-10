import { DotsAnimation } from '@/components';

import s from './HeroAnimation.module.scss';
import { useIsLarge } from '@client/hooks/useMediaQuery';

export const HeroAnimation = ({}): JSX.Element => {
    const isLarge = useIsLarge();

    return (
        <div className={s.animation}>
            {isLarge && <>
                <DotsAnimation className={s.desktop} x={4} y={3} duration={500} />
                <DotsAnimation className={s.desktop} x={4} y={3} duration={500} />
                <DotsAnimation className={s.desktop} x={4} y={3} duration={500} />
            </>}
            {!isLarge && <DotsAnimation className={s.mobile} x={4} y={6} duration={500} />}
        </div>
    );
};
