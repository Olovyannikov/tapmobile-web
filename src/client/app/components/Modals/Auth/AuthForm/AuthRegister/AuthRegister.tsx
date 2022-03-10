import { yupResolver } from '@hookform/resolvers/yup';

import { FormProvider, useForm } from 'react-hook-form';

import Link from 'next/link';
import { Button, Form } from '@/ui';

import { FormInput } from '@/components';

import { RegisterValidation } from '@client/utils/schemas/register.validation';

import s from './AuthRegister.module.scss';

export const AuthRegister = (): JSX.Element => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterValidation),
    });

    const onSubmit = form.handleSubmit((data) => console.log(data));

    return (
        <FormProvider {...form}>
            <Form>
                <FormInput full title='Электронная почта' name='email' inputMode='email' />
                <FormInput title='Имя' name='name' type='text' />
                <FormInput title='Фамилия' name='lastName' type='text' />
                <FormInput full title='Компания' name='company' type='text' />
                <FormInput full title='Телефон' name='tel' type='text' mask='+7(###)-##-##-###' />
                <FormInput full type='password' title='Пароль' name='password' />
                <FormInput full type='password' title='Повторите пароль' name='passwordConfirm' />
                <Button disabled={!form.formState.isValid} onClick={onSubmit}>
                    Зарегистрироваться
                </Button>
                <p className={s.agreement}>
                    Нажимая на кнопку «Зарегистрироваться» вы принимаете условия
                    <Link href='/user-agreement'>
                        <a>пользовательского соглашения</a>
                    </Link>
                </p>
            </Form>
        </FormProvider>
    );
};
