import { classNames } from 'shared/lib/classNames/classNames.ts';
import cls from './LanguageSwitcher.module.scss';
import { NavLink } from 'react-router-dom';

interface ILanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({ className }: ILanguageSwitcherProps) => {
    return (
        <div className={classNames(cls.root, {}, [className])}>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    classNames(cls['lang-link'], { [cls.active]: isActive })
                }>
                UA
            </NavLink>
            <NavLink
                to='/en/'
                className={({ isActive }) =>
                    classNames(cls['lang-link'], { [cls.active]: isActive })
                }>
                EN
            </NavLink>
            <NavLink
                to='/ru/'
                className={({ isActive }) =>
                    classNames(cls['lang-link'], { [cls.active]: isActive })
                }>
                RU
            </NavLink>
        </div>
    );
};
