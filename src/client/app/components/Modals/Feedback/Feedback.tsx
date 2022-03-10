import { FormProvider, useForm } from 'react-hook-form';

import Link from 'next/link';
import { Button, Form } from '@/ui';

import { FormInput } from '@/components';

import s from './Feedback.module.scss';

export const Feedback = (): JSX.Element => {
    const form = useForm({
        mode: 'onChange',
    });

    const onSubmit = form.handleSubmit((data) => console.log(data));

    return (
        <div className={s.feedback}>
            <h2 className={s.title}>Получить консультацию</h2>
            <FormProvider {...form}>
                <Form>
                    <FormInput full title='Электронная почта' name='email' />
                    <FormInput full title='Имя' name='name' />
                    <FormInput full title='Компания' name='company' />
                    <FormInput full title='Телефон' name='tel' mask='+7(###)-##-##-###' />
                    <Button disabled={!form.formState.isValid} onClick={onSubmit}>
                        Отправить
                    </Button>
                    <p className={s.agreement}>
                        Нажимая на кнопку «Отправить» вы принимаете условия
                        <Link href='/user-agreement'>
                            <a>пользовательского соглашения</a>
                        </Link>
                    </p>
                </Form>
            </FormProvider>
        </div>
    );
};
