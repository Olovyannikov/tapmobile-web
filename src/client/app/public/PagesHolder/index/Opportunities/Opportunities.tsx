import { Container, Title } from '@/ui';
import { OpportunitiesSlider } from './OpportunitiesSlider/OpportunitiesSlider';

import s from './Opportunities.module.scss';

export const Opportunities = (): JSX.Element => {
    return (
        <section className={s.opportunities}>
            <Container>
                <Title>Ваши возможности</Title>
                <p className={s.description}>Вы заработаете на запуске виртуального оператора даже с несколькими тысячами клиентов</p>
                <OpportunitiesSlider />
            </Container>
        </section>
    );
};
