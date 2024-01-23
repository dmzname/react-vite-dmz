import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './HeroBlock.module.scss';
import { WelcomeSvg } from 'widgets/HeroBlock/ui/WelcomeSvg/WelcomeSvg.tsx';

interface IHeroBlockProps {
    className?: string;
}

export const HeroBlock = ({ className }: IHeroBlockProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <WelcomeSvg />
            <div className={cls['hero-title']}>{t('Coming Soon')}</div>
        </div>
    );
};
