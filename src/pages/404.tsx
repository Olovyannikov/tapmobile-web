import { ErrorMessage } from '@/components';

const Error404Page = (): JSX.Element =>
    <ErrorMessage
        errorCode={404}
        title='Страница не найдена'
        text='Запрашиваемой страницы не существует. Возможно, она была удалена или допущена ошибка в адресе страницы. Проверьте правильность адреса, или вернитесь на главную.'
    />;

export default Error404Page;
