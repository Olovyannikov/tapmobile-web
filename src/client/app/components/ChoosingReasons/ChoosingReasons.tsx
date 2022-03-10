import cn from 'classnames';
import { useTypedDispatch } from '@client/hooks/useTypedDispatch';

import { Container, Icon, Title } from '@/ui';

import s from './ChoosingReasons.module.scss';
import { ChoosingReasonsProps } from './ChoosingReasons.props';

export const ChoosingReasons = ({
                                    title = 'Почему выбирают нас',
                                    subtitle,
                                    list,
                                    className,
                                    ...props
                                }: ChoosingReasonsProps): JSX.Element => {
    const { modals: { showPublicModal } } = useTypedDispatch();

    return (
        <section className={cn(s.section, className)} {...props}>
            <Container className={s.container}>
                <Title className={s.title}>{title}</Title>
                <div className={s.content}>
                    {subtitle && <h3>{subtitle}</h3>}
                    <ul className={s.list}>
                        {list && list.map(i =>
                            <li className={s.item} key={i.id}>
                                <p>{i.text}</p>
                                {i.links && i.links.map(l =>
                                    <button onClick={() => showPublicModal(l.link)} key={l.id}>{l.text}
                                        <Icon icon='arrow' width={20} height={20} />
                                    </button>)}
                            </li>,
                        )}
                    </ul>
                </div>
            </Container>
        </section>
    );
};
