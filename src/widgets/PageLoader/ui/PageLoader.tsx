import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.root, {}, [className])}>...LOADER</div>
);
