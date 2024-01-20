import { classNames } from 'shared/lib/classNames/classNames.ts';
import cls from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/types/ButtonTypes.ts';

interface ILanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({ className }: ILanguageSwitcherProps) => {
    // TODO: Убрать потом сделать с помощью i18n.changeLanguage(locale)
    const { i18n } = useTranslation();

    const handleLang = (locale: string) => {
        i18n.changeLanguage(locale);
    };

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <div className={classNames(cls.root, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={classNames(cls.btn, { [cls.active]: i18n.language === 'ua' })}
                    onClick={() => handleLang('ua')}>
                    UA
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={classNames(cls.btn, { [cls.active]: i18n.language === 'en' })}
                    onClick={() => handleLang('en')}>
                    EN
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={classNames(cls.btn, { [cls.active]: i18n.language === 'ru' })}
                    onClick={() => handleLang('ru')}>
                    RU
                </Button>
            </div>
        </div>
    );
};
