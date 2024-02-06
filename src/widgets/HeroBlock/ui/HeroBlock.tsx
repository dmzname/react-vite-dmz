import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './HeroBlock.module.scss';
import { WelcomeSvg } from 'widgets/HeroBlock/ui/WelcomeSvg/WelcomeSvg.tsx';
import HeroImage from 'shared/assets/images/files-sent-animate.svg?react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/types/ButtonTypes.ts';
import { ContactsMe } from 'features/ContactsMe';

interface IHeroBlockProps {
    className?: string;
}

export const HeroBlock = ({ className }: IHeroBlockProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <div className={cls['hero-info']}>
                <WelcomeSvg />
                <p className={cls['hero-description']}>{t('heroDescription1')}</p>
                <p className={cls['hero-description']}>{t('heroDescription2')}</p>
                <div className={cls['hero-btn-group']}>
                    <Button disabled className={cls['hero-btn']}>
                        {t('Проекты')}
                    </Button>
                    <Button disabled className={cls['hero-btn']} theme={ButtonTheme.OUTLINE}>
                        {t('Загрузить CV')}
                    </Button>
                </div>
                <ContactsMe />
            </div>
            <div className={cls['hero-image']}>
                <HeroImage />
            </div>
            {/*<Decor2 className={cls.decor2} />*/}
        </div>
    );
};
