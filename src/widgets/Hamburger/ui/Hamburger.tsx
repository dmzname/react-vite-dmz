import { classNames } from 'shared/lib/classNames/classNames.ts';
import cls from './Hamburger.module.scss';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/types/ButtonTypes.ts';
import { useState } from 'react';
import { NavMenu } from 'widgets/NavMenu/ui/NavMenu.tsx';

interface IHamburgerProps {
    className?: string;
}

export const Hamburger = ({ className }: IHamburgerProps) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <Button
                theme={ButtonTheme.CLEAR}
                className={classNames(cls.root, { [cls.active]: isActive }, [className])}
                onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </Button>
            {isActive && <NavMenu />}
        </>
    );
};
