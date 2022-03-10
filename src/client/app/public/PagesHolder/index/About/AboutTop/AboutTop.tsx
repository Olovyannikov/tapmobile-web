import { Subtitle, Title } from '@/ui';

import s from './AboutTop.module.scss';

export const AboutTop = (): JSX.Element => {
    return (
        <div className={s.top}>
            <div>
                <Title className={s.title}>О нас</Title>
                <Subtitle className={s.subtitle}>
                    Наша цель - раскрыть потенциал наших Партнеров и зарабатывать вместе с ними! Наша команда способна выполнить проект
                    любой сложности в телекоммуникационной сфере в любой точке мира!
                </Subtitle>
            </div>
            <div className={s.records}>
                <div>
                    <b>12 лет</b>
                    <p>Работаем на рынке с 2009 года</p>
                </div>
                <div>
                    <b>4 офиса</b>
                    <p>Международная компания с офисами в Гонконге, Латвии, Великобритании и России</p>
                </div>
            </div>
        </div>
    );
};
