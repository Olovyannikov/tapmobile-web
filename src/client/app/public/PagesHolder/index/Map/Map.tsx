import { Button, Container, Title } from '@/ui';

import MapImage from './img/map.svg';

import s from './Map.module.scss';

export const Map = (): JSX.Element => {
    return (
        <section className={s.map}>
            <Container className={s.container}>
                <div className={s.wrapper}>
                    <Title className={s.title}>Виртуальный оператор это мировой тренд</Title>
                    <p>Сейчас в России виртуальные операторы занимают чуть больше 3% рынка, тогда как в Европе их доля,
                        в
                        зависимости от страны, составляет 10–40%. В последние годы в России наблюдается бурный рост
                        сегмента
                        MVNO.</p>
                    <p>
                        По прогнозам аналитиков, к 2025 году доля MVNO в России увеличится до 14–15%, что составит 25
                        млн
                        чел.
                    </p>
                    <Button className={s.btn}>Получить консультацию</Button>
                </div>
            </Container>
            <div className={s.image}>
                <MapImage aria-label='Зона покрытия MVNO' />
            </div>
        </section>
    );
};
