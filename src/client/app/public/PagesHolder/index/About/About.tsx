import { Container } from '@/ui';

import { AboutTop } from './AboutTop/AboutTop';
import { AboutAchievements } from './AboutAchievements/AboutAchievements';

import s from './About.module.scss';

export const About = (): JSX.Element => {
    return (
        <section className={s.about}>
            <Container>
                <AboutTop />
                <AboutAchievements />
            </Container>
        </section>
    );
};
