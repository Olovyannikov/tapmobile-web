import s from './StepsList.module.scss';
import { stepsListData } from './StepsList.interface';

export const StepsList = (): JSX.Element => {
    return (
        <ul className={s.list}>
            {
                stepsListData.map(({ id, title, text }) =>
                    <li key={id} className={s.item}>
                        <b>{title}</b>
                        <p>{text}</p>
                    </li>,
                )
            }
        </ul>
    );
};
