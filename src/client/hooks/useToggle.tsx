import { useState } from 'react';

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
    const [value, setValue] = useState<boolean>(initialValue);
    const toggle = () => setValue(!value);
    return [value, toggle];
};
