import s from './SupportCardsList.module.scss';
import { SupportCardsListProps } from './SupportCardsList.props';

export const SupportCardsList = ({ items }: SupportCardsListProps): JSX.Element => {
    return (
        <ul className={s.list}>
            {
                items.map(i =>
                    <li className={s.item} key={i.id}>
                        {i.text}
                    </li>,
                )
            }
        </ul>
    );
};
