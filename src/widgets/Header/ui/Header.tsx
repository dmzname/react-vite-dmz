import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { Hamburger } from '../../../features/Hamburger/ui/Hamburger.tsx';

interface IHeaderProps {
    className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
    return (
        <header className={classNames(cls.root, {}, [className])}>
            <HeaderLogo />
            <LanguageSwitcher />
            <Hamburger />
        </header>
    );
};
