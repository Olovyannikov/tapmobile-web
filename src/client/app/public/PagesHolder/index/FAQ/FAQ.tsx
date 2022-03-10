import cn from 'classnames';
import { Container, Title, Accordion } from '@/ui';

import s from './FAQ.module.scss';

import { faqData } from './FAQ.data';

export const FAQ = (): JSX.Element => {
    return (
        <section className={s.faq}>
            <Container>
                <Title className={s.title}>Частые вопросы</Title>
                <div className={cn(s.mostFrequently, s.accordions)}>
                    {
                        faqData.filter(i => i.isFrequently).map(i =>
                            <Accordion key={i.id} title={i.title} active>
                                {i.text}
                            </Accordion>,
                        )
                    }
                </div>
                <div className={cn(s.collapses, s.accordions)}>
                    {
                        faqData.filter(i => !i.isFrequently).map(i =>
                            <Accordion key={i.id} title={i.title} isIcon>
                                {i.text}
                            </Accordion>,
                        )
                    }
                </div>
            </Container>
        </section>
    );
};
