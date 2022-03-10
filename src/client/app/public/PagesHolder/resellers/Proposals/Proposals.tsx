import { Container, Icon, Title } from '@/ui';
import { proposalsData } from './Proposals.data';

import s from './Proposals.module.scss';

export const Proposals = ({}): JSX.Element => {
    return (
        <section className={s.section}>
            <Container>
                <Title className={s.title}>Для кого наши предложения</Title>
                <ul className={s.list}>
                    {proposalsData.map(i =>
                        <li key={i.id}>
                            <Icon icon={i.icon} width={64} height={64} />
                            <span>{i.text}</span>
                        </li>,
                    )}
                </ul>
            </Container>
        </section>
    );
};
