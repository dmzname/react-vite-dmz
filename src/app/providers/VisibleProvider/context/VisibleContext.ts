import { createContext } from 'react';

export interface IVisibleContextProps {
    isVisible: {
        navMenu: boolean;
        modal: boolean;
    };
    setIsVisible: (isVisible: { navMenu: boolean; modal: boolean }) => void;
}

export const VisibleContext = createContext<IVisibleContextProps>({
    isVisible: { navMenu: false, modal: false },
    setIsVisible: () => {},
});
