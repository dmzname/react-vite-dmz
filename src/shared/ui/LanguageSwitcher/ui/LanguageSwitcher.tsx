import {classNames} from 'shared/lib/classNames/classNames.ts';
import cls from './LanguageSwitcher.module.scss';
import {Button} from "shared/ui/Button";
import {ButtonTheme} from "shared/ui/Button/types/ButtonTypes.ts";
import {useState} from "react";

interface ILanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({className}: ILanguageSwitcherProps) => {
    // TODO: Убрать потом сделать с помощью i18n.changeLanguage(locale)
    const [locale, setLocale] = useState('ua')

    const handleLang = (locale: string) => {
        setLocale(locale);
    };

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={classNames(cls['language-switcher-btn'], {[cls.active]: locale === 'ua'})}
                onClick={() => handleLang('ua')}>ua</Button>
            <Button
                theme={ButtonTheme.CLEAR}
                className={classNames(cls['language-switcher-btn'], {[cls.active]: locale === 'en'})}
                onClick={() => handleLang('en')}>en</Button>
            <Button
                theme={ButtonTheme.CLEAR}
                className={classNames(cls['language-switcher-btn'], {[cls.active]: locale === 'ru'})}
                onClick={() => handleLang('ru')}>ru</Button>
        </div>
    );
};