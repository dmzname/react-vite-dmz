import { classNames } from 'shared/lib/classNames/classNames.ts';
import cls from './Hamburger.module.scss';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/types/ButtonTypes.ts';
import { useState } from 'react';
import { useVisible } from 'app/providers/VisibleProvider';

interface IHamburgerProps {
    className?: string;
}

export const Hamburger = ({ className }: IHamburgerProps) => {
    const [isActive, setIsActive] = useState(false);
    const { toggleNavMenu } = useVisible();

    const handleClick = () => {
        toggleNavMenu();
        setIsActive(!isActive);
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.root, { [cls.active]: isActive }, [className])}
            onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
        </Button>
    );
};
