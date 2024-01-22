import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss';

interface IErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: IErrorPageProps) => {
    return <div className={classNames(cls.root, {}, [className])}>ERROR</div>;
};
