import { useIsLarge } from '@client/hooks/useMediaQuery';
import { useTypedDispatch } from '@client/hooks/useTypedDispatch';

import { Button, Container } from '@/ui';
import { DotsAnimation, GradientHero } from '@client/app/components';

import s from './Connect.module.scss';
import { ConnectProps } from './Connect.props';

export const Connect = ({
                            title = 'Подключайтесь прямо сейчас',
                            wizard = 'feedback',
                            buttonText = 'Стать партнером',
                            ...props
                        }: ConnectProps): JSX.Element => {
    const isLarge = useIsLarge();
    const { modals: { showPublicModal } } = useTypedDispatch();

    return (
        <section className={s.section} {...props}>
            <Container>
                <div className={s.wrapper}>
                    <h2>{title}</h2>
                    <Button size='small' onClick={() => showPublicModal(wizard)}>{buttonText}</Button>
                    <div className={s.gradient}>
                        <GradientHero />
                    </div>
                    {isLarge && <DotsAnimation className={s.animation} x={13} y={4} duration={500} />}
                    {!isLarge && <DotsAnimation className={s.animation} x={3} y={3} duration={500} />}
                </div>
            </Container>
        </section>
    );
};
