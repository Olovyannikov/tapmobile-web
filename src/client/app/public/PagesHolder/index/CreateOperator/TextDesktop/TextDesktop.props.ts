export const animation = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: {
        once: true,
    },
    transition: {
        duration: 4,
        delay: 2,
    },
    variants: {
        visible: {
            opacity: [0.2, 1, 1],
        },
        hidden: { opacity: 0.2 },
    },
};

export const animation2 = {
    ...animation,
    transition: {
        duration: 4,
        delay: 4,
    },
};

export const animation3 = {
    ...animation,
    transition: {
        duration: 4,
        delay: 8,
    },
    variants: {
        visible: { opacity: [0.2, 1, 1] },
        hidden: { opacity: 0.2 },
    },
};
