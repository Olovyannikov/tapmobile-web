import cn from 'classnames';

import { useTypedDispatch } from '@client/hooks/useTypedDispatch';

import Image from 'next/image';
import { Button, Title } from '@/ui';

import { useIsLarge } from '@client/hooks/useMediaQuery';

import images from '../img/images';

import s from './ModalArticle.module.scss';
import { ModalArticleProps } from './ModalArticle.props';

export const ModalArticle = ({ title, subtitle, text, id, className, ...props }: ModalArticleProps): JSX.Element => {
    const isLarge = useIsLarge();
    const {
        modals: { hideModal },
    } = useTypedDispatch();

    const onClickModalHandler = () => {
        hideModal();
    };

    return (
        <article className={cn(s.article, className)} {...props}>
            <Title variant='h3' className={s.title}>
                {title}
            </Title>
            <b className={s.subtitle}>{subtitle}</b>
            <p className={s.text}>{text}</p>
            <Button onClick={() => hideModal} className={s.btn}>
                {isLarge ? 'Получить консультацию' : 'Запустить оператора'}
            </Button>
            <div className={s.img}>
                <Image src={images[id]} layout='responsive' />
            </div>
        </article>
    );
};
