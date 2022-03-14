import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Layout } from '@/layouts/Layout';

import { Container } from '@/ui';

import Left from './img/cable-left.svg';
import Right from './img/cable-right.svg';

import s from './ErrorMessage.module.scss';
import { ErrorMessageProps } from './ErrorMessage.props';

export const ErrorMessage = ({ errorCode, title, text }: ErrorMessageProps): JSX.Element => {
    const redirectTimeout = 10000;
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push("/");
        }, redirectTimeout);

        return () => clearTimeout(timeout);
    }, [router]);

    return (
        <Layout title='Ошибка 404'>
            <section className={s.error}>
                <Container>
                    <h1>{errorCode}</h1>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </Container>
                <div className={s.images}>
                    <Left />
                    <Right />
                </div>
            </section>
        </Layout>
    );
};
