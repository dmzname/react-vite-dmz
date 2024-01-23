import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Hamburger.module.scss';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/types/ButtonTypes.ts';

interface IHamburgerProps {
    className?: string;
}

export const Hamburger = ({ className }: IHamburgerProps) => {
    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames(cls.root, {}, [className])}>
            <span></span>
            <span></span>
            <span></span>
        </Button>
    );
};
