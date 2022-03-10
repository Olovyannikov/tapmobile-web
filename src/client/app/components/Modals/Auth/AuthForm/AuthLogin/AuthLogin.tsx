import { yupResolver } from '@hookform/resolvers/yup';

import { useForm, FormProvider } from 'react-hook-form';

import { Button, Form } from '@/ui';
import { FormInput } from '@/components';

import { LoginValidation } from '@client/utils/schemas/login.validation';

export const AuthLogin = (): JSX.Element => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginValidation),
    });

    const onSubmit = form.handleSubmit((data) => {
        console.log(data);
        form.reset();
    });

    return (
        <FormProvider {...form}>
            <Form>
                <FormInput title='Введите email'
                           name='email' full />
                <FormInput
                    full type='password' name='password' title='Введите пароль' />
                <Button disabled={!form.formState.isValid} onClick={onSubmit}>Войти</Button>
                <Button variant='ghost'>Восстановить пароль</Button>
            </Form>
        </FormProvider>
    );
};
