import { useContext } from 'react';
import { VisibleContext } from '../context/VisibleContext.ts';

interface IUseVisibleResult {
    toggleNavMenu: () => void;
    toggleModal: () => void;
    isVisible: { navMenu: boolean; modal: boolean };
}

export function useVisible(): IUseVisibleResult {
    const { isVisible, setIsVisible } = useContext(VisibleContext);

    const toggleNavMenu = () => {
        setIsVisible({ ...isVisible, navMenu: !isVisible.navMenu });
    };

    const toggleModal = () => {
        setIsVisible({ ...isVisible, modal: !isVisible.modal });
    };

    return { isVisible, toggleNavMenu, toggleModal };
}
