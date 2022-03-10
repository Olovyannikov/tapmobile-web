import cn from 'classnames';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import { Icon } from '@/ui';

import s from './Accodrion.module.scss';
import { AccordionProps } from './Accordion.props';

export const Accordion = ({
                              title,
                              children,
                              className,
                              isIcon = false,
                              active = false,
                              icon,
                              ...props
                          }: PropsWithChildren<AccordionProps>): JSX.Element => {
    const [isActive, setActive] = useState<boolean>(active);
    const contentRef = useRef<HTMLDivElement>(null);

    const onActiveToggleHandler = () => setActive(!isActive);

    useEffect(() => {
        if (contentRef.current && isActive) {
            contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
        } else if (contentRef.current && !isActive) {
            contentRef.current.style.maxHeight = '0';
        }
    }, [contentRef, isActive]);

    return (
        <article className={cn(s.accordion, isIcon && s.icon, isActive && s.active)} {...props}>
            <button onClick={onActiveToggleHandler} className={s.button}>
                {title}
                {icon ?? <Icon icon='chevron' width={24} height={24} />}
            </button>
            <div ref={contentRef} className={s.content}>{children}</div>
        </article>
    );
};
