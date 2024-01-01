import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import { ReactComponent as Logo } from 'shared/assets/dmz_logo.svg'

interface IHeaderProps {
    className?: string;
}

export const Header = ({className}: IHeaderProps) => {
    return (
        <header className={classNames(cls.root, {}, [className])}>
            <a className={cls['header-logo-link']}>
                <Logo className={cls['header-logo']} />
                Dmitro Zabelin
            </a>
        </header>
    );
};