import cn from 'classnames';

import { ModalArticle } from './ModalArticle/ModalArticle';

import { modalArticleData } from './ModalArticle/ModalArticle.data';

import s from './ModalsContent.module.scss';
import { ModalsContentProps } from './ModalsContent.props';

export const ModalsContent = ({ articleId }: ModalsContentProps): JSX.Element => {
    return (
        <div>
            {modalArticleData.map(({ id, title, subtitle, text }) => (
                <ModalArticle
                    className={cn(s.article, { [s.active]: id === articleId })}
                    key={id}
                    id={articleId}
                    title={title}
                    subtitle={subtitle}
                    text={text}
                />
            ))}
        </div>
    );
};
