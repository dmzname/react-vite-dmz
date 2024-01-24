import { Suspense, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import i18next from 'i18next';

export const AppLayout = () => {
    const { lang } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const supportedLang = i18next.options.supportedLngs as string[];
        const currentLang = lang ? lang : 'ua';

        if ((lang && !supportedLang?.includes(lang)) || lang === 'ua') {
            navigate('/');
        } else {
            i18next.changeLanguage(currentLang);
            document.documentElement.lang = currentLang;
        }
    }, [lang, navigate]);

    //TODO: Сделать пэйдж лоадер
    return (
        <Suspense fallback={'...LOADER'}>
            <Outlet />
        </Suspense>
    );
};
