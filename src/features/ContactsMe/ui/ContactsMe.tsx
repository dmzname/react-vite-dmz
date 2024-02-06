import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ContactsMe.module.scss';
import Telegram from 'shared/assets/icons/telegram.svg?react';
import Mail from 'shared/assets/icons/mail.svg?react';
import Hub from 'shared/assets/icons/github.svg?react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/types/ButtonTypes.ts';

interface IContactsMeProps {
    className?: string;
}

export const ContactsMe = ({ className }: IContactsMeProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <p>{t('свяжитесь со мной')}</p>
            <a href='https://t.me/dmzname' target='_blank'>
                <Telegram />
            </a>
            <Button theme={ButtonTheme.CLEAR} disabled>
                <Mail />
            </Button>
            <a href='https://github.com/dmzname' target='_blank'>
                <Hub />
            </a>
        </div>
    );
};
