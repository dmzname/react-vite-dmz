import { FC, ReactNode, useState } from 'react';
import { VisibleContext } from '../context/VisibleContext.ts';

interface IVisibleProvider {
    children: ReactNode;
}

export const VisibleProvider: FC<IVisibleProvider> = ({ children }) => {
    const [isVisible, setIsVisible] = useState({
        navMenu: false,
        modal: false,
    });

    const defaultValue = {
        isVisible: { ...isVisible },
        setIsVisible: setIsVisible,
    };
    return <VisibleContext.Provider value={defaultValue}>{children}</VisibleContext.Provider>;
};
