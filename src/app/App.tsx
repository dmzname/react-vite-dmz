import { Header } from '../widgets/Header';
import { CanvasHero } from 'shared/ui/CanvasHero';
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <div className={'root-hero'}>
                <div className={'hero-title'}>{t('Coming Soon')}</div>
                <CanvasHero />
            </div>
        </>
    );
}

export default App;
