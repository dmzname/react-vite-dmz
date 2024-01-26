import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavMenu.module.scss';
import { createPortal } from 'react-dom';
import { useVisible } from 'app/providers/VisibleProvider';
import { useEffect, useState } from 'react';

interface INavMenuProps {
    className?: string;
}

export const NavMenu = ({ className }: INavMenuProps) => {
    const { t } = useTranslation();
    const { isVisible } = useVisible();
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        if (!isVisible.navMenu && isShow) {
            setTimeout(() => setIsShow(isVisible.navMenu), 300);
        } else {
            setIsShow(isVisible.navMenu);
        }
    }, [isVisible.navMenu]);

    return isShow
        ? createPortal(
              <nav className={classNames(cls.root, {}, [className])}>
                  <ul
                      className={classNames(cls['nav-links-list'], {
                          [cls.active]: isVisible.navMenu,
                      })}>
                      <li className={cls['nav-link']}>{t('Обо мне')}</li>
                      <li className={cls['nav-link']}>{t('Портфолио')}</li>
                      <li className={cls['nav-link']}>{t('Контакты')}</li>
                  </ul>
              </nav>,
              document.body,
          )
        : null;
};
