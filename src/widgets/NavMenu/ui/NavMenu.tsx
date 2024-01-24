import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavMenu.module.scss';

interface INavMenuProps {
    className?: string;
}

export const NavMenu = ({ className }: INavMenuProps) => {
    const { t } = useTranslation();

    return <div className={classNames(cls.root, {}, [className])}>{t('NAVMENU')}</div>;
};
