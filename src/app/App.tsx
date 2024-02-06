import { Header } from 'widgets/Header';
import { HeroBlock } from 'widgets/HeroBlock';
import { VisibleProvider } from './providers/VisibleProvider';
import DecorOne from 'shared/assets/images/decor1.svg?react';
import { NavMenu } from 'widgets/NavMenu';

function App() {
    return (
        <VisibleProvider>
            <DecorOne className={'decor-element-1'} />
            <Header />
            <HeroBlock />
            <NavMenu />
        </VisibleProvider>
    );
}

export default App;
