import { Container, Title } from '@/ui';

import { SupportCard } from './SupportCard/SupportCard';

import { supportData } from './Support.data';

import s from './Support.module.scss';

export const Support = (): JSX.Element => {
    return (
        <section className={s.support}>
            <Container className={s.container}>
                <Title>Полная поддержка с нашей стороны</Title>
                <p className={s.description}>Вы получаете готовую платформу и оператора мобильной связи. Мы берем на себя все расходы перед
                    опорными операторами (MNO)</p>
                <div className={s.cards}>
                    {
                        supportData.map(d =>
                            <SupportCard
                                key={d.id}
                                id={d.id}
                                items={d.items}
                                title={d.title}
                            />
                        )
                    }
                </div>
            </Container>
        </section>
    );
};
