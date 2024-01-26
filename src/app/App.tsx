import { Header } from 'widgets/Header';
import { HeroBlock } from 'widgets/HeroBlock';
import { NavMenu } from 'widgets/NavMenu';
import { VisibleProvider } from './providers/VisibleProvider';

function App() {
    return (
        <VisibleProvider>
            <Header />
            <HeroBlock />
            <NavMenu />
        </VisibleProvider>
    );
}

export default App;
