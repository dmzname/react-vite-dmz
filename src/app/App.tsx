import { Header } from 'widgets/Header';
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className={'root-hero'}>
                <div className={'hero-title'}>{t('Coming Soon')}</div>
            </div>
        </>
    );
}

export default App;
