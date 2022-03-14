import { ErrorMessage } from '@/components';

const Error500Page = (): JSX.Element =>
    <ErrorMessage
        errorCode={500}
        title='Внутренняя ошибка сервера'
        text='Что-то пошло не так, и сейчас сервер не может обработать запрос. Пожалуйста, свяжитесь с технической поддержкой сайта.'
    />;

export default Error500Page;
