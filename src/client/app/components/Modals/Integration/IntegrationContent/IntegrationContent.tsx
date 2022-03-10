import cn from 'classnames';

import { IntegrationArticle } from './IntegrationArticle/IntegrationArticle';

import { integrationArticleData } from './IntegrationArticle/IntegrationArticle.data';

import s from './IntegrationContent.module.scss';
import { IntegrationContentProps } from './IntegrationContent.props';

export const IntegrationContent = ({ articleId }: IntegrationContentProps): JSX.Element => {
    return (
        <div>
            {integrationArticleData.map(({ id, title, subtitle, text }) => (
                <IntegrationArticle
                    className={cn(s.article, { [s.active]: id === articleId })}
                    key={id}
                    id={articleId as number}
                    title={title}
                    subtitle={subtitle}
                    text={text}
                />
            ))}
        </div>
    );
};
