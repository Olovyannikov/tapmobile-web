import cn from 'classnames';

import Image from 'next/image';
import { Button, Container, Title } from '@/ui';

import s from './Demo.module.scss';
import { DotsAnimation } from '@/components';

export const Demo = ({}): JSX.Element => {

    return (
        <section className={s.demo}>
            <Container className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.content}>
                        <Title className={s.title}>Получите демо доступ к личному кабинету</Title>
                        <Button className={s.btn}>Получить консультацию</Button>
                    </div>
                    <div className={s.img}>
                        <Image src='/img/demo-image.png' layout='responsive' width='500' height='250' />
                    </div>
                </div>

                <DotsAnimation className={cn(s.animation, s.mobile)} x={3} y={3} duration={500} />
                <DotsAnimation className={cn(s.animation, s.desktop)} x={11} y={3} duration={500} />
            </Container>
        </section>
    );
};
